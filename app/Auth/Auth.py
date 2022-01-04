from flask import render_template,url_for,redirect,flash
from flask.blueprints import Blueprint
from .Helpers.forms import EmailPasswordForm,Signup
from flask import Blueprint, render_template, redirect, url_for, request
from werkzeug.security import generate_password_hash, check_password_hash
from app.models.UserModel import User,db
from flask_login import login_user, logout_user, login_required

# Declaring the Blueprint
auth = Blueprint('auth',__name__,template_folder='templates/Auth')

# LOGIN
# It uses the EmailPasswordForm in the helpers module
@auth.route('/login')
def login():
    form = EmailPasswordForm()
    return render_template('login.html',form=form)
# SIGNUP
# It uses the Signup in the helpers module
@auth.route('/signup')
def signup():
    form = Signup()
    return render_template('signup.html',form=form)


@auth.route('/signup', methods=['POST'])
def signup_post():
    form=Signup()
    username = form.User.data
    email = form.Email.data
    password = form.Password.data

    user = User.query.filter_by(Email=email).first() # if this returns a user, then the email already exists in database

    if user: # if a user is found, we want to redirect back to signup page so user can try again
        return redirect(url_for('auth.signup'))

    # create a new user with the form data. Hash the password so the plaintext version isn't saved.
    

    new_user = User(Email=email, User=username, Password=generate_password_hash(password, method='sha256'))

    # add the new user to the database
    
    db.session.add(new_user)
    db.session.commit()
    if user: # if a user is found, we want to redirect back to signup page so user can try again
        flash('Email address already exists')

    else:
        flash('User Does not Exist')
    return redirect(url_for('auth.login'))

@auth.route('/login', methods=['POST'])
def login_post():
    form=EmailPasswordForm()
    username = form.User.data
    email = form.Email.data
    password = form.Password.data

    user = User.query.filter_by(Email=email).first()

    # check if the user actually exists
    # take the user-supplied password, hash it, and compare it to the hashed password in the database
    if not user or not check_password_hash(user.Password, password):
        flash('Please check your login details and try again.')
        return redirect(url_for('auth.login')) # if the user doesn't exist or password is wrong, reload the page

    # if the above check passes, then we know the user has the right credentials
    return redirect(url_for('main.profile'))


@auth.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('main.index'))


from flask_wtf import FlaskForm
from wtforms import StringField,PasswordField

from wtforms.validators import DataRequired, Email

class EmailPasswordForm(FlaskForm):
    User = StringField('User', validators=[DataRequired()])
    Email = StringField('Email', validators=[DataRequired(Email() ) ])
    Password = PasswordField('Password', validators=[DataRequired()])

class Signup(FlaskForm):
    User = StringField('User', validators=[DataRequired()])
    Email = StringField('Email', validators=[DataRequired(Email() ) ])
    Password = PasswordField('Password', validators=[DataRequired()])
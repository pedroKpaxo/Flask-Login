
from flask import Flask,render_template
from flask_login import LoginManager

    
def create_app():
    # - The flask instance
    app = Flask(__name__)

    # - Database connection
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite'
    app.config['SECRET_KEY']='ORDEP33'

    # - Creating the tables
    from .Models.UserModel import db
    db.init_app(app)
    with app.app_context():
        db.create_all()

    ##################
    # - BLUEPRINTS - #
    ##################

    from app.Auth.Auth import auth
    app.register_blueprint(auth)

    login_manager = LoginManager()
    login_manager.login_view = 'auth.login'
    login_manager.init_app(app)

    from app.Models.UserModel import User

    @login_manager.user_loader
    def load_user(user_id):
        # since the user_id is just the primary key of our user table, use it in the query for the user
        return User.query.get(int(user_id))

    
    return app

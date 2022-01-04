from enum import unique
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

from flask_login import UserMixin


db = SQLAlchemy()

class User(db.Model,UserMixin):
    __tablename__ = 'Users'
    id = db.Column(db.Integer, primary_key=True) # primary keys are required by SQLAlchemy
    User = db.Column(db.String)
    Email = db.Column(db.String(20),nullable=False,unique=True)
    Password = db.Column(db.String(1000),nullable=False)

    def __init__(self, User, Email, Password, ):
        self.User = User
        self.Email = Email
        self.Password = Password
        

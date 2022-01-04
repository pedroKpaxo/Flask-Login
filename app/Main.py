from re import M
from flask import Flask,render_template,url_for,json,current_app,redirect,flash
from flask.blueprints import Blueprint
from flask_sqlalchemy import SQLAlchemy
import os

from flask import Blueprint, render_template, redirect, url_for, request
from werkzeug.security import generate_password_hash, check_password_hash
from .models.UserModel import User,db
from flask_login import login_user, logout_user, login_required

Main = Blueprint('main',__name__,static_folder='static')
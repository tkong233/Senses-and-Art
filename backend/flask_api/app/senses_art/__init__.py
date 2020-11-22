from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
#import pymysql

from .setting_app import param_db_root, param_db_password,param_db_name, param_db_host

senses_art_app = Flask(__name__)

db_root =param_db_root
db_password = param_db_password
db_name = param_db_name
db_host = param_db_host

#db = pymysql.connect(db_host,db_root,db_password,db_name)
r = 'mysql://'+db_root+':'+db_password+'@'+db_host+'/'+db_name
senses_art_app.config['SQLALCHEMY_DATABASE_URI'] = r
senses_art_app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


db = SQLAlchemy(senses_art_app)

CORS(senses_art_app)


from senses_art.endpoints import *


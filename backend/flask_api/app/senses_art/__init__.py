from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
#import pymysql

senses_art_app = Flask(__name__)

db_root ='root'
db_password = 'mysqldb'
db_name = 'senses_and_art'
db_host = 'localhost'

#db = pymysql.connect(db_host,db_root,db_password,db_name)
r = 'mysql://'+db_root+':'+db_password+'@'+db_host+'/'+db_name
senses_art_app.config['SQLALCHEMY_DATABASE_URI'] = r
senses_art_app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


db = SQLAlchemy(senses_art_app)

CORS(senses_art_app)


from senses_art.endpoints import *


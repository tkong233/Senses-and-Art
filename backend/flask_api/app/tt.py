import os
from flask import Flask, request
from flask import jsonify
from flaskext.mysql import MySQL
import pymysql

app = Flask(__name__)
app.config['MYSQL_DATABASE_USER'] ='root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'miguel1205'
app.config['MYSQL_DATABASE_DB'] = 'senses_and_art'
app.config['MYSQL_DATABASE_Host'] = 'localhost'

db = MySQL()

from senses_art.endpoint import *
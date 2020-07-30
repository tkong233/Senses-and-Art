import datetime
from senses_art import db
from flask import Flask, request,jsonify
from sqlalchemy import Date
#import pymysql

class Image(db.Model):
    __tablename__ = 'images'
    image_id = db.Column(db.Integer, primary_key=True)
    image_title = db.Column(db.String(100),index=True)
    artist = db.Column(db.String(100),index=True)
    date_completed = db.Column(db.String(100),index=True)
    image_contributor = db.Column(db.String(100),index=True)
    image_source = db.Column(db.String(100),index=True)
    created_at = db.Column(db.DateTime(),index=True)

    def __init__(self,image_title,artist,date_completed,image_contributor,image_source,created_at):
        self.image_title = image_title
        self.artist = artist
        self.date_completed = date_completed
        self.image_contributor = image_title
        self.image_source = image_source
        self.created_at = created_at


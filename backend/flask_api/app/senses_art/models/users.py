from senses_art import db
from flask import Flask, request



class User(db.Model):
    __tablename__ = 'users'
    user_id = db.Column(db.Integer, primary_key=True,autoincrement=True)
    user_name = db.Column(db.String(100),index=True)
    song_id = db.Column(db.Integer, db.ForeignKey('songs.song_id'))
    image_id = db.Column(db.Integer, db.ForeignKey('images.image_id'))
    journal = db.Column(db.String(500),index=True)
    location = db.Column(db.String(100),index=True)
    latitude = db.Column(db.Float(10),index=True)
    longitude = db.Column(db.Float(10),index=True)
    is_public = db.Column(db.Boolean,default=False,nullable=False)

    
    def __init__(self, user_name, song_id, image_id, journal, location,latitude,longitude,is_public):
        #self.user_id = user_id
        self.user_name = user_name
        self.song_id = song_id
        self.image_id = image_id
        self.journal = journal
        self.location = location
        self.latitude = latitude
        self.longitude = longitude
        self.is_public = is_public
    
    def to_json(self):
        element = {
            'user_name': self.user_name,
            'song_id': self.song_id,
            'image_id': self.image_id,
            'journal': self.journal,
            'location': self.location,
            'latitude':self.latitude,
            'longitude':self.longitude,
            'is_public':self.is_public
        }
        return element
    

from senses_art import db
from flask import Flask, request



class User(db.Model):
    __tablename__ = 'users'
    user_id = db.Column(db.Integer, primary_key=True,autoincrement=True)
    user_name = db.Column(db.String(100),index=True)
    #eliminar can_share_journal cuando de actualice la BD
    #can_share_journal  = db.Column(db.Boolean,default=False,nullable=False)
    song_id = db.Column(db.Integer, db.ForeignKey('songs.song_id'))
    image_id = db.Column(db.Integer, db.ForeignKey('images.image_id'))
    journal = db.Column(db.String(500),index=True)
    location = db.Column(db.String(100),index=True)
    is_public = db.Column(db.Boolean,default=False,nullable=False)

    
    def __init__(self, user_name, song_id, image_id, journal, location,is_public):
        #self.user_id = user_id
        self.user_name = user_name
        self.song_id = song_id
        self.image_id = image_id
        self.journal = journal
        self.location = location
        self.is_public = is_public
    
    def user_to_json(self):
        element = {
            'user_id': self.user_id,
            'user_name': self.user_name,
            'song_id': self.song_id,
            'image_id': self.image_id,
            'journal': self.journal,
            'location': self.location,
            'is_public':self.is_public
        }
        return element
    

#import datetime
from senses_art import db
from flask import Flask, request


class Song(db.Model):
    __tablename__ = 'songs'
    song_id = db.Column(db.Integer, primary_key=True)
    song_title = db.Column(db.String(100), index=True)
    song_performer = db.Column(db.String(100),index=True)
    song_composer = db.Column(db.String(100),index=True)
    song_instrument = db.Column(db.String(100),index=True)
    song_contributor = db.Column(db.String(100),index=True)
    song_path = db.Column(db.String(300),index=True)

    def __init__(self, song_id, song_title, song_performer, song_composer, song_instrument, song_contributor, song_path):
        self.song_id = song_id
        self.song_title = song_title
        self.song_performer = song_performer
        self.song_composer = song_composer
        self.song_instrument = song_instrument
        self.song_contributor = song_contributor
        self.song_path = song_path


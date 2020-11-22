from flask import request, jsonify
from senses_art import senses_art_app, db
from ..models.users import User
from ..models.songs import Song
from ..models.images import Image

import requests

#import sys

import json

@senses_art_app.route('/users', methods=['GET'])
def get_users():
    global vector
    users = User.query.all()
    
    vector = []
    
    ii=1
    for e in users:
        element = {
            'user_id': e.user_id,
            'user_name': e.user_name,
            'song_id': e.song_id,
            'image_id': e.image_id,
            'journal': e.journal,
            'location': e.location,
            'longitude':e.longitude,
            'latitude':e.latitude,
            'is_public':e.is_public
        }
        ii+=1

        vector.append(element)
    
    return jsonify({'users': vector})


@senses_art_app.route('/user_send',methods=['POST'])
def post_user():
    
    if not request.json or not 'user_name' in request.json:
        abort(400)
    
    user_name = request.json['user_name']
    song_id = request.json['song_id']
    image_id = request.json['image_id']
    journal = request.json['journal']
    location = request.json['location']
    
    latitude,longitude = find_coordinates(location)
    
    is_public = request.json['is_public']

    user = User(user_name=user_name,song_id=song_id,image_id=image_id,journal=journal,location=location,is_public=is_public,longitude=longitude,latitude=latitude)
    
    db.session.add(user)
    db.session.commit()
    
    ## find size users
    #User.user_id = User.query.count()
    
    return jsonify({"user":user.to_json()})
    


def find_coordinates(self):
    
    URL = "https://geocode.search.hereapi.com/v1/geocode"
    api_key = 'VWQdcLSVaWYGXALEri-Liqp-PXeOkVRbYHM2hVupNf4' 
    #api_key = '_0oZKD9VJm6BnPSBwmUa-flJbsYmaBae27OSruyIZ9I'
    PARAMS = {'apikey':api_key,'q':self} 
    r = requests.get(url=URL,params=PARAMS)
    data = r.json()

    latitude = data['items'][0]['position']['lat']
    longitude = data['items'][0]['position']['lng']

    return latitude,longitude

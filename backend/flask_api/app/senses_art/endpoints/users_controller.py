from flask import request, jsonify
from senses_art import senses_art_app, db
from ..models.users import User
from ..models.songs import Song
from ..models.images import Image


@senses_art_app.route('/users', methods=['GET'])
def get_users():
    global vector
    users = User.query.all()
    
    vector = []
    
    for e in users:
        element = {
            'user_id': e.user_id,
            'user_name': e.user_name,
            'can_share_journal': e.can_share_journal,
            'song_id': e.song_id,
            'image_id': e.image_id,
            'journal': e.journal,
            'location': e.location,
            'is_public':e.is_public
        }

        vector.append(element)

    return jsonify({'users': vector})

from flask import request, jsonify
#from time import gmtime, strftime

from senses_art import senses_art_app, db

from ..models.songs import Song


@senses_art_app.route('/songs', methods=['GET'])
def get_songs():
    global vector
    songs = Song.query.all()
    
    vector = []
    
    for e in songs:
        element = {
            'id': e.song_id-1,
            'title': e.song_title,
            'performer': e.song_performer,
            'composer': e.song_composer,
            'instrument': e.song_instrument,
            'contributor': e.song_contributor,
            'song_path': e.song_path
        }
        vector.append(element)

    return jsonify({'songs': vector})

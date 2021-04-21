from flask import request, jsonify
from time import gmtime, strftime

from senses_art import senses_art_app, db

from ..models.images import Image

@senses_art_app.route('/images', methods=['GET'])
def get_images():
    global vector
    images = Image.query.all()
    
    vector = []
    
    for img in images:
        element = {
            'id': img.image_id,
            'image_path': img.image_path,
            'title': img.image_title,
            'artist': img.artist,
            'date': img.date_completed,
            'contributor': img.image_contributor
        }
        vector.append(element)

    return jsonify({'images': vector})

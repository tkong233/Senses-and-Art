from flask import request, jsonify
from time import gmtime, strftime

from senses_art import senses_art_app, db

from ..models.images import Image

#vector = []


@senses_art_app.route('/images', methods=['GET'])
def get_images():
    global vector
    images = Image.query.all()
    # print(images)
    vector = []
    # print(images[0].date_completed.year)
    for img in images:
        element = {
            'id': img.image_id-1,
            'image': img.image_source,
            'title': img.image_title,
            'artist': img.artist,
            'date': img.date_completed,
            'contributor': img.image_contributor
        }
        vector.append(element)

    return jsonify({'images': vector})

from flask import request, jsonify
from time import gmtime, strftime

from senses_art import senses_art_app,db

from ..models.images import Image

vector = []

@senses_art_app.route('/images',methods=['GET'])
def get_images():
    global vector
    images = Image.query.all()
    #print(images)
    vector = []
    for img in images:
        element = {'image_title': img.image_title,
        'artist': img.artist,
        'date_completed': img.date_completed,
        'image_contributor': img.image_contributor,
        'image_source': img.image_source,
        'created_at': img.created_at}
        vector.append(element)
    return jsonify(vector)
        
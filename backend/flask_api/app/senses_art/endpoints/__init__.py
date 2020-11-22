import os
import glob

from senses_art import senses_art_app

__all__ = [os.path.basename(f)[:-3]
           for f in glob.glob(os.path.dirname(__file__)+"/*.py")]

@senses_art_app.route('/')
def hello_world():
    return 'Senses and Art'
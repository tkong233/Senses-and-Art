import os
from senses_art import senses_art_app, db

__version__ = "1.0.0"

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    senses_art_app.run(host='0.0.0.0',port=port,debug=True)
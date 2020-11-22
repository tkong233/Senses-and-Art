# backend flask app




-------

## Installation
-----
use: `pip install -r requirements.txt`

## Execute
-----
run: `python run.py`

## Setting params to conect

parameters to connect with the DB in `setting_app.py`:

```Python
param_db_root='root'
param_db_password='mysqldb'
param_db_name ='senses_and_art'
param_db_host = 'localhost'
```

## API
-----

Using the URL:
`https://localhost:5000/{method_Function}`

## Methods `GET`:
-----

### Function `get_images`

URL: `https://localhost:5000/images`

##### Return Json:

```
{
  "images": [
    {
      "artist": "John Singer Sargent", 
      "contributor": "Isabella Stewart Gardner Museum", 
      "date": "1916", 
      "id": 1, 
      "image_path": "/images/1.png", 
      "title": "A Tent in the Rockies"
    }
   ]
}

```

### Function `get_songs`

URL: `https://localhost:5000/songs`

##### Return Json:

```
{
  "songs": [
    {
      "composer": "Johann Sebastian Bach", 
      "contributor": "Isabella Stewart Gardner Museum", 
      "id": 1, 
      "instrument": "Flute, Harpsichord", 
      "performer": "", 
      "song_path": "/songs/Air on the G String.mp3", 
      "title": "Air on the G String"
    }
   ]
}
```

### Function `get_users`

URL: `https://localhost:5000/users`

##### Return Json:

```
{
  "users": [
    {
      "image_id": 4, 
      "is_public": false, 
      "journal": "This is a prove of the journal too", 
      "location": "Silicon Valley, USA", 
      "song_id": 3, 
      "user_id": 1, 
      "user_name": "Ricardo Gareca"
    }
   ]
}

```

## Methods `POST`
-----

### Function `post_user`

URL: `https://localhost:5000/user_send`

##### Send Json:

```
{
            "user_name": "Juan Ramos",
            "song_id": 2,
            "image_id": 2,
            "journal": "This is a prove of the journal too",
            "location": "Silicon Valley, USA",
            "is_public": true
        }
```

##### Return Json:

```
{
    "user": {
        "image_id": 2,
        "is_public": true,
        "journal": "This is a prove of the journal too",
        "location": "Silicon Valley, USA",
        "song_id": 2,
        "user_name": "Juan Ramos"
    }
}

```




import time
from flask import Flask, request, render_template
import pymysql

db = pymysql.connect("localhost", "user", "password", "senses_and_art")

app = Flask(__name__)
#api = Api(app)


@app.route('/images', methods=['GET'])
def data_imagenes():
    cursor = db.cursor()
    sql = "SELECT * FROM images"
    cursor.execute(sql)
    results = cursor.fetchall()
    print(results)
    return render_template('index.html', results=results)


if __name__ == '__main__':
    app.run(debug=True)

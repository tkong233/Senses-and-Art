
#TEST - DB

from flask import Flask, request#, render_template
from flask import jsonify
from flaskext.mysql import MySQL
#import pymysql

app = Flask(__name__)
app.config['MYSQL_DATABASE_USER'] ='root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'miguel1205'
app.config['MYSQL_DATABASE_DB'] = 'senses_and_art'
app.config['MYSQL_DATABASE_Host'] = 'localhost'
#3306

db = MySQL(app)


@app.route('/print_test')
def example_mysql_db():
    conn = db.connect()
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM images")
    data = cursor.fetchone()
    print(data)
    #return render_template('index.html',data=data)
    return(jsonify(data))

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')
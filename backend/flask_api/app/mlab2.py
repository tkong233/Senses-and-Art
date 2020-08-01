
#TEST - DB - pymysql

from flask import Flask, request
from flask import jsonify
import pymysql



db_root ='root'
db_password = 'miguel1205'
db_name = 'senses_and_art'
db_host = 'localhost'

db = pymysql.connect(db_host,db_root,db_password,db_name)

app = Flask(__name__)

#3306


@app.route('/print_test')
def example_mysql_db():
    cursor = db.cursor()
    cursor.execute("SELECT * FROM images")
    data = cursor.fetchall()
    print(data)
    return(jsonify(data))

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')

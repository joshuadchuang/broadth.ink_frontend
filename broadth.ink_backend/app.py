from flask import Flask, request, jsonify
import sqlite3
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

DATABASE = 'database.db'

def get_db_connection():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/')
def index():
    return "Hello world"

@app.route('/create_new_student', methods=['POST'])
def create_new_student():
    data = request.json
    print("creating new user")
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('INSERT INTO Student (sid, name, demographic) VALUES (?, ?, ?)', 
                   (data['sid'], data['name'], data['demographic']))
    print("added new user")
    conn.commit()
    print("commited new user")
    conn.close()
    print("closed outta db")
    return jsonify({'status': 'Created new student successfully'}), 201


@app.route('/demographic')
def demographic():
    print("demographic")
    # conn = get_db_connection()
    
if __name__ == "__main__":
    app.run(debug=True)
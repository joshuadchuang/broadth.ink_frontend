import sqlite3

from flask import Flask, jsonify, request
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

DATABASE = "database.db"


def get_db_connection():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn


@app.route("/")
def index():
    return "Hello world"


@app.route("/create_new_student", methods=["POST"])
def create_new_student():
    data = request.json
    print("creating new user")
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO Student (sid, name, demographic) VALUES (?, ?, ?)",
        (data["sid"], data["name"], data["demographic"]),
    )
    print("added new user")
    conn.commit()
    print("commited new user")
    conn.close()
    print("closed outta db")
    return jsonify({"status": "Created new student successfully"}), 201


@app.route("/create_new_course", methods=["POST"])
def create_new_course():
    data = request.json
    print("creating new course")
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO Course (cid, course_name, teacher, short_description, num_students) VALUES (?, ?, ?, ?, ?)",
        (
            data["cid"],
            data["course_name"],
            data["teacher"],
            data["short_description"],
            data["num_students"],
        ),
    )
    print("added new course")
    conn.commit()
    print("commited new course")
    conn.close()
    print("closed outta db")
    return jsonify({"status": "Created new course successfully"}), 201


@app.route("/student_add_course", methods=["POST"])
def student_add_course():
    data = request.json
    print("joining new course")
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO CoursesEnrolled (sid, cid, course_grade) VALUES (?, ?, ?)",
        (data["sid"], data["cid"], data["course_grade"]),
    )
    print("joining new course")
    conn.commit()
    print("joining new course")
    conn.close()
    print("closed outta db")
    return jsonify({"status": "Joined new course successfully"}), 201


@app.route("/student_finish_course", methods=["POST"])
def student_finish_course():
    data = request.json
    print("Finished this course")
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "DELETE FROM CoursesEnrolled WHERE sid = ? AND cid = ?",
        (data["sid"], data["cid"]),
    )
    cursor.execute(
        "INSERT INTO CoursesTaken (sid, cid, course_grade) VALUES (?, ?, ?)",
        (data["sid"], data["cid"], data["course_grade"]),
    )
    print("Finished this course")
    conn.commit()
    print("Finished this course")
    conn.close()
    print("closed outta db")
    return jsonify({"status": "Finished this course successfully"}), 201


@app.route("/demographic")
def demographic():
    print("demographic")
    # conn = get_db_connection()


@app.route("/get_enrolled", methods=["GET"])
def get_enrolled():
    # data = request.json
    sid = 2
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "SELECT course_name, short_description from CoursesEnrolled as A, Course as B WHERE A.cid==B.cid and sid = ? ",
        (sid),
    )

    myresult = cursor.fetchall()

    result = []
    for row in myresult:
        result.append(dict(zip([column[0] for column in cursor.description], row)))

    cursor.close()
    # Close the database connection
    conn.close()

    # Return the serialized data as JSON response
    return jsonify(result)


@app.route("/student-certificates", methods=["GET"])
def certificate():
    sid = 2
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        """
        SELECT *
        FROM CoursesEnrolled ce
        INNER JOIN Course c ON ce.cid = c.cid
        WHERE ce.sid = ?
    """,
        (sid,),
    )

    myresult = cursor.fetchall()

    result = []
    for row in myresult:
        result.append(dict(zip([column[0] for column in cursor.description], row)))

    cursor.close()
    # Close the database connection
    conn.close()

    # Return the serialized data as JSON response
    return jsonify(result)


if __name__ == "__main__":
    app.run(debug=True)

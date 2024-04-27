# from flask import Flask
# from models import db, Student, Course, CoursesEnrolled, CoursesTaken  # Import db and models from models.py

# app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# db.init_app(app)  # Initialize the db with the Flask app context


# def create_tables():
#     db.create_all()  # Create tables if they don't exist

# @app.route('/')
# def index():
#     return "Hello, World!"

# if __name__ == "__main__":
#     create_tables()
#     app.run(debug=True)



from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from models import db, Student, Course, CoursesEnrolled, CoursesTaken

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
db = SQLAlchemy(app)

@app.route('/')
def index():
    return "Hello, World!"

if __name__ == "__main__":
    db.create_all()
    app.run(debug=True)
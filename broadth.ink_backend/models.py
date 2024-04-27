from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Student(db.Model):
    sid = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    demographic = db.Column(db.Text)

class Course(db.Model):
    cid = db.Column(db.Integer, primary_key=True)
    course_name = db.Column(db.String(100), nullable=False)
    teacher = db.Column(db.String(100), nullable=False)
    short_description = db.Column(db.Text)
    num_students = db.Column(db.Integer, default=0)

class CoursesEnrolled(db.Model):
    sid = db.Column(db.Integer, db.ForeignKey('student.sid'), primary_key=True)
    cid = db.Column(db.Integer, db.ForeignKey('course.cid'), primary_key=True)
    course_grade = db.Column(db.Integer)
    student = db.relationship('Student', backref='courses_enrolled')
    course = db.relationship('Course', backref='students_enrolled')

class CoursesTaken(db.Model):
    sid = db.Column(db.Integer, db.ForeignKey('student.sid'), primary_key=True)
    cid = db.Column(db.Integer, db.ForeignKey('course.cid'), primary_key=True)
    course_grade = db.Column(db.Integer)
    student = db.relationship('Student', backref='courses_taken')
    course = db.relationship('Course', backref='students_taken')

import sqlite3

# Connect to SQLite database
conn = sqlite3.connect("database.db")
print("Connected to database successfully")

# SQL commands to create tables
commands = [
    """CREATE TABLE IF NOT EXISTS Student (
        sid INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        demographic TEXT
    );""",
    """CREATE TABLE IF NOT EXISTS Course (
        cid INTEGER PRIMARY KEY,
        course_name TEXT NOT NULL,
        teacher TEXT NOT NULL,
        short_description TEXT,
        num_students INTEGER DEFAULT 0
    );""",
    """CREATE TABLE IF NOT EXISTS CoursesEnrolled (
        sid INTEGER,
        cid INTEGER,
        course_grade INTEGER,
        PRIMARY KEY (sid, cid),
        FOREIGN KEY (sid) REFERENCES Student(sid),
        FOREIGN KEY (cid) REFERENCES Course(cid)
    );""",
    """CREATE TABLE IF NOT EXISTS CoursesTaken (
        sid INTEGER,
        cid INTEGER,
        course_grade INTEGER,
        PRIMARY KEY (sid, cid),
        FOREIGN KEY (sid) REFERENCES Student(sid),
        FOREIGN KEY (cid) REFERENCES Course(cid)
    );"""
]

# Execute each command to create tables
for command in commands:
    conn.execute(command)

# Commit changes and close the connection
conn.commit()
conn.close()
print("Tables created successfully and database connection closed.")
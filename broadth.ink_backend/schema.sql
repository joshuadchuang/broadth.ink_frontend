DROP TABLE IF EXISTS students;

CREATE TABLE students (
    sid INTEGER PRIMARY KEY,
    name TEXT,
    demographic TEXT,
    -- For simplicity, store demographics as TEXT
    -- You can serialize JSON to text when storing and parse it when retrieving
    -- Or you can normalize demographic data into separate columns depending on your needs
    -- For example: age INTEGER, gender TEXT, etc.
);

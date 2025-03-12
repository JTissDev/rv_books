
-- Create database and tables
CREATE DATABASE rv_books;
USE rv_books;

CREATE TABLE authors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL
);

CREATE TABLE publishers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    genre VARCHAR(255),
    published_date DATE,
    isbn VARCHAR(255),
    description TEXT,
    status VARCHAR(50),
    price DECIMAL(10, 2),
    summary TEXT,
    series VARCHAR(255),
    volume_number INT,
    volume_title VARCHAR(255)
);

CREATE TABLE book_authors (
    book_id INT,
    author_id INT,
    PRIMARY KEY (book_id, author_id),
    FOREIGN KEY (book_id) REFERENCES books(id),
    FOREIGN KEY (author_id) REFERENCES authors(id)
);

CREATE TABLE book_publishers (
    book_id INT,
    publisher_id INT,
    PRIMARY KEY (book_id, publisher_id),
    FOREIGN KEY (book_id) REFERENCES books(id),
    FOREIGN KEY (publisher_id) REFERENCES publishers(id)
);

-- Insert test data
INSERT INTO authors (first_name, last_name) VALUES ('John', 'Doe'), ('Jane', 'Smith');
INSERT INTO publishers (name) VALUES ('Publisher One'), ('Publisher Two');
INSERT INTO books (title, genre, published_date, isbn, description, status, price, summary, series, volume_number, volume_title) 
VALUES 
('Book One', 'Fiction', '2023-01-01', '1234567890', 'Description of Book One', 'wishlist', 19.99, 'Summary of Book One', 'Series One', 1, 'Volume One'),
('Book Two', 'Non-Fiction', '2023-02-01', '0987654321', 'Description of Book Two', 'owned', 29.99, 'Summary of Book Two', 'Series Two', 2, 'Volume Two');

INSERT INTO book_authors (book_id, author_id) VALUES (1, 1), (2, 2);
INSERT INTO book_publishers (book_id, publisher_id) VALUES (1, 1), (2, 2);

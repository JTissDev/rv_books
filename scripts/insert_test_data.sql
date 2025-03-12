USE rv_books_dev;

-- Insert test data
INSERT INTO authors (first_name, last_name) VALUES ('John', 'Doe'), ('Jane', 'Smith');
INSERT INTO publishers (name) VALUES ('Publisher One'), ('Publisher Two');
INSERT INTO books (title, genre, published_date, isbn, description, status, price, summary, series, volume_number, volume_title) 
VALUES 
('Book One', 'Fiction', '2023-01-01', '1234567890', 'Description of Book One', 'wishlist', 19.99, 'Summary of Book One', 'Series One', 1, 'Volume One'),
('Book Two', 'Non-Fiction', '2023-02-01', '0987654321', 'Description of Book Two', 'owned', 29.99, 'Summary of Book Two', 'Series Two', 2, 'Volume Two');

INSERT INTO book_authors (book_id, author_id) VALUES (1, 1), (2, 2);
INSERT INTO book_publishers (book_id, publisher_id) VALUES (1, 1), (2, 2);

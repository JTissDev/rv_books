// BooksPage.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookItemFull } from '../components/ListItems/BookItem';
import apiService from '../services/apiService';
import styles from '../styles/sources/pages/Books.module.scss';
import Header from '../components/Header/Header';

const Books = () => {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBooks = async () => {
            const result = await apiService.getBooks();
            const sortedBooks = result.sort((a, b) => a.title.localeCompare(b.title));
            setBooks(sortedBooks);
        };

        fetchBooks();
    }, []);

    const handleSelectBook = (bookId) => {
        navigate(`/book/${bookId}`);
    };

    return (
        <div className={styles.page}>
            <Header />
            <main className="content">
                <h2 className={styles.title}>Tous les livres</h2>
                <div className={styles.bookList}>
                    {books.map((book) => (
                        <div
                            key={book.id}
                            onClick={() => handleSelectBook(book.id)}
                            className={styles.bookClickable}
                        >
                            <BookItemFull book={book} />
                        </div>
                    ))}
                </div>
            </main>
            <footer className={styles.footer}>
                <p>&copy; 2023 RV Books. Tous droits réservés.</p>
            </footer>
        </div>
    );
};

export default Books;
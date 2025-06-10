// BooksPage.jsx

// import libraries
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Import Services
import {fetchAllBooks} from '../services/bookService';

// Import components
import Header from '../components/Layout/Header';
import Aside from '../components/Aside/Aside';
import Footer from '../components/Layout/Footer';
import { BookItemFull } from '../components/Items/BookItem';

// Import styles
import styles from '../styles/sources/pages/Books.module.scss';

const Books = () => {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBooks = async () => {
            const result = await fetchAllBooks();
            const sortedBooks = result.sort((a, b) => a.title.localeCompare(b.title));
            setBooks(sortedBooks);
        };

        fetchBooks();
    }, []);

    const handleSelectBook = (bookId) => {
        navigate(`/book/view-${bookId}`);
    };

    return (
        <>
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
                <Aside />
            </main>
            <Footer />
        </>
    );
};

export default Books;
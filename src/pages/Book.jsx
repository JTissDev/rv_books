// BooksPage.jsx

// import libraries
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';

// Import Assets
import{STATUS_OPTIONS} from '../assets/constant/statusOption';
import { getBookInfo } from '../assets/utils/bookUtils';

// Import Services
import apiService from '../services/apiService';

// Import components
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import { BookItemFull } from '../components/ListItems/BookItem';
import {AuthorListItem} from '../components/ListItems/Authoritem';

// Import styles
import styles from '../styles/sources/components/ListItems/BookItem.module.scss';

const useLoadedBook = () => {
    const { id } = useParams();
    const { state } = useLocation();
    const [book, setBook] = useState(state?.book || null);

    useEffect(() => {
        if (!book) {
            apiService.getBookById(id).then(setBook);
        }
    }, [id, book]);

    return book;
};

export const NewBook = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to create a new book
    };

    return (
        <>
            <Header />
            <main className="content">
                <form onSubmit={handleSubmit}>
                    <h2>Create a New Book</h2>
                    <label>
                        Title:
                        <input type="text" name="title" required />
                    </label>
                    <label>
                        Author:
                        <input type="text" name="author" required />
                    </label>
                    <label>
                        Description:
                        <textarea name="description" required></textarea>
                    </label>
                    <button type="submit">Create Book</button>
                </form>
            </main>
            <Footer/>
        </>
    );
};

export const EditBook = ({onUpdate }) => {
    const book = useLoadedBook();
    if (!book) return <p>Chargement...</p>;

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to update the book
        const updatedBook = {
            title: e.target.title.value,
            author: e.target.author.value,
            description: e.target.description.value,
        };
        onUpdate(updatedBook);
    };

    return (
        <>
            <Header />
            <main className="content">
                <form onSubmit={handleSubmit}>
                    <h2>Edit Book</h2>
                    <label>
                        Title:
                        <input type="text" name="title" defaultValue={book.title} required />
                    </label>
                    <label>
                        Author:
                        <input type="text" name="author" defaultValue={book.author} required />
                    </label>
                    <label>
                        Description:
                        <textarea name="description" defaultValue={book.description} required></textarea>
                    </label>
                    <button type="submit">Update Book</button>
                </form>
            </main>
            <Footer/>
        </>
    );
};

export const ViewBook = () => {
    const book = useLoadedBook();
    if (!book) return <p>Chargement...</p>;

    const { fullTitle } = getBookInfo(book);
    const publishers = book.publishers.map(p => p.name).join(', ');

    return (
        <>
            <Header />
            <main className={styles.bookItem}>
                <h3 className={styles.title}>{fullTitle}</h3>
                <div className={styles.separator}></div>

                <div className={styles.topSection}>
                    <div className={styles.cover}></div>

                    <div className={styles.infoColumn}>
                        <div className={styles.infoColumn}>
                            <ul>{book.authors.map((author) => (
                                <AuthorListItem key={author.id} author={author} />
                            ))}</ul>
                            <div>🏢 {publishers}</div>
                            <div>📚 {book.genre}</div>
                        </div>
                        
                    </div>
                </div>

                {book.description && book.description.trim() !== '' && (
                    <div className={styles.description}>📝 {book.description}</div>
                )}

                <div className={styles.footer}>
                    <div className={styles.isbn}>🧾 ISBN: {book.isbn || 'N/A'}</div>
                    <div className={styles.price}>💰 {book.price.toFixed(2)} €</div>
                </div>
            </main>
            <Footer />
        </>
    );
};
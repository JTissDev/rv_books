// BookView.jsx

import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import apiService from '../../services/apiService';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import { AuthorListItem } from '../../components/ListItems/Authoritem';
import styles from '../../styles/sources/components/ListItems/BookItem.module.scss';

const getBookInfo = (book) => {
    const fullTitle = book.series
        ? `${book.series} - Tome ${book.volumeNumber || ''}: ${book.volumeTitle || book.title}`
        : book.title;
    const authors = book.authors.map(a => `${a.firstName} ${a.lastName}`.trim()).join(', ');
    const publishers = book.publishers.map(p => p.name).join(', ');
    return { fullTitle, authors, publishers };
};

const BookView = () => {
    const { id } = useParams();
    const { state } = useLocation();
    const [book, setBook] = useState(state?.book || null);

    useEffect(() => {
        if (!book && id) {
            apiService.getBookById(id).then(setBook);
        }
    }, [id, book]);

    if (!book) return <p>Chargement...</p>;

    const { fullTitle, authors, publishers } = getBookInfo(book);

    return (
        <>
            <Header />
            <main className={styles.bookItem}>
                <h3 className={styles.title}>{fullTitle}</h3>
                <div className={styles.separator}></div>
                <div className={styles.topSection}>
                    <div className={styles.cover}></div>
                    <div className={styles.infoColumn}>
                        <ul>{book.authors.map((author) => (
                            <AuthorListItem key={author.id} author={author} />
                        ))}</ul>
                        <div>🏢 {publishers}</div>
                        <div>📚 {book.genre}</div>
                    </div>
                </div>
                {book.description?.trim() && (
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

export default BookView;

// BooksPage.jsx

// import libraries
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';

// Import Assets
import { STATUS_OPTIONS } from '../assets/constant/statusOption';
import { getBookInfo } from '../assets/utils/bookUtils';

// Import Services
import {
    fetchAllBooks,
    fetchBookDetail
}
    from '../services/bookService';

// Import components
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import { BookItemFull } from '../components/ListItems/BookItem';
import { AuthorListItem } from '../components/ListItems/Authoritem';
import BookForm from '../components/Forms/BookForm';

// Import styles
import styles from '../styles/sources/components/ListItems/BookItem.module.scss';


const useLoadedBook = () => {
    const { id } = useParams();
    const { state } = useLocation();
    const [book, setBook] = useState(state?.book || null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!book && id) {
            fetchBookDetail(id)
                .then((data) => {
                    if (data.status === STATUS_OPTIONS.SUCCESS) {
                        setBook(data.book);
                    } else {
                        setError('Erreur lors du chargement du livre');
                        console.error('Error fetching book:', data.error);
                    }
                })
                .catch(() => setError('Impossible de récupérer le livre'));
        }
    }, [id, book]);

    return { book, error };
};

export const NewBook = () => {
    const handleSubmit = (formData) => {
        console.log('Creating new book with:', formData);
        // TODO: call createBook(formData)
    };

    return (
        <>
            <Header />
            <main className="content">
                <BookForm onSubmit={handleSubmit} mode="create" />
            </main>
            <Footer />
        </>
    );
};

export const EditBook = ({ onUpdate }) => {
    const { book, error } = useLoadedBook();

    if (error) return <p>{error}</p>;
    if (!book) return <p>Chargement...</p>;

    const handleSubmit = (formData) => {
        console.log('Updating book:', book.id, formData);
        onUpdate({ id: book.id, ...formData });
    };

    return (
        <>
            <Header />
            <main className="content">
                <BookForm initialData={book} onSubmit={handleSubmit} mode="edit" />
            </main>
            <Footer />
        </>
    );
};

export const ViewBook = () => {
    console.log('ViewBook component loaded');

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
                    <div className={styles.price}>
                        💰 {typeof book.price === 'number' ? `${book.price.toFixed(2)} €` : 'Prix non disponible'}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};
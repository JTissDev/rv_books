// BooksList.jsx
import React from 'react';
import {BookItemPreview} from '../ListItems/BookItem';
import styles from '../../styles/sources/components/HomePage/BookList.module.scss';

const BooksList = ({ books }) => {
    if (!books || books.length === 0) {
        return <p className={styles.empty}>Aucun livre à afficher.</p>;
    }
    console.log('BooksList', books); // Debug to check the books array
    
    return (
        <section className={styles.listSection}>
            <h3>Liste des livres</h3>
            <div className={styles.bookList}>
                {books.map((book) => (
                    <div key={book.id}  className={styles.bookItem} > 
                        <BookItemPreview book={book} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BooksList;

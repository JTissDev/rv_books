// BookItem.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthorListItem } from './Authoritem';
import styles from '../../styles/sources/components/ListItems/BookItem.module.scss';

// Centralise les données formattées utilisées dans tous les composants
const useBookInfo = (book) => {
    const fullTitle = book.series
        ? `${book.series} - Tome ${book.volumeNumber || ''}: ${book.volumeTitle || book.title}`
        : book.title;

    const authors = book.authors.map(a => `${a.firstName} ${a.lastName}`.trim()).join(', ');
    const publishers = book.publishers.map(p => p.name).join(', ');
    const pubYear = new Date(book.publishedDate).getFullYear();

    return { fullTitle, authors, publishers, pubYear };
};

export const BookItemMini = ({ book }) => {
    const { fullTitle } = useBookInfo(book);
    return <div>{fullTitle}</div>;
};


export const BookItemPreview = ({ book, onStatusChange, onDelete }) => {
    const navigate = useNavigate();

    const fullTitle = book.series
        ? `${book.series} - Tome ${book.volumeNumber || ''}: ${book.volumeTitle || book.title}`
        : book.title;

    const authors = book.authors.map(a => `${a.firstName} ${a.lastName}`.trim()).join(', ');
    const publishers = book.publishers.map(p => p.name).join(', ');
    const pubYear = new Date(book.publishedDate).getFullYear();

    const statusOptions = [
        { label: 'Souhaité', value: 'Wishlist' },
        { label: 'En commande', value: 'Ordered' },
        { label: 'Possédé', value: 'Owned' },
    ];

    return (
        <fieldset className={styles.bookItem}>
            <h3 className={styles.title}>{fullTitle}</h3>
            <section className={styles.topSection}>
                <div className={styles.cover}></div>

                <div className={styles.infoColumn}>
                    <ul>{book.authors.map((author)=>(
                        <AuthorListItem key={author.id} author={author} /> 
                    ))}</ul>
                    <div>🏢 {publishers}</div>
                    <div>📚 {book.genre}</div>
                </div>

                <div className={styles.statusBlock}>
                    <div>📌 Statut :</div>
                    <select
                        value={book.status}
                        onChange={(e) => onStatusChange(book.id, e.target.value)}
                    >
                        {statusOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                </div>
            </section>

            {book.description && book.description.trim() !== '' && (
                <div className={styles.description}>📝 {book.description}</div>
            )}

            <footer className={styles.footer}>
                <div className={styles.isbn}>🧾 ISBN: {book.isbn || 'N/A'}</div>
                <div className={styles.actions}>
                    <button onClick={() => navigate(`/books/${book.id}/edit`)}>Modifier</button>
                    <button onClick={() => onDelete(book.id)}>Supprimer</button>
                </div>
                <div className={styles.price}>💰 {book.price.toFixed(2)} €</div>
            </footer>
        </fieldset>
    );
};

export const BookItemFull = ({ book, onStatusChange, onDelete }) => {
    const navigate = useNavigate();
    const { fullTitle, authors, publishers, pubYear } = useBookInfo(book);

    const statusOptions = [
        { label: 'Souhaité', value: 'wishlist' },
        { label: 'En commande', value: 'ordered' },
        { label: 'Possédé', value: 'owned' },
    ];

    return (
        <div className={styles.bookItem}>
            <h3 className={styles.title}>{fullTitle}</h3>
            <div className={styles.separator}></div>

            <div className={styles.topSection}>
                <div className={styles.cover}></div>

                <div className={styles.infoColumn}>
                    <div>✍️ {authors}</div>
                    <div>🏢 {publishers}</div>
                    <div>📚 {book.genre}</div>
                </div>

                <div className={styles.statusBlock}>
                    <div>📌 Statut :</div>
                    <select
                        value={book.status}
                        onChange={(e) => onStatusChange(book.id, e.target.value)}
                    >
                        {statusOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                </div>
            </div>

            {book.description && book.description.trim() !== '' && (
                <div className={styles.description}>📝 {book.description}</div>
            )}

            <div className={styles.footer}>
                <div className={styles.isbn}>🧾 ISBN: {book.isbn || 'N/A'}</div>
                <div className={styles.actions}>
                    <button onClick={() => navigate(`/books/${book.id}/edit`)}>Modifier</button>
                    <button onClick={() => onDelete(book.id)}>Supprimer</button>
                </div>
                <div className={styles.price}>💰 {book.price.toFixed(2)} €</div>
            </div>
        </div>
    );
};

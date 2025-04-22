// BookItem.jsx

// import libraries
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import Services
// Import components
import { AuthorListItem } from './Authoritem';

// Import styles
import styles from '../../styles/sources/components/ListItems/BookItem.module.scss';

const STATUS_OPTIONS = [
    { label: 'Souhaité', value: 'wishlist' },
    { label: 'En commande', value: 'ordered' },
    { label: 'Possédé', value: 'owned' },
];

const useBookInfo = (book) => {
    const fullTitle = book.series
        ? `${book.series} - Tome ${book.volumeNumber || ''}: ${book.volumeTitle || book.title}`
        : book.title;

    const authors = book.authors.map(a => `${a.firstName} ${a.lastName}`.trim()).join(', ');
    const publishers = book.publishers.map(p => p.name).join(', ');
    const pubYear = new Date(book.publishedDate).getFullYear();

    return { fullTitle, authors, publishers, pubYear };
};

const ActionButtons = ({ bookId, onDelete }) => {
    const navigate = useNavigate();
    return (
        <div className={styles.actions}>
            <button onClick={() => navigate(`/book/${bookId}`)}>
                Modifier
            </button>
            <button onClick={() => onDelete(bookId)}>
                Supprimer
            </button>
        </div>
    );
};

export const BookItemMini = ({ book }) => {
    const { fullTitle } = useBookInfo(book);
    const navigate = useNavigate();
    return (
        <div
            onClick={() => navigate(`/book/view-${book.id}`, { state: { book } })}
            className={styles.bookMini}>
            {fullTitle}
        </div>
    );
};

export const BookItemPreview = ({ book, onStatusChange, onDelete }) => {
    const navigate = useNavigate();
    const { fullTitle } = useBookInfo(book);
    const publishers = book.publishers.map(p => p.name).join(', ');

    return (
        <fieldset className={styles.bookItem} 
        onClick={() => navigate(`/book/view-${book.id}`, { state: { book } })}>
            <h3 className={styles.title}>{fullTitle}</h3>
            <section className={styles.topSection}>
                <div className={styles.cover}></div>

                <div className={styles.infoColumn}>
                    <ul>{book.authors.map((author) => (
                        <AuthorListItem key={author.id} author={author} />
                    ))}</ul>
                    <div>🏢 {publishers}</div>
                    <div>📚 {book.genre}</div>
                </div>

                <div className={styles.statusBlock} onClick={(e) => e.stopPropagation()}>
                    <div>📌 Statut :</div>
                    <select
                        value={book.status}
                        onChange={(e) => onStatusChange(book.id, e.target.value)}
                    >
                        {STATUS_OPTIONS.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                </div>
            </section>

            {book.description && book.description.trim() !== '' && (
                <div className={styles.description}>📝 {book.description}</div>
            )}

            <footer className={styles.footer} onClick={(e) => e.stopPropagation()}>
                <div className={styles.isbn}>🧾 ISBN: {book.isbn || 'N/A'}</div>
                <ActionButtons bookId={book.id} onDelete={onDelete} />
                <div className={styles.price}>💰 {book.price.toFixed(2)} €</div>
            </footer>
        </fieldset>
    );
};

export const BookItemFull = ({ book, onStatusChange, onDelete }) => {
    const { fullTitle, authors, publishers, pubYear } = useBookInfo(book);

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
                        {STATUS_OPTIONS.map((opt) => (
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
                <ActionButtons bookId={book.id} onDelete={onDelete} />
                <div className={styles.price}>💰 {book.price.toFixed(2)} €</div>
            </div>
        </div>
    );
};
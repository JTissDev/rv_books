// BookItem.jsx
import React from 'react';

const BookItem = ({ book }) => {
    const fullTitle = book.series
        ? `${book.series} - Tome ${book.volumeNumber || ''}: ${book.volumeTitle || book.title}`
        : book.title;

    const authors = book.authors.map(a => `${a.firstName} ${a.lastName}`.trim()).join(', ');
    const publishers = book.publishers.map(p => p.name).join(', ');
    const pubYear = new Date(book.publishedDate).getFullYear();

    return (
        <div>
            <strong>{fullTitle}</strong>
            <div>📅 {pubYear} | 🧾 ISBN: {book.isbn || 'N/A'} | 💰 {book.price.toFixed(2)} €</div>
            <div>📚 Genre: {book.genre}</div>
            <div>✍️ Auteur(s): {authors}</div>
            <div>🏢 Éditeur(s): {publishers}</div>
            {book.status && <div>📌 Statut: {book.status}</div>}
            {book.description && book.description.trim() !== '' && (
                <div>📝 {book.description}</div>
            )}
        </div>
    );
};

export default BookItem;



// src/utils/bookUtils.js

export const formatBookTitle = (book) => {
    if (!book) return '';
    return book.series
        ? `${book.series} - Tome ${book.volumeNumber || ''}: ${book.volumeTitle || book.title}`
        : book.title;
};

export const formatAuthors = (authors) => {
    if (!authors?.length) return '';
    return authors.map(a => `${a.firstName} ${a.lastName}`.trim()).join(', ');
};

export const formatPublishers = (publishers) => {
    if (!publishers?.length) return '';
    return publishers.map(p => p.name).join(', ');
};

export const getYearFromDate = (date) => {
    return date ? new Date(date).getFullYear() : '';
};

export const getBookInfo = (book) => {
    const fullTitle = book.series
        ? `${book.series} - Tome ${book.volumeNumber || ''}: ${book.volumeTitle || book.title}`
        : book.title;

    const authors = book.authors.map(a => `${a.firstName} ${a.lastName}`.trim()).join(', ');
    const publishers = book.publishers.map(p => p.name).join(', ');
    const pubYear = new Date(book.publishedDate).getFullYear();

    return { fullTitle, authors, publishers, pubYear };
};

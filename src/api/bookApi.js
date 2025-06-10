// src/api/bookClient.js
import apiClient from './apiClient';

import { getAuthorsByBookId } from './authorApi';
import { getPublishersByBookId } from './publisherApi';

export const getBooks = () => apiClient.get('/books');
export const getBookById = (id) => apiClient.get(`/books/${id}`);
export const createBook = (book) => apiClient.post('/books', book);
export const updateBook = (id, book) => apiClient.put(`/books/${id}`, book);
export const deleteBook = (id) => apiClient.delete(`/books/${id}`);
export const getBooksByAuthorId = (authorId) => apiClient.get(`/authors/${authorId}/books`);
export const getBooksByPublisherId = (publisherId) => apiClient.get(`/publishers/${publisherId}/books`);
export const getBooksByStatus = (status) => apiClient.get(`/books/status/${status}`);
export const getBooksByAuthorAndPublisher = (authorId, publisherId) => apiClient.get(`/authors/${authorId}/publishers/${publisherId}/books`);
export const getBooksByPublisherAndStatus = (publisherId, status) => apiClient.get(`/publishers/${publisherId}/status/${status}/books`);
export const getBooksByAuthorAndStatus = (authorId, status) => apiClient.get(`/authors/${authorId}/status/${status}/books`);



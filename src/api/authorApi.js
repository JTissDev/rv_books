// src/api/authorApi.js
import apiClient from './apiClient';

export const getAuthors = () => apiClient.get('/authors');
export const getAuthorById = (id) => apiClient.get(`/authors/${id}`);
export const createAuthor = (author) => apiClient.post('/authors', author);
export const updateAuthor = (id, author) => apiClient.put(`/authors/${id}`, author);
export const deleteAuthor = (id) => apiClient.delete(`/authors/${id}`);
export const getAuthorsByBookId = (bookId) => apiClient.get(`/books/${bookId}/authors`);
export const getAuthorsByPublisherId = (publisherId) => apiClient.get(`/publishers/${publisherId}/authors`);

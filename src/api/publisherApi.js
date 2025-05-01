// api/publisherApi.js
import apiClient from './apiClient';

export const getPublishers = () => apiClient.get('/publishers');
export const getPublisherById = (id) => apiClient.get(`/publishers/${id}`);
export const createPublisher = (publisher) => apiClient.post('/publishers', publisher);
export const updatePublisher = (id, publisher) => apiClient.put(`/publishers/${id}`, publisher);
export const deletePublisher = (id) => apiClient.delete(`/publishers/${id}`);
export const getPublishersByBookId = (bookId) => apiClient.get(`/books/${bookId}/publishers`);

// src/services/bookService.js

import {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
  getBooksByAuthorId,
  getBooksByPublisherId,
  getBooksByStatus,
  getBooksByAuthorAndPublisher,
  getBooksByPublisherAndStatus,
  getBooksByAuthorAndStatus
} from '../api/bookApi';

export const fetchAllBooks = async () => {
  const data  = await getBooks();
  return data.sort((a, b) => a.title.localeCompare(b.title));
};

export const fetchBookDetail = async (id) => {
  const { data } = await getBookById(id);
  return data;
};

export const saveBook = async (formValues) => {
  return createBook({
    ...formValues,
    createdAt: new Date().toISOString(),
  });
};

export const editBook = async (id, formValues) => {
  return updateBook(id, { ...formValues });
};

export const removeBook = async (id) => {
  return deleteBook(id);
};

export const fetchBooksByAuthorId = async (authorId) => {
  const { data } = await getBooksByAuthorId(authorId);
  return data;
};

export const fetchBooksByPublisherId = async (publisherId) => {
  const { data } = await getBooksByPublisherId(publisherId);
  return data;
};

export const fetchBooksByStatus = async (status) => {
  const { data } = await getBooksByStatus(status);
  return data;
};

export const fetchBooksByAuthorAndPublisher = async (authorId, publisherId) => {
  const { data } = await getBooksByAuthorAndPublisher(authorId, publisherId);
  return data;
};

export const fetchBooksByPublisherAndStatus = async (publisherId, status) => {
  const { data } = await getBooksByPublisherAndStatus(publisherId, status);
  return data;
};

export const fetchBooksByAuthorAndStatus = async (authorId, status) => {
  const { data } = await getBooksByAuthorAndStatus(authorId, status);
  return data;
};


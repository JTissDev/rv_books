// src/services/authorService.js
import {
  getAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
  getAuthorsByBookId,
  getAuthorsByPublisherId
} from '../api/authorApi';

export const fetchAllAuthors = async () => {
  const { data } = await getAuthors();
  return data.sort((a, b) => a.lastName.localeCompare(b.lastName));
};

export const fetchAuthorDetail = async (id) => {
  const { data } = await getAuthorById(id);
  return data;
};

export const saveAuthor = async (formValues) => {
  return createAuthor({
    ...formValues,
    createdAt: new Date().toISOString(),
  });
};

export const editAuthor = async (id, formValues) => {
  return updateAuthor(id, { ...formValues });
};

export const removeAuthor = async (id) => {
  return deleteAuthor(id);
};

export const fetchAuthorsByBookId = async (bookId) => {
  const { data } = await getAuthorsByBookId(bookId);
  return data;
};

export const fetchAuthorsByPublisherId = async (publisherId) => {
  const { data } = await getAuthorsByPublisherId(publisherId);
  return data;
};
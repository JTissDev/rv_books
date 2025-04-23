// src/services/publisherService.js

import {
    getPublishers,
    getPublisherById,
    createPublisher,
    updatePublisher,
    deletePublisher,
    getPublishersByBookId
} from '../api/publisherApi';

export const fetchAllPublishers = async () => {
    const { data } = await getPublishers();
    return data.sort((a, b) => a.name.localeCompare(b.name));
};

export const fetchPublisherDetail = async (id) => {
    const { data } = await getPublisherById(id);
    return data;
};

export const savePublisher = async (formValues) => {
    return createPublisher({
        ...formValues,
        createdAt: new Date().toISOString(),
    });
};

export const editPublisher = async (id, formValues) => {
    return updatePublisher(id, { ...formValues });
};

export const removePublisher = async (id) => {
    return deletePublisher(id);
};

export const fetchPublishersByBookId = async (bookId) => {
    const { data } = await getPublishersByBookId(bookId);
    return data;
};




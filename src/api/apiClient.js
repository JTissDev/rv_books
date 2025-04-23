// src/api/apiClient.js

const API_URL = process.env.REACT_APP_API_URL || 'http://192.168.1.42:8080/rv-books';


const apiClient = {
    get: async (url, options = {}) => {
        const response = await fetch(`${API_URL}${url}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', ...options.headers },
            ...options,
        });
        if (!response.ok) {
            throw new Error(`Erreur lors de la requête : ${response.statusText}`);
        }
        return await response.json();
    },
    post: async (url, body, options = {}) => {
        const response = await fetch(`${API_URL}${url}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', ...options.headers },
            body: JSON.stringify(body),
            ...options,
        });
        if (!response.ok) {
            throw new Error(`Erreur lors de la requête : ${response.statusText}`);
        }
        return await response.json();
    },
    put: async (url, body, options = {}) => {
        const response = await fetch(`${API_URL}${url}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', ...options.headers },
            body: JSON.stringify(body),
            ...options,
        });
        if (!response.ok) {
            throw new Error(`Erreur lors de la requête : ${response.statusText}`);
        }
        return await response.json();
    },
    delete: async (url, options = {}) => {
        const response = await fetch(`${API_URL}${url}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json', ...options.headers },
            ...options,
        });
        if (!response.ok) {
            throw new Error(`Erreur lors de la requête : ${response.statusText}`);
        }
        return await response.json();
    },
};

export default apiClient;

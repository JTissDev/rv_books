import config from '../config';

const apiClient = {
    get: async (url, options = {}) => {
        const response = await fetch(`${config.apiBaseUrl}${url}`, {
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
        const response = await fetch(`${config.apiBaseUrl}${url}`, {
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
        const response = await fetch(`${config.apiBaseUrl}${url}`, {
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
        const response = await fetch(`${config.apiBaseUrl}${url}`, {
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

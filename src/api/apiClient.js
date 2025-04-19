import config from '../config';

const apiClient = {
    get: async (url) => {
        const response = await fetch(`${config.apiBaseUrl}${url}`);
        if (!response.ok) {
            throw new Error(`Erreur lors de la requête : ${response.statusText}`);
        }
        return await response.json();
    },
};

export default apiClient;

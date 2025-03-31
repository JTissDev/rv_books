import config from '../config';

const apiService = {
    getAuthors: async () => {
        try {
            const response = await fetch(`${config.apiBaseUrl}/authors`);
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des auteurs');
            }
            return await response.json();
        } catch (error) {
            console.error(error);
            return [];
        }
    },

    getPublishers: async () => {
        try {
            const response = await fetch(`${config.apiBaseUrl}/publishers`);
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des éditeurs');
            }
            return await response.json();
        } catch (error) {
            console.error(error);
            return [];
        }
    },
};

export default apiService;

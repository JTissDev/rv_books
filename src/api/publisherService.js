import apiClient from './apiClient';

const publisherService = {
    getPublishers: async () => {
        try {
            return await apiClient.get('/publishers');
        } catch (error) {
            console.error('Erreur lors de la récupération des éditeurs:', error);
            return [];
        }
    },
};

export default publisherService;

import apiClient from './apiClient';

const authorService = {
    getAuthors: async () => {
        try {
            return await apiClient.get('/authors');
        } catch (error) {
            console.error('Erreur lors de la récupération des auteurs:', error);
            return [];
        }
    },
};

export default authorService;

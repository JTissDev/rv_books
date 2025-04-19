const API_URL = process.env.REACT_APP_API_URL;

const apiService = {
    getAuthors: async () => {
        console.log('Fetching authors from API...'); // Debug log
        try {
            const response = await fetch(`${API_URL}/authors`,{
                method: 'GET',
                credentials: 'include', // Inclut les cookies si nécessaires
                headers: {
                  'Content-Type': 'application/json',
        }});
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
            const response = await fetch(`${API_URL}/publishers`,{
                method: 'GET',
                credentials: 'include', // Inclut les cookies si nécessaires
                headers: {
                  'Content-Type': 'application/json',
        }});
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

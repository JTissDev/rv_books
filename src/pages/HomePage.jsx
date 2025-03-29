import React from 'react';
import Header from '../components/Header/Header'; // Importation du Header
import styles from '../styles/sources/pages/HomePage.module.scss'; // Importation du style

const HomePage = () => {
    return (
        <div className="home-page">
            <Header /> {/* Intégration du Header */}
            <div className="content">
                <h2>Bienvenue sur RV Books</h2>
                <p>Gérez vos livres, auteurs et éditeurs facilement.</p>
            </div>
        </div>
    );
};

export default HomePage;

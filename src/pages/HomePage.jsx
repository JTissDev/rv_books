import React from 'react';
import Header from '../components/Header/Header'; // Importation du Header
import Aside from '../components/Aside/Aside'; // Importation du composant Aside
import styles from '../styles/sources/pages/HomePage.module.scss'; // Importation du style

const HomePage = () => {
    return (
        <div className="home-page">
            <Header /> {/* Intégration du Header */}
            <main className={styles.main}>
            <div className="content">
                <h2>Bienvenue </h2>
                <p>Gérez vos livres, auteurs et éditeurs facilement.</p>
            </div>
            <Aside /> {/* Intégration de l'Aside */}
            </main>
            <footer className={styles.footer}>
                <p>&copy; 2023 RV Books. Tous droits réservés.</p>
            </footer>
        </div>
    );
};

export default HomePage;

// HomePage.jsx
import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Aside from '../components/Aside/Aside';
import BooksList from '../components/HomePageMain/BooksList';
import apiService from '../services/apiService';
import styles from '../styles/sources/pages/HomePage.module.scss';

const HomePage = () => {
    const [mesLivres, setMesLivres] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const allBooks = await apiService.getBooks();
            setMesLivres(allBooks);
        };

        fetchBooks();
    }, []);

    return (
        <div className="page">
            <Header />
            <main className={styles.main}>
                <div className="content">
                    <h2>Bienvenue sur RV Books</h2>
                    <BooksList books={mesLivres} />
                </div>
                <Aside />
            </main>
            <footer className={styles.footer}>
                <p>&copy; 2023 RV Books. Tous droits réservés.</p>
            </footer>
        </div>
    );
};

export default HomePage;

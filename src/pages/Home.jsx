// HomePage.jsx

// import libraries
import React, { useEffect, useState } from 'react';

// Import Services
import { fetchAllBooks } from '../services/bookService';

// Import components
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Aside from '../components/Aside/Aside';
import BooksList from '../components/ItemsList/BooksList';

// Import styles
import styles from '../styles/sources/pages/HomePage.module.scss';

const HomePage = () => {
    const [mesLivres, setMesLivres] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            
            try {
                const allBooks = await fetchAllBooks();
                setMesLivres(allBooks);
            } catch (err) {
                setError('Erreur lors du chargement des livres.');
                console.error(err);
            }
        };

        fetchBooks();
    }, []);

    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className="content">
                    <h2>Bienvenue sur RV Books</h2>
                    {error ? <p>{error}</p> : <BooksList books={mesLivres} />}
                </div>
                <Aside />
            </main>
            <Footer />
        </>
    );
};

export default HomePage;

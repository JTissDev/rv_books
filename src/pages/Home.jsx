// HomePage.jsx

// import libraries
import React, { useEffect, useState } from 'react';

// Import Services
import apiService from '../services/apiService';

// Import components
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Aside from '../components/Aside/Aside';
import BooksList from '../components/ItemsList/BooksList';

// Import styles
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
        <>
            <Header />
            <main className={styles.main}>
                <div className="content">
                    <h2>Bienvenue sur RV Books</h2>
                    <BooksList books={mesLivres} />
                </div>
                <Aside />
            </main>
            <Footer />
        </>
    );
};

export default HomePage;

import React, { useState, useEffect } from 'react';
import clsx from "clsx";
import SearchableList from './SearchableList';
import apiService from '../../services/apiService';
import styles from '../../styles/sources/components/Aside.module.scss';

const Aside = () => {
    const [authors, setAuthors] = useState([]);
    const [publishers, setPublishers] = useState([]);
    const [selectedAuthor, setSelectedAuthor] = useState(null);
    const [selectedPublisher, setSelectedPublisher] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const authorsData = await apiService.getAuthors();
            setAuthors(authorsData);

            const publishersData = await apiService.getPublishers();
            setPublishers(publishersData);
        };

        fetchData();
    }, []);

    const debugFetchAuthors = async () => {
        const authorsData = await apiService.getAuthors();
        console.log('Résultats de la requête /authors :', authorsData);
    };

    return (
        <aside className={clsx(styles.aside, styles.rightAside)}>
            <header className={styles.asideHeader}>
                <h2>Informations supplémentaires</h2>
            </header>
            <main className={styles.asideMain}>
                <button onClick={debugFetchAuthors} className={styles.debugButton}>
                    Debug /authors
                </button>
                <SearchableList
                    title="Auteurs"
                    items={authors}
                    onSelect={(author) => setSelectedAuthor(author)}
                />
                <SearchableList
                    title="Éditeurs"
                    items={publishers}
                    onSelect={(publisher) => setSelectedPublisher(publisher)}
                />
            </main>
        </aside>
    );
};

export default Aside;
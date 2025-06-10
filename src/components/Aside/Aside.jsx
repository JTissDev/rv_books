// Aside.jsx

// import libraries
import React, { useState, useEffect } from 'react';
import clsx from "clsx";

// Import Services
import { fetchAllAuthors } from '../../services/authorService';
import { fetchAllPublishers } from '../../services/publisherService';

// Import components
import { SearchableList } from './SearchableList';

// Import styles
import styles from '../../styles/sources/components/Aside.module.scss';

const Aside = () => {
    const [authors, setAuthors] = useState([]);
    const [publishers, setPublishers] = useState([]);
    const [error, setError] = useState(null);

    const [selectedAuthorId, setSelectedAuthorId] = useState(null);
    const [selectedPublisherId, setSelectedPublisherId] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const authorsData = await fetchAllAuthors();
                setAuthors(authorsData);

                const publishersData = await fetchAllPublishers();
                setPublishers(publishersData);
            } catch (err) {
                setError('Erreur lors du chargement des données.');
                console.error(err);
            }
        };

        fetchData();
    }, []);

    return (
        <aside className={clsx(styles.aside, styles.rightAside)}>
            <header className={styles.asideHeader}>
                <h2>Informations supplémentaires</h2>
            </header>
            <main className={styles.asideMain}>
                {error ? (
                    <p>{error}</p>
                ) : (
                    <>
                        <SearchableList
                            title="Auteurs"
                            items={authors}
                            getLabel={(auteur) => `${auteur.firstName} ${auteur.lastName}`}
                            getValue={(auteur) => auteur.id}
                            onSelect={(id) => setSelectedAuthorId(id)}
                        />
                        <SearchableList
                            title="Éditeurs"
                            items={publishers}
                            getLabel={(editeur) => editeur.name}
                            getValue={(editeur) => editeur.id}
                            onSelect={(id) => setSelectedPublisherId(id)}
                        />
                    </>
                )}
            </main>
        </aside>
    );
};

export default Aside;

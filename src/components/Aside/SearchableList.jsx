import React, { useState } from 'react';
import styles from '../../styles/sources/components/SearchableList.module.scss';

const SearchableList = ({ title, items, onSelect }) => {
    const [search, setSearch] = useState('');

    console.log(`Données reçues pour ${title}:`, items); // Debug log

    // Si les éléments sont des objets, adaptez ici
    const filteredItems = items.filter(item => {
        const value = typeof item === 'string' ? item : item.name; // Adaptez 'name' à la propriété correcte
        return value && value.toLowerCase().includes(search.toLowerCase());
    });

    console.log(`Éléments filtrés pour ${title}:`, filteredItems); // Debug log

    return (
        <section className={styles.section}>
            <h3>{title}</h3>
            <input
                type="text"
                placeholder={`Rechercher un ${title.toLowerCase()}...`}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={styles.searchInput}
            />
            <select
                className={styles.dropdown}
                onChange={(e) => onSelect(e.target.value)}
                defaultValue=""
            >
                <option value="" disabled>
                    Sélectionnez un {title.toLowerCase()}
                </option>
                {filteredItems.map((item, index) => {
                    const value = typeof item === 'string' ? item : item.name; // Adaptez 'name' à la propriété correcte
                    console.log(`Option rendue pour ${title}:`, value); // Debug log
                    return (
                        <option key={index} value={value}>
                            {value}
                        </option>
                    );
                })}
            </select>
        </section>
    );
};

export default SearchableList;

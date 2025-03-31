import React, { useState } from 'react';
import styles from '../../styles/sources/components/SearchableList.module.scss';

const SearchableList = ({ title, items, onSelect }) => {
    const [search, setSearch] = useState('');

    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(search.toLowerCase())
    );

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
            <ul className={styles.list}>
                {filteredItems.map((item, index) => (
                    <li
                        key={index}
                        className={styles.listItem}
                        onClick={() => onSelect(item)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default SearchableList;

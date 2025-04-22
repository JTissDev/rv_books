// SearchableList.jsx
import React, { useState } from 'react';
import { AuthorItemSelect } from '../ListItems/Authoritem';
import styles from '../../styles/sources/components/SearchableList.module.scss';

const SearchableList = ({ title, items, onSelect, getLabel, getValue, renderItem }) => {
    const [search, setSearch] = useState('');

    const filteredItems = items.filter(item => {
        const label = getLabel ? getLabel(item) : (typeof item === 'string' ? item : item.name);
        return label && label.toLowerCase().includes(search.toLowerCase());
    });

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
                    const label = getLabel ? getLabel(item) : (typeof item === 'string' ? item : item.name);
                    const value = getValue ? getValue(item) : label;
                    return (
                        <option key={index} value={value}>
                            {renderItem ? renderItem(item) : label}
                        </option>
                    );
                })}
            </select>
        </section>
    );
};

export default SearchableList;

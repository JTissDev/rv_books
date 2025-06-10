// SearchableList.jsx

// import libraries
import React, { useState } from 'react';

// Import Services

// Import components
import { AuthorItemSelect } from '../Items/Authoritem';

// Import styles
import styles from '../../styles/sources/components/SearchableList.module.scss';

function getFilteredItems(items, search, getLabel) {
    return items.filter(item => {
        const label = getLabel ? getLabel(item) : (typeof item === 'string' ? item : item.name);
        return label && label.toLowerCase().includes(search.toLowerCase());
    });
}

const SearchableList = ({ title, items, onSelect, getLabel, getValue, renderItem }) => {
    const [search, setSearch] = useState('');

    const filteredItems = getFilteredItems(items, search, getLabel);

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
                <option value="new">Ajouter un nouvel {title.toLowerCase()}</option>
            </select>
        </section>
    );
};

const SearchableListWithAdd = ({
    title,
    items,
    getLabel,
    getValue,
    value,
    onSelect,
    onAdd,
    loading,
    renderItem
}) => {
    const [search, setSearch] = useState('');

    const filteredItems = getFilteredItems(items, search, getLabel);

    return (
        <section className={styles.section}>
            <h3>{title}</h3>
            <input
                type="text"
                placeholder={`Rechercher ou ajouter une ${title.toLowerCase()}...`}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={styles.searchInput}
            />
            {/* Affiche le bouton Ajouter si aucun résultat et recherche non vide */}
            {filteredItems.length === 0 && search.trim() && (
                <button
                    type="button"
                    className={styles.addButton}
                    onClick={() => {
                        onAdd(search.trim());
                        setSearch('');
                    }}
                >
                    Ajouter "{search.trim()}"
                </button>
            )}
            <select
                className={styles.dropdown}
                onChange={(e) => onSelect(e.target.value)}
                defaultValue=""
                disabled={loading}
            >
                <option value="" disabled>
                    Sélectionnez une {title.toLowerCase()}
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

// Exports nommés uniquement
export { SearchableList, SearchableListWithAdd };

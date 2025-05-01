// BookForm.jsx
import React, { useEffect, useState } from 'react';
import styles from '../../styles/sources/components/Forms/BookForm.module.scss';
import { fetchAllAuthors } from '../../services/authorService';
import { fetchAllPublishers } from '../../services/publisherService';
import { STATUS_OPTIONS } from '../../assets/constant/statusOption';
import SearchableList from '../Aside/SearchableList';

const BookForm = ({ initialData = {}, onSubmit, mode = 'create' }) => {
    const [formData, setFormData] = useState({
        title: '',
        authors: [],
        publishers: [],
        description: '',
        price: '',
        status: 'wishlist',
        ...initialData
    });

    const [authorsList, setAuthorsList] = useState([]);
    const [publishersList, setPublishersList] = useState([]);

    useEffect(() => {
        setFormData(prev => ({ ...prev, ...initialData }));
    }, [initialData]);

    useEffect(() => {
        fetchAllAuthors().then(setAuthorsList);
        fetchAllPublishers().then(setPublishersList);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleAuthorsChange = (authorId) => {
        const selected = authorsList.find(a => a.id === parseInt(authorId));
        if (selected && !formData.authors.some(a => a.id === selected.id)) {
            setFormData(prev => ({ ...prev, authors: [...prev.authors, selected] }));
        }
    };

    const handlePublishersChange = (publisherId) => {
        const selected = publishersList.find(p => p.id === parseInt(publisherId));
        if (selected && !formData.publishers.some(p => p.id === selected.id)) {
            setFormData(prev => ({ ...prev, publishers: [...prev.publishers, selected] }));

            // 🧪 Préparer la logique dépendance ISBN/Prix ici si besoin
            // Exemple : setFormData(prev => ({ ...prev, price: selected.defaultPrice }))
        }
    };

    const handleRemoveAuthor = (id) => {
        setFormData(prev => ({
            ...prev,
            authors: prev.authors.filter(a => a.id !== id)
        }));
    };

    const handleRemovePublisher = (id) => {
        setFormData(prev => ({
            ...prev,
            publishers: prev.publishers.filter(p => p.id !== id)
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <h2>{mode === 'edit' ? 'Modifier le livre' : 'Ajouter un nouveau livre'}</h2>

            <label>
                Titre :
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
            </label>

            <SearchableList
                title="Auteurs"
                items={authorsList}
                getLabel={(a) => `${a.firstName} ${a.lastName}`}
                getValue={(a) => a.id}
                onSelect={handleAuthorsChange}
            />
            {formData.authors.length > 0 && (
                <ul>
                    {formData.authors.map(a => (
                        <li key={a.id}>
                            {a.firstName} {a.lastName}
                            <button type="button" onClick={() => handleRemoveAuthor(a.id)}>❌</button>
                        </li>
                    ))}
                </ul>
            )}

            <SearchableList
                title="Éditeurs"
                items={publishersList}
                getLabel={(p) => p.name}
                getValue={(p) => p.id}
                onSelect={handlePublishersChange}
            />
            {formData.publishers.length > 0 && (
                <ul>
                    {formData.publishers.map(p => (
                        <li key={p.id}>
                            {p.name}
                            <button type="button" onClick={() => handleRemovePublisher(p.id)}>❌</button>
                        </li>
                    ))}
                </ul>
            )}

            <label>
                Description :
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
            </label>

            <label>
                Prix (€) :
                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    min="0"
                    step="0.01"
                />
            </label>

            <label>
                Statut :
                <select name="status" value={formData.status} onChange={handleChange}>
                    {STATUS_OPTIONS.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </label>

            <button type="submit">
                {mode === 'edit' ? 'Mettre à jour' : 'Créer'}
            </button>
        </form>
    );
};

export default BookForm;

// BookForm.jsx
import React, { useEffect, useState } from 'react';
import styles from '../../styles/sources/components/Forms/BookForm.module.scss';

const BookForm = ({ initialData = {}, onSubmit, mode = 'create' }) => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        description: '',
        ...initialData
    });

    useEffect(() => {
        setFormData(prev => ({ ...prev, ...initialData }));
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
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
                <input type="text" name="title" value={formData.title} onChange={handleChange} required />
            </label>

            <label>
                Auteur :
                <input type="text" name="author" value={formData.author} onChange={handleChange} required />
            </label>

            <label>
                Description :
                <textarea name="description" value={formData.description} onChange={handleChange} required />
            </label>

            <button type="submit">
                {mode === 'edit' ? 'Mettre à jour' : 'Créer'}
            </button>
        </form>
    );
};

export default BookForm;

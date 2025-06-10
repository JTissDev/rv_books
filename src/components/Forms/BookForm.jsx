// BookForm.jsx
import React, { useEffect, useState } from 'react';
import styles from '../../styles/sources/components/Forms/BookForm.module.scss';
import { fetchAllAuthors } from '../../services/authorService';
import { fetchAllPublishers } from '../../services/publisherService';
import { fetchCategories, addCategory } from '../../services/categoryService'; // Nouvel import pour les catégories
import { STATUS_OPTIONS } from '../../assets/constant/statusOption';
import { SearchableList, SearchableListWithAdd } from '../Aside/SearchableList';
import { PublisherBookFormItem } from './PublisherForm';

const BookForm = ({ initialData = {}, onSubmit, mode = 'create' }) => {
    const [formData, setFormData] = useState({
        title: '',
        authors: [],
        publishers: [],
        description: '',
        price: '',
        status: 'wishlist',
        category: '', // Ajoute la catégorie dans formData
        ...initialData
    });

    const [authorsList, setAuthorsList] = useState([]);
    const [publishersList, setPublishersList] = useState([]);
    const [categoriesList, setCategoriesList] = useState([]);
    const [selectedPublisherId, setSelectedPublisherId] = useState('');
    const [categoryLoading, setCategoryLoading] = useState(false); // État pour le chargement des catégories

    useEffect(() => {
        setFormData(prev => ({ ...prev, ...initialData }));
    }, [initialData]);

    useEffect(() => {
        fetchAllAuthors().then(setAuthorsList);
        fetchAllPublishers().then(setPublishersList);

        // Ajoute ici la récupération des catégories depuis l'API (à adapter selon ton service)
        setCategoryLoading(true);
        fetchCategories().then(list => {
            setCategoriesList(list);
            setCategoryLoading(false);
        });
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

    // Fonction pour ajouter une nouvelle catégorie
    const handleAddCategory = async (newCategoryName) => {
        // Appelle ton service pour ajouter la catégorie en BDD, puis recharge la liste
        const newCategory = await addCategory(newCategoryName);
        setCategoriesList(prev => [...prev, newCategory]);
        setFormData(prev => ({ ...prev, category: newCategory.name }));
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

    const handlePublisherSelectFromDropdown = (e) => {
        const publisherId = e.target.value;
        if (publisherId) {
            handlePublishersChange(publisherId);
            setSelectedPublisherId('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <fieldset className="New_Book_Fieldset">
                <legend>{mode === 'edit' ? 'Modifier le livre' : 'Ajouter un nouveau livre'}</legend>

                <label for="title">Titre du livre:</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />

                <label>
                    Statut :
                    <select name="status" value={formData.status} onChange={handleChange}>
                        {STATUS_OPTIONS.map((option) => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </label>

                <fieldset className="Authors_Search_List Serach_List">
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
                </fieldset>

                <fieldset className="details_Books_Feildset">
                    <legend>Détails du livres</legend>

                    {/* Ajout du champ catégorie */}
                    <fieldset>
                        <legend>Catégorie</legend>
                        <SearchableListWithAdd
                            title="Catégorie"
                            items={categoriesList}
                            getLabel={c => c.name}
                            getValue={c => c.id}
                            value={formData.category}
                            onSelect={catId => {
                                const cat = categoriesList.find(c => c.id === parseInt(catId));
                                setFormData(prev => ({ ...prev, category: cat ? cat.name : '' }));
                            }}
                            onAdd={handleAddCategory}
                            loading={categoryLoading}
                        />
                    </fieldset>

                    <fieldset className="description_text_Area">
                        <legend>description</legend>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </fieldset>

                    {/* bouton select collection si false simple si true num tome, titre tome isbn collection */}

                </fieldset>

                <fieldset className="publishers_Search_List Serach_List">
                    <legend>Édition</legend>

                    {/* 1. Zone de recherche */}
                    <SearchableList
                        title="Éditeurs"
                        items={publishersList}
                        getLabel={(p) => p.name}
                        getValue={(p) => p.id}
                        onSelect={handlePublishersChange}
                    />

                    {/* 2. Liste des éditeurs sélectionnés au format PublisherBookFormItem */}
                    {formData.publishers.length > 0 && (
                        <ul>
                            {formData.publishers.map((p, idx) => (
                                <PublisherBookFormItem
                                    key={p.id}
                                    publisher={p}
                                    publishersList={publishersList}
                                    onChange={(field, value) => {
                                        setFormData(prev => ({
                                            ...prev,
                                            publishers: prev.publishers.map((pub, i) =>
                                                i === idx ? { ...pub, [field]: value } : pub
                                            )
                                        }));
                                    }}
                                    onRemove={() => handleRemovePublisher(p.id)}
                                />
                            ))}
                        </ul>
                    )}


                </fieldset>



            </fieldset>







            <button type="submit">
                {mode === 'edit' ? 'Mettre à jour' : 'Créer'}
            </button>
        </form>
    );
};

export default BookForm;

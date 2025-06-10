// PublisherForms.jsx

// import libraries
import React from 'react';
// Import Assets
// Import Services
// Import components
// Import styles


export const PublisherBookFormItem = ({
    publisher,
    publishersList,
    onChange,
    onRemove
}) => {
    // publisher : { id, name, ISBN, publishYear, publishNumber, price }
    // onChange : (field, value) => void
    // onRemove : () => void

    return (
        <li /* className={styles.publisherItem} */>
            {/* Sélection de l'éditeur */}
            <label>
                Éditeur :
                <select
                    value={publisher.id}
                    onChange={e => onChange('id', e.target.value)}
                >
                    {publishersList.map(p => (
                        <option key={p.id} value={p.id}>{p.name}</option>
                    ))}
                </select>
                {/* Bouton modifier l'éditeur (à implémenter plus tard) */}
                {/* <button type="button">Modifier</button> */}
            </label>
            <label>
                ISBN :
                <input
                    type="text"
                    value={publisher.ISBN || ''}
                    onChange={e => onChange('ISBN', e.target.value)}
                />
            </label>
            <label>
                Date de publication :
                <input
                    type="date"
                    value={publisher.publishYear || ''}
                    onChange={e => onChange('publishYear', e.target.value)}
                />
            </label>
            <label>
                Numéro de publication :
                <input
                    type="text"
                    value={publisher.publishNumber || ''}
                    onChange={e => onChange('publishNumber', e.target.value)}
                />
            </label>
            <label>
                Prix (€) :
                <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={publisher.price || ''}
                    onChange={e => onChange('price', e.target.value)}
                />
            </label>
            <button type="button" onClick={onRemove}>Supprimer</button>
        </li>
    );
};

// ...tu peux ajouter d'autres formats de présentation ici plus tard...


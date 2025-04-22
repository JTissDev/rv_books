// AuthorItem.jsx
import React from 'react';

export const AuthorListItem = ({ author }) => {
    return (
        <li>
            ✍️  {author.firstName} {author.lastName}
        </li>
    );
};

export const AuthorItemSelect = ({ author }) => {
    return <option key={author.id}
        value={author.id}>
        {author.lastName} {author.firstName}
    </option>;
}


// AuthorItem.jsx
import React from 'react';

export const AuthorListItem = ({ author }) => {
    return (
        <li>
            {author.firstName} {author.lastName}
        </li>
    );
};

export const AuthorItemSelect = ({ author }) => {
    return <div>{author.firstName} {author.lastName}</div>;
}


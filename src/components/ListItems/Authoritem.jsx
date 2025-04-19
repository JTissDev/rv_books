// AuthorItem.jsx
import React from 'react';

const AuthorItem = ({ author }) => {
    return (
        <div>
            {author.firstName} {author.lastName}
        </div>
    );
};

export default AuthorItem;

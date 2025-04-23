// Header.jsx

// import libraries
import React from 'react';

// Import Services
// Import components
import Navbar from './Navbar';

// Import styles
import headerStyles from '../../styles/sources/components/LayoutStyle/Header.module.scss';

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <h1 className={headerStyles["header-title"]}>Gestion de Bibliothèque</h1>

            <Navbar />
        </header>
    );
};

export default Header;

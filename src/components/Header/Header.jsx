import React from 'react';
import Navbar from './Navbar';
import headerStyles from '../../styles/sources/components/Header.module.scss';

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <h1 className={headerStyles["header-title"]}>Gestion de Bibliothèque</h1>

            <Navbar />
        </header>
    );
};

export default Header;

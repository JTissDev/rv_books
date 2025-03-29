import React from 'react';
import Navbar from './Navbar';
import '../../styles/sources/components/Header.module.scss'; // Importation du style

const Header = () => {
    return (
        <header className="header">
            <h1 className="header-title">Gestion de Bibliothèque</h1>
            <Navbar />
        </header>
    );
};

export default Header;

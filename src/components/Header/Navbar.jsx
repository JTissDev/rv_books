import React, { useState } from 'react';
import '../../styles/sources/components/Navbar.module.scss';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Liste des onglets
    const tabs = [
        { name: 'Accueil', path: '/' },
        { name: 'Books', path: '/books' },
        { name: 'Auteurs', path: '/authors' },
        { name: 'Éditeurs', path: '/publishers' },
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-header">
                <button className="hamburger" onClick={toggleMenu}>
                    ☰
                </button>
                <span className="navbar-title">RV Books</span>
            </div>
            <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
                {tabs.map((tab, index) => (
                    <li key={index} className="navbar-item">
                        <a href={tab.path} className="navbar-link">
                            {tab.name}
                        </a>
                        <ul className="submenu">
                            <li>
                                <a href={`${tab.path}/new`}>Ajouter</a>
                            </li>
                            <li>
                                <a href={`${tab.path}/search`}>Rechercher</a>
                            </li>
                        </ul>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;

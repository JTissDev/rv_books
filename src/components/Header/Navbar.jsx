import React, { useState } from 'react';
import styles from '../../styles/sources/components/Navbar.module.scss';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Liste des onglets avec sous-menus imbriqués
    const tabs = [
        {
            name: 'Accueil',
            path: '/',
        },
        {
            name: 'Books',
            path: '/books',
            submenu: [
                { name: 'Ajouter', path: '/books/new' },
                { name: 'Rechercher', path: '/books/search' },
            ],
        },
        {
            name: 'Auteurs',
            path: '/authors',
            submenu: [
                { name: 'Ajouter', path: '/authors/new' },
                { name: 'Rechercher', path: '/authors/search' },
            ],
        },
        {
            name: 'Éditeurs',
            path: '/publishers',
            submenu: [
                { name: 'Ajouter', path: '/publishers/new' },
                { name: 'Rechercher', path: '/publishers/search' },
            ],
        },
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarHeader}>
                <button className={styles.hamburger} onClick={toggleMenu}>
                    ☰
                </button>
                <span className={styles.navbarTitle}>RV Books</span>
            </div>
            <ul className={`${styles.navbarMenu} ${isOpen ? styles.open : ''}`}>
                {tabs.map((tab, index) => (
                    <li key={index} className={styles.navbarItem}>
                        <a href={tab.path} className={styles.navbarLink}>
                            {tab.name}
                        </a>
                        {tab.submenu && (
                            <ul className={styles.submenu}>
                                {tab.submenu.map((subItem, subIndex) => (
                                    <li key={subIndex}>
                                        <a href={subItem.path}>{subItem.name}</a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;

// Navbar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../styles/sources/components/Navbar.module.scss';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

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
            <div className={styles['navbar-header']}>
                <button
                    className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
                    onClick={toggleMenu}
                >
                    ☰
                </button>
                <span className={styles['navbar-title']}>RV Books</span>
            </div>
            <ul className={`${styles['navbar-menu']} ${isOpen ? styles.open : ''}`}>
                {tabs.map((tab, index) => (
                    <li key={index} className={styles['navbar-item']}>
                        <NavLink
                            to={tab.path}
                            className={({ isActive }) =>
                                isActive ? `${styles['navbar-link']} ${styles.active}` : styles['navbar-link']
                            }
                        >
                            {tab.name} {tab.submenu && '▼'}
                        </NavLink>
                        {tab.submenu && (
                            <ul className={styles.submenu}>
                                {tab.submenu.map((subItem, subIndex) => (
                                    <li key={subIndex}>
                                        <NavLink to={subItem.path}>{subItem.name}</NavLink>
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

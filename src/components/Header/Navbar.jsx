import React, { useState } from 'react';
import styles from '../../styles/sources/components/Navbar.module.scss';

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
        <nav className={styles.navbar}>
            <div className={styles.navbarHeader}>
                <button className={styles.hamburger} onClick={toggleMenu}>
                    ☰
                </button>
                <span className={styles.navbarTitle}>RV Books</span>
            </div>
            <ul className={`${styles.navbarMenu} ${isOpen ? styles.open : ''}`}> {/* Correction de la classe conditionnelle */}
                {tabs.map((tab, index) => (
                    <li key={index} className={styles.navbarItem}>
                        <a href={tab.path} className={styles.navbarLink}>
                            {tab.name}
                        </a>
                        <ul className={styles.submenu}>
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

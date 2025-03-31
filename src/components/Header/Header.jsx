import React from 'react';
import Navbar from './Navbar';
import styles from '../../styles/sources/components/Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header} > {/* Testez avec un style inline */}
            <h1 className={styles.headerTitle}>Gestion de Bibliothèque</h1>
            <Navbar />
        </header>
    );
};

export default Header;

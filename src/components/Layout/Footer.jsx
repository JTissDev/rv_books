// Footer.jsx

// import libraries
import React from 'react';

// Import Services

// Import components

// Import styles
import styles from '../../styles/sources/components/LayoutStyle/Footer.module.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <p>&copy; {new Date().getFullYear()} RV Books. Tous droits réservés.</p>
                <nav className="footer__nav">
                    <a href="/about" className="footer__link">À propos</a>
                    <a href="/contact" className="footer__link">Contact</a>
                    <a href="/privacy" className="footer__link">Politique de confidentialité</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
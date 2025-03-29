import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'; // Assurez-vous que ce chemin est correct
import styles from './styles/sources/main.scss'; // Importation du fichier SCSS principal
import App from './App.jsx'; // Ajoutez l'extension .jsx
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

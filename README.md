# RV Books - Frontend

**Application React.js pour la gestion d'une bibliothèque privée**

---

## Description

Cette application React.js permet de gérer une bibliothèque privée en interagissant avec l'API RV Books. Elle offre des fonctionnalités pour visualiser, ajouter, mettre à jour et supprimer des livres, auteurs et éditeurs.

---

## Prérequis

- **Node.js** : Version 18 ou supérieure
- **npm** : Version 8 ou supérieure

---

## Installation

### 1. Cloner le dépôt
```bash
git clone https://github.com/jtissdev/rv_books_frontend.git
cd rv_books_frontend
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Configurer l'environnement
Créez un fichier `.env` à la racine du projet et configurez l'URL de l'API :
```
REACT_APP_API_URL=http://localhost:8080
```

---

## Exécution

### Lancer l'application en mode développement
```bash
npm start
```

L'application sera accessible à l'adresse [http://localhost:3000](http://localhost:3000).

### Construire l'application pour la production
```bash
npm run build
```

Les fichiers de production seront générés dans le dossier `build/`.

---

## Fonctionnalités

- **Gestion des livres** : Visualisation, ajout, mise à jour et suppression
- **Gestion des auteurs et éditeurs** : Visualisation et gestion associée
- **Interface utilisateur réactive** : Basée sur React.js et CSS

---

## Structure du projet

- **src/components** : Composants React réutilisables
- **src/pages** : Pages principales de l'application
- **src/services** : Services pour interagir avec l'API
- **src/styles** : Fichiers CSS pour le style global et les composants

---

## Contribuer

Les contributions sont les bienvenues ! Veuillez soumettre une pull request ou ouvrir une issue pour discuter des changements que vous souhaitez apporter.

---

## Licence

Ce projet est sous licence Apache License 2.0. Voir le fichier [LICENSE](LICENSE) pour plus de détails.
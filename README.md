# RV Books

Application Web pour la Gestion de Bibliothèque Privée

## Description

RV Books est une application web développée en React qui permet de gérer une bibliothèque privée. Elle offre des fonctionnalités pour consulter, ajouter, modifier et supprimer des livres, ainsi que pour gérer les auteurs et éditeurs associés.

## Fonctionnalités

- **Livres** :
  - [X] Afficher la liste des livres.
  - [X] Ajouter un nouveau livre.
  - Modifier ou supprimer un livre existant.
  - Rechercher des livres par statut, auteur ou éditeur.
- **Auteurs** :
  - Afficher la liste des auteurs.
  - Ajouter, modifier ou supprimer un auteur.
- **Éditeurs** :
  - Afficher la liste des éditeurs.
  - Ajouter, modifier ou supprimer un éditeur.
- **Thèmes** :
  - Basculer entre les thèmes clair et sombre.

## Prérequis

- **Node.js** : Version 16 ou supérieure
- **npm** ou **yarn** : Gestionnaire de paquets

## Installation

1. **Clonez le dépôt :**

   ```sh
   git clone https://github.com/jtissdev/rv_books.git
   cd rv_books
   ```

2. **Installez les dépendances :**

   ```sh
   npm install
   ```

3. **Configurez les variables d'environnement :**

   Créez un fichier `.env` à la racine du projet et configurez l'URL de l'API :

   ```env
   REACT_APP_API_URL=http://votre-api-url
   ```

## Lancer l'application

1. **En mode développement :**

   ```sh
   npm start
   ```

   L'application sera accessible à l'adresse [http://localhost:3000](http://localhost:3000).

2. **Pour générer une version de production :**

   ```sh
   npm run build
   ```

   Les fichiers de production seront générés dans le dossier `build`.

## Structure du projet

- **`src/components`** : Composants réutilisables (Header, Footer, Navbar, etc.).
- **`src/pages`** : Pages principales de l'application (Home, Books, Authors, etc.).
- **`src/services`** : Services pour interagir avec l'API.
- **`src/styles`** : Fichiers SCSS pour la gestion des styles.
- **`src/assets`** : Constantes, utilitaires et ressources partagées.

## API utilisée

L'application utilise une API REST pour gérer les données des livres, auteurs et éditeurs. Assurez-vous que l'API est opérationnelle et accessible à l'URL configurée dans le fichier `.env`. Voici quelques exemples d'endpoints :

- **GET** `/books` : Récupère tous les livres.
- **POST** `/books` : Ajoute un nouveau livre.
- **GET** `/authors` : Récupère tous les auteurs.
- **GET** `/publishers` : Récupère tous les éditeurs.

## Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Forkez le dépôt.
2. Créez une branche pour vos modifications : `git checkout -b feature/nom-de-la-fonctionnalite`.
3. Soumettez une pull request avec une description claire des changements.

## Auteur

Ce projet a été développé par **jtissdev**.  
Pour toute question ou suggestion, vous pouvez me contacter via [mon profil GitHub](https://github.com/jtissdev).

## Licence

Ce projet est sous licence MIT. Consultez le fichier `LICENSE` pour plus de détails.

---

## Développeur

- **Auteur principal** : [jtissdev](https://github.com/jtissdev)
- **Version actuelle** : 1.0.0

### Informations pour les développeurs

- **Changelog** :  
  Retrouvez l’historique des modifications dans le fichier [`CHANGELOG.md`](./CHANGELOG.md).

- **ToDo** :  
  Les axes d’amélioration et tâches à venir sont listés dans [`doc/ToDo.md`](./doc/ToDo.md).

- **Fonctions et structure** :  
  La structure détaillée du projet et la liste des fonctions sont décrites dans [`doc/Function.md`](./doc/Function.md).

- **Contact** :  
  Pour toute question technique ou contribution, ouvrez une issue ou contactez l’auteur via GitHub.

---
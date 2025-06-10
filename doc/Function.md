# Structure du Projet et Liste des Fonctions

## Structure du Projet

### Arborescence du Projet

```markdown
src/
├── components/
│   ├── Aside/
│   │   ├── Aside.jsx
│   │   └── SearchableList.jsx
│   ├── Forms/
│   │   └── BookForm.jsx
│   ├── Layout/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── Navbar.jsx
│   └── ListItems/
│       ├── AuthorItem.jsx
│       ├── BookItem.jsx
│       └── PublisherItem.jsx
├── pages/
│   ├── Home.jsx
│   ├── Book.jsx
│   ├── Books.jsx
│   └── Books/
│       └── BookView.jsx
├── services/
│   ├── authorService.js
│   ├── bookService.js
│   └── publisherService.js
├── api/
│   ├── apiClient.js
│   ├── authorApi.js
│   ├── bookApi.js
│   └── publisherApi.js
├── styles/
│   ├── sources/
│   │   ├── partials/
│   │   │   ├── _variables.scss
│   │   │   ├── _mixins.scss
│   │   │   └── _colorPalette.scss
│   │   ├── pages/
│   │   │   ├── HomePage.module.scss
│   │   │   ├── Books.module.scss
│   │   │   └── Book.module.scss
│   │   ├── components/
│   │   │   ├── LayoutStyle/
│   │   │   │   ├── Header.module.scss
│   │   │   │   ├── Navbar.module.scss
│   │   │   │   └── Footer.module.scss
│   │   │   ├── ListItems/
│   │   │   │   └── BookItem.module.scss
│   │   │   └── Aside.module.scss
│   │   └── main.scss
├── assets/
│   ├── constant/
│   │   └── statusOption.js
│   └── utils/
│       └── bookUtils.js
├── routes/
│   └── AppRoutes.jsx
├── App.jsx
├── index.js
└── setupTests.js
```

### Structure

- **`src/components`** : Composants réutilisables (Header, Footer, Navbar, etc.).
- **`src/pages`** : Pages principales de l'application (Home, Books, Authors, etc.).
- **`src/services`** : Services pour interagir avec l'API.
- **`src/api`** : Gestion des appels API.
- **`src/styles`** : Fichiers SCSS pour la gestion des styles.
- **`src/assets`** : Constantes, utilitaires et ressources partagées.
- **`src/routes`** : Gestion des routes de l'application.

---

## Liste des Fonctions par Fichier

### `src\api\apiClient.js`
- `get`: Effectue une requête GET vers une URL donnée.
- `post`: Effectue une requête POST vers une URL donnée.
- `put`: Effectue une requête PUT vers une URL donnée.
- `delete`: Effectue une requête DELETE vers une URL donnée.

---

### `src\services\bookService.js`
- `fetchAllBooks`: Récupère tous les livres et les trie par titre.
- `fetchBookDetail`: Récupère les détails d'un livre par son ID.
- `saveBook`: Enregistre un nouveau livre.
- `editBook`: Met à jour un livre existant.
- `removeBook`: Supprime un livre.
- `fetchBooksByAuthorId`: Récupère les livres d'un auteur spécifique.
- `fetchBooksByPublisherId`: Récupère les livres d'un éditeur spécifique.
- `fetchBooksByStatus`: Récupère les livres par statut.
- `fetchBooksByAuthorAndPublisher`: Récupère les livres par auteur et éditeur.
- `fetchBooksByPublisherAndStatus`: Récupère les livres par éditeur et statut.
- `fetchBooksByAuthorAndStatus`: Récupère les livres par auteur et statut.

---

### `src\services\authorService.js`
- `fetchAllAuthors`: Récupère tous les auteurs et les trie par nom.
- `fetchAuthorDetail`: Récupère les détails d'un auteur par son ID.
- `saveAuthor`: Enregistre un nouvel auteur.
- `editAuthor`: Met à jour un auteur existant.
- `removeAuthor`: Supprime un auteur.
- `fetchAuthorsByBookId`: Récupère les auteurs d'un livre spécifique.
- `fetchAuthorsByPublisherId`: Récupère les auteurs d'un éditeur spécifique.

---

### `src\services\publisherService.js`
- `fetchAllPublishers`: Récupère tous les éditeurs et les trie par nom.
- `fetchPublisherDetail`: Récupère les détails d'un éditeur par son ID.
- `savePublisher`: Enregistre un nouvel éditeur.
- `editPublisher`: Met à jour un éditeur existant.
- `removePublisher`: Supprime un éditeur.
- `fetchPublishersByBookId`: Récupère les éditeurs d'un livre spécifique.

---

### `src\assets\utils\bookUtils.js`
- `formatBookTitle`: Formate le titre complet d'un livre.
- `formatAuthors`: Formate la liste des auteurs d'un livre.
- `formatPublishers`: Formate la liste des éditeurs d'un livre.
- `getYearFromDate`: Extrait l'année d'une date donnée.
- `getBookInfo`: Extrait les informations principales d'un livre (titre, auteurs, éditeurs, année).

---

### `src\assets\constant\statusOption.js`
- `STATUS_OPTIONS`: Liste des statuts possibles pour un livre.

---

### `src\components\ListItems\BookItem.jsx`
- `ActionButtons`: Composant pour afficher les boutons d'action (modifier, supprimer).
- `BookItemMini`: Composant pour afficher un livre en version compacte.
- `BookItemPreview`: Composant pour afficher un aperçu d'un livre.
- `BookItemFull`: Composant pour afficher les détails complets d'un livre.

---

### `src\components\Aside\SearchableList.jsx`
- `SearchableList`: Composant pour afficher une liste filtrable et sélectionnable.

---

### `src\components\Forms\BookForm.jsx`
- `BookForm`: Composant pour gérer le formulaire de création ou de modification d'un livre.

---

### `src\pages\Book.jsx`
- `useLoadedBook`: Charge un livre depuis l'API ou l'état initial.
- `NewBook`: Composant pour créer un nouveau livre.
- `EditBook`: Composant pour modifier un livre existant.
- `ViewBook`: Composant pour afficher les détails d'un livre.

---

### `src\pages\Books.jsx`
- `Books`: Composant pour afficher la liste de tous les livres.

---

### `src\pages\Books\BookView.jsx`
- `BookView`: Composant pour afficher les détails d'un livre.

---

### `src\components\Layout\Navbar.jsx`
- `Navbar`: Composant pour afficher la barre de navigation.

---

### `src\components\Layout\Header.jsx`
- `Header`: Composant pour afficher l'en-tête de l'application.

---

### `src\components\Layout\Footer.jsx`
- `Footer`: Composant pour afficher le pied de page de l'application.

---

### `src\components\Aside\Aside.jsx`
- `Aside`: Composant pour afficher une barre latérale avec des listes filtrables.

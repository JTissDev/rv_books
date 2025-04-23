# Structure du Projet et Liste des Fonctions

## Structure du Projet


### Arborescence du Projet

``` markdown
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
│   └── [Fichiers SCSS]
├── assets/
│   ├── constant/
│   │   └── statusOption.js
│   └── utils/
│       └── bookUtils.js
├── routes/
│   └── AppRoutes.jsx

```
### Structure 

- **`src/components`** : Composants réutilisables (Header, Footer, Navbar, etc.).
- **`src/pages`** : Pages principales de l'application (Home, Books, Authors, etc.).
- **`src/services`** : Services pour interagir avec l'API.
- **`src/api`** : Gestion des appels API.
- **`src/styles`** : Fichiers SCSS pour la gestion des styles.
- **`src/assets`** : Constantes, utilitaires et ressources partagées.

---

## Liste des Fonctions par Fichier

### `src\services\apiService.js`
- `getAuthors`: Récupère la liste des auteurs depuis l'API.
- `getPublishers`: Récupère la liste des éditeurs depuis l'API.
- `getBooks`: Récupère la liste des livres depuis l'API.

---

### `src\api\apiClient.js`
- `get`: Effectue une requête GET vers une URL donnée.
- `post`: Effectue une requête POST vers une URL donnée.
- `put`: Effectue une requête PUT vers une URL donnée.
- `delete`: Effectue une requête DELETE vers une URL donnée.

---

### `src\services\bookService.js`
- `fetchAllBooks`: Récupère tous les livres et les trie par titre.
- `fetchBookDetail`: Récupère les détails d'un livre par son ID.

---

### `src\services\authorService.js`
- `fetchAllAuthors`: Récupère tous les auteurs et les trie par nom.
- `fetchAuthorDetail`: Récupère les détails d'un auteur par son ID.

---

### `src\services\publisherService.js`
- `fetchAllPublishers`: Récupère tous les éditeurs et les trie par nom.
- `fetchPublisherDetail`: Récupère les détails d'un éditeur par son ID.

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

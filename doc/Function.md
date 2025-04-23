# Liste des fonctions par fichier

## `src\services\apiService.js`
- `getAuthors`: Récupère la liste des auteurs depuis l'API.
- `getPublishers`: Récupère la liste des éditeurs depuis l'API.
- `getBooks`: Récupère la liste des livres depuis l'API.

---

## `src\api\apiClient.js`
- `get`: Effectue une requête GET vers une URL donnée.

---

## `src\api\authorService.js`
- `getAuthors`: Récupère la liste des auteurs via `apiClient`.

---

## `src\api\publisherService.js`
- `getPublishers`: Récupère la liste des éditeurs via `apiClient`.

---

## `src\assets\utils\bookUtils.js`
- `formatBookTitle`: Formate le titre complet d'un livre.
- `formatAuthors`: Formate la liste des auteurs d'un livre.
- `formatPublishers`: Formate la liste des éditeurs d'un livre.
- `getYearFromDate`: Extrait l'année d'une date donnée.

---

## `src\assets\constant\statusOption.js`
- `STATUS_OPTIONS`: Liste des statuts possibles pour un livre.

---

## `src\components\ListItems\BookItem.jsx`
- `useBookInfo`: Extrait les informations principales d'un livre (titre, auteurs, éditeurs, année).
- `ActionButtons`: Composant pour afficher les boutons d'action (modifier, supprimer).
- `BookItemMini`: Composant pour afficher un livre en version compacte.
- `BookItemPreview`: Composant pour afficher un aperçu d'un livre.
- `BookItemFull`: Composant pour afficher les détails complets d'un livre.

---

## `src\components\Aside\SearchableList.jsx`
- `SearchableList`: Composant pour afficher une liste filtrable et sélectionnable.

---

## `src\components\Forms\BookForm.jsx`
- `BookForm`: Composant pour gérer le formulaire de création ou de modification d'un livre.

---

## `src\pages\Book.jsx`
- `useLoadedBook`: Charge un livre depuis l'API ou l'état initial.
- `getBookInfo`: Extrait les informations principales d'un livre (titre, auteurs, éditeurs, année).
- `NewBook`: Composant pour créer un nouveau livre.
- `EditBook`: Composant pour modifier un livre existant.
- `ViewBook`: Composant pour afficher les détails d'un livre.

---

## `src\pages\Books.jsx`
- `Books`: Composant pour afficher la liste de tous les livres.

---

## `src\pages\Books\BookView.jsx`
- `getBookInfo`: Extrait les informations principales d'un livre (titre, auteurs, éditeurs).
- `BookView`: Composant pour afficher les détails d'un livre.

---

## `src\components\Layout\Navbar.jsx`
- `Navbar`: Composant pour afficher la barre de navigation.

---

## `src\components\Layout\Header.jsx`
- `Header`: Composant pour afficher l'en-tête de l'application.

---

## `src\components\Layout\Footer.jsx`
- `Footer`: Composant pour afficher le pied de page de l'application.

---

## `src\components\Aside\Aside.jsx`
- `Aside`: Composant pour afficher une barre latérale avec des listes filtrables.

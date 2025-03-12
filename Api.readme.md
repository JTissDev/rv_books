# API de Gestion de Bibliothèque Privée

## 1. Liste des Endpoints de l'API

### Livres
- `GET /books`: Récupérer la liste des livres.
- `POST /books`: Ajouter un nouveau livre à la liste des livres.
- `GET /books/{id}`: Récupérer les détails d'un livre spécifique.
- `PUT /books/{id}`: Mettre à jour les informations d'un livre spécifique.
- `DELETE /books/{id}`: Supprimer un livre de la liste des livres.
- `POST /books/{id}/move-to-owned`: Déplacer un livre à la liste des livres possédés.

## 2. Structure de la Base de Données

### Table `books`
- `id` (int, primary key)
- `title` (varchar)
- `genre` (varchar)
- `published_date` (date)
- `isbn` (varchar)
- `description` (text)
- `status` (varchar) // valeurs possibles: 'wishlist', 'ordered', 'owned'
- `price` (decimal)
- `summary` (text)
- `series` (varchar, nullable)
- `volume_number` (int, nullable)
- `volume_title` (varchar, nullable)

### Table `authors`
- `id` (int, primary key)
- `first_name` (varchar)
- `last_name` (varchar)

### Table `book_authors`
- `book_id` (int, foreign key)
- `author_id` (int, foreign key)

### Table `publishers`
- `id` (int, primary key)
- `name` (varchar)

### Table `book_publishers`
- `book_id` (int, foreign key)
- `publisher_id` (int, foreign key)

## 3. Structure de l'API

### Modèle de Requête et Réponse

#### Livres
- **Requête POST /books**
    ```json
    {
        "title": "string",
        "genre": "string",
        "published_date": "YYYY-MM-DD",
        "isbn": "string",
        "description": "string",
        "status": "string", // valeurs possibles: 'wishlist', 'ordered', 'owned'
        "price": "number",
        "summary": "string",
        "series": "string",
        "volume_number": "number",
        "volume_title": "string",
        "authors": [
            {
                "first_name": "string",
                "last_name": "string"
            }
        ],
        "publishers": [
            {
                "name": "string"
            }
        ]
    }
    ```

- **Réponse GET /books**
    ```json
    [
        {
            "id": 1,
            "title": "string",
            "genre": "string",
            "published_date": "YYYY-MM-DD",
            "isbn": "string",
            "description": "string",
            "status": "string",
            "price": "number",
            "summary": "string",
            "series": "string",
            "volume_number": "number",
            "volume_title": "string",
            "authors": [
                {
                    "id": 1,
                    "first_name": "string",
                    "last_name": "string"
                }
            ],
            "publishers": [
                {
                    "id": 1,
                    "name": "string"
                }
            ]
        }
    ]
    ```

- **Requête POST /books/{id}/move-to-owned**
    ```json
    {
        "id": 1
    }
    ```

- **Réponse POST /books/{id}/move-to-owned**
    ```json
    {
        "id": 1,
        "title": "string",
        "genre": "string",
        "published_date": "YYYY-MM-DD",
        "isbn": "string",
        "description": "string",
        "status": "owned",
        "price": "number",
        "summary": "string",
        "series": "string",
        "volume_number": "number",
        "volume_title": "string",
        "authors": [
            {
                "id": 1,
                "first_name": "string",
                "last_name": "string"
            }
        ],
        "publishers": [
            {
                "id": 1,
                "name": "string"
            }
        ]
    }
    ```
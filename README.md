# RV Books

API de Gestion de Bibliothèque Privée

## Description

RV Books est une application Spring Boot qui permet de gérer une bibliothèque privée. Elle offre des fonctionnalités pour ajouter, mettre à jour, supprimer et rechercher des livres.

## Prérequis

- Java 11
- Maven 3.6+
- MySQL 8.0+

## Installation

1. Clonez le dépôt :

   ```sh
   git clone https://github.com/jtissdev/rv_books.git
   cd rv_books
   ```

2. Configurez votre base de données MySQL et mettez à jour les fichiers de configuration dans resources :

- application.properties
- application-dev.properties
- application-prod.properties
- application-test.properties
- application-show.properties

3. Exécutez le script SQL pour créer la base de données et insérer des données de test :

   ```sh
   mysql -u root -p < scripts/setup_db.sql
   ```

4. Compilez et packagez l'application :

   ```sh
   mvn clean package
   ```

## Exécution
Pour exécuter l'application avec un profil spécifique (par exemple, dev), utilisez la commande suivante :

```sh
mvn spring-boot:run -Dspring-boot.run.profiles=dev
```

## Utilisation
L'API expose les endpoints suivants :

- GET /books : Récupère tous les livres
- POST /books : Ajoute un nouveau livre
- GET /books/{id} : Récupère un livre par son ID
- PUT /books/{id} : Met à jour un livre par son ID
- DELETE /books/{id} : Supprime un livre par son ID
- POST /books/{id}/moveToOwned : Déplace un livre vers le statut "owned"
- GET /books/search : Recherche des livres par différents critères

## Contribuer
Les contributions sont les bienvenues ! Veuillez soumettre une pull request ou ouvrir une issue pour discuter des changements que vous souhaitez apporter.

## Licence
Ce projet est sous licence Apache License 2.0. Voir le fichier LICENSE pour plus de détails.
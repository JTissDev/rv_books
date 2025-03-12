# Structure du Projet API de Gestion de Bibliothèque Privée

## Structure du Projet

Le projet suit une structure standard Maven :

```
rv_books
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com
│   │   │       └── jtissdev
│   │   │           └── rvbooks
│   │   │               ├── App.java
│   │   │               ├── controllers
│   │   │               │   ├── BookController.java
│   │   │               │   ├── AuthorController.java
│   │   │               │   └── PublisherController.java
│   │   │               ├── services
│   │   │               │   ├── BookService.java
│   │   │               │   ├── AuthorService.java
│   │   │               │   └── PublisherService.java
│   │   │               ├── repositories
│   │   │               │   ├── BookRepository.java
│   │   │               │   ├── AuthorRepository.java
│   │   │               │   └── PublisherRepository.java
│   │   │               ├── models
│   │   │               │   ├── Book.java
│   │   │               │   ├── Author.java
│   │   │               │   └── Publisher.java
│   │   │               └── db
│   │   │                   └── DbManager.java
│   │   └── resources
│   │       └── application.properties
│   └── test
│       └── java
│           └── com
│               └── jtissdev
│                   └── rvbooks
│                       └── AppTest.java
├── pom.xml
├── README.md
└── docs
    ├── Api.readme.md
    └── ProjectStructure.md
```

## Description des Composants

### App.java
Le point d'entrée principal de l'application Spring Boot.

### Controllers
Les contrôleurs gèrent les requêtes HTTP et délèguent les opérations aux services appropriés.
- **BookController.java** : Gère les opérations CRUD pour les livres.
- **AuthorController.java** : Gère les opérations CRUD pour les auteurs.
- **PublisherController.java** : Gère les opérations CRUD pour les éditeurs.

### Services
Les services contiennent la logique métier et interagissent avec les dépôts pour accéder aux données.
- **BookService.java** : Contient la logique métier pour les livres.
- **AuthorService.java** : Contient la logique métier pour les auteurs.
- **PublisherService.java** : Contient la logique métier pour les éditeurs.

### Repositories
Les dépôts interagissent avec la base de données pour effectuer des opérations CRUD.
- **BookRepository.java** : Interface pour les opérations CRUD sur les livres.
- **AuthorRepository.java** : Interface pour les opérations CRUD sur les auteurs.
- **PublisherRepository.java** : Interface pour les opérations CRUD sur les éditeurs.

### Models
Les modèles représentent les entités de la base de données.
- **Book.java** : Entité représentant un livre.
- **Author.java** : Entité représentant un auteur.
- **Publisher.java** : Entité représentant un éditeur.

### DbManager.java
Gère la connexion et les interactions avec la base de données SQL.

### application.properties
Fichier de configuration pour les paramètres de l'application, y compris la configuration de la base de données.

### Tests
Les tests unitaires et d'intégration pour l'application.
- **AppTest.java** : Contient les tests pour l'application.

## Configuration de la Base de Données

La base de données sera configurée dans le fichier `application.properties` avec les paramètres de connexion SQL.

Exemple de configuration :
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/rv_books
spring.datasource.username=root
spring.datasource.password=password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL5Dialect
```

## Exécution de l'Application

Pour exécuter l'application, utilisez la commande suivante :
```
mvn spring-boot:run
```

Pour exécuter les tests, utilisez la commande suivante :
```
mvn test
```

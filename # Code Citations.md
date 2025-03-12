# Code Citations

## License: unknown
https://github.com/nanihutagaol/simple-app/tree/1b1325f1f80aabc51d97c6331863d62ae9347b8c/src/main/java/nanihutagaol/simpleapp/controller/BookController.java

```
.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {

    @Autowired
    private BookService bookService;

    @GetMapping
    public List<Book> getAllBooks()
```


## License: unknown
https://github.com/S230306/Mapping_Practise/tree/81dae46a0da008b359e316e9aa51a39a89fb6ace/src/main/java/com/geekster/MappingPractice/controller/BookController.java

```
services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {

    @Autowired
    private BookService
```


## License: unknown
https://github.com/AyyoubTelmoudy/strangler-pattern/tree/077d1d61fc7e00c1436ae7b7318e76e2555a6fa7/library-monolithic-version/src/main/java/com/strangler/demo/controller/BookController.java

```
org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {

    @Autowired
    private BookService bookService;

    @GetMapping
    public
```


## License: unknown
https://github.com/Viktor-Sydorkin-NULP/Lab2/tree/7068abb7ad68dba78d0a5327955f88c61785231e/src/main/java/com/example/controllers/AuthorController.java

```
.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/authors")
public class AuthorController {

    @Autowired
    private AuthorService authorService
```


## License: unknown
https://github.com/Leporoni/Bookstore/tree/8af44476f02a79334c9cc0703fd446596c929c78/src/main/java/com/leporonitech/bookstore/controller/AuthorController.java

```
.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/authors")
public class AuthorController {

    @Autowired
    private AuthorService authorService;

    @GetMapping
    public List
```


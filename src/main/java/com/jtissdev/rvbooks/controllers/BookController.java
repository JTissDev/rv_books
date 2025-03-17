package com.jtissdev.rvbooks.controllers;

import com.jtissdev.rvbooks.models.Book;
import com.jtissdev.rvbooks.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {

    @Autowired
    private BookService bookService;

    @GetMapping
    public List<Book> getAllBooks() {
        return bookService.getAllBooks();
    }

    @PostMapping
    public Book addBook(@RequestBody Book book) {
        return bookService.addBook(book);
    }

    @GetMapping("/{id}")
    public Book getBookById(@PathVariable int id) {
        return bookService.getBookById(id);
    }

    @PutMapping("/{id}")
    public Book updateBook(@PathVariable int id, @RequestBody Book book) {
        return bookService.updateBook(id, book);
    }

    @DeleteMapping("/{id}")
    public void deleteBook(@PathVariable int id) {
        bookService.deleteBook(id);
    }

    @PostMapping("/{id}/move-to-owned")
    public Book moveToOwned(@PathVariable int id) {
        return bookService.moveToOwned(id);
    }

   /*  @GetMapping("/search")
    public List<Book> searchBooks(@RequestParam(required = false) String status,
                                  @RequestParam(required = false) String author,
                                  @RequestParam(required = false) String publisher,
                                  @RequestParam(required = false) String title,
                                  @RequestParam(required = false) String series) {
        return bookService.searchBooks(status, author, publisher, title, series);
    } */
}

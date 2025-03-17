package com.jtissdev.rvbooks.services;

import com.jtissdev.rvbooks.models.Book;
import com.jtissdev.rvbooks.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public Book addBook(Book book) {
        return bookRepository.save(book);
    }

    public Book getBookById(int id) {
        return bookRepository.findById((long) id).orElse(null);
    }

    public Book updateBook(int id, Book book) {
        book.setId(id);
        return bookRepository.save(book);
    }

    public void deleteBook(int id) {
        bookRepository.deleteById((long) id);
    }

    public Book moveToOwned(int id) {
        Book book = getBookById(id);
        if (book != null) {
            book.setStatus("owned");
            return bookRepository.save(book);
        }
        return null;
    }

    /* public List<Book> searchBooks(String status, String author, String publisher, String title, String series) {
        // Implémenter la logique de recherche ici
        return bookRepository.searchBooks(status, author, publisher, title, series);
    } */
}

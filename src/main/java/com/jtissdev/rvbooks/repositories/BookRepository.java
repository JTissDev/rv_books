package com.jtissdev.rvbooks.repositories;

import com.jtissdev.rvbooks.models.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Integer> {
    List<Book> searchBooks(String status, String author, String publisher, String title, String series);
}

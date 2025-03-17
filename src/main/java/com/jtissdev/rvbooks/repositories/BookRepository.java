package com.jtissdev.rvbooks.repositories;

import com.jtissdev.rvbooks.models.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    List<Book> findByStatus(String status);
    List<Book> findByAuthorsFirstNameContainingOrAuthorsLastNameContaining(String firstName, String lastName);
    List<Book> findByPublishersNameContaining(String publisher);
    List<Book> findByTitleContaining(String title);
    List<Book> findBySeriesContaining(String series);
    

}

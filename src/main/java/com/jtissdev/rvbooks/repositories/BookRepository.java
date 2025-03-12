package com.jtissdev.rvbooks.repositories;

import com.jtissdev.rvbooks.models.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Integer> {
    List<Book> findByStatus(String status);
    List<Book> findByAuthorsFirstNameContainingOrAuthorsLastNameContaining(String firstName, String lastName);
    List<Book> findByPublishersNameContaining(String publisher);
    List<Book> findByTitleContaining(String title);
    List<Book> findBySeriesContaining(String series);
     @Query("SELECT b FROM Book b WHERE (:status IS NULL OR b.status = :status) AND (:author IS NULL OR b.author = :author) AND (:publisher IS NULL OR b.publisher = :publisher) AND (:title IS NULL OR b.title = :title) AND (:series IS NULL OR b.series = :series)")
    List<Book> searchBooks(@Param("status") String status, @Param("author") String author, @Param("publisher") String publisher, @Param("title") String title, @Param("series") String series);

}

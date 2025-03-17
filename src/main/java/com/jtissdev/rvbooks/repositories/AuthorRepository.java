package com.jtissdev.rvbooks.repositories;

import com.jtissdev.rvbooks.models.Author;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AuthorRepository extends JpaRepository<Author, Integer> {
	@Query("SELECT a.id AS id, a.firstName AS firstName, a.lastName AS lastName FROM Author a")
	List<Author> findAllAuthors();

}

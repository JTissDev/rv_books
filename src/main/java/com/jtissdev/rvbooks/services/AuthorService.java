package com.jtissdev.rvbooks.services;

import com.jtissdev.rvbooks.models.Author;
import com.jtissdev.rvbooks.repositories.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuthorService {

    @Autowired
    private AuthorRepository authorRepository;

    public List<Author> getAllAuthors() {
        System.out.println("AuthorService.getAllAuthors()");
        return authorRepository.findAllAuthors();

    }

    public Author addAuthor(Author author) {
        return authorRepository.save(author);
    }

    public Author getAuthorById(int id) {
        return authorRepository.findById(id).orElse(null);
    }

    public Author updateAuthor(int id, Author author) {
        author.setId(id);
        return authorRepository.save(author);
    }

    public void deleteAuthor(int id) {
        authorRepository.deleteById(id);
    }
}

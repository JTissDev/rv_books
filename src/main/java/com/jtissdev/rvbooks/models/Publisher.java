package com.jtissdev.rvbooks.models;

import lombok.Data;

import jakarta.persistence.*;
import java.util.List;

@Data
@Entity
public class Publisher {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;

    @ManyToMany(mappedBy = "publishers")
    private List<Book> books;

    public void setId(int id) {
        this.id = id;
    }
}

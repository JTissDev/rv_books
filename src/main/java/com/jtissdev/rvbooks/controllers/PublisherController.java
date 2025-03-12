package com.jtissdev.rvbooks.controllers;

import com.jtissdev.rvbooks.models.Publisher;
import com.jtissdev.rvbooks.services.PublisherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/publishers")
public class PublisherController {

    @Autowired
    private PublisherService publisherService;

    @GetMapping
    public List<Publisher> getAllPublishers() {
        return publisherService.getAllPublishers();
    }

    @PostMapping
    public Publisher addPublisher(@RequestBody Publisher publisher) {
        return publisherService.addPublisher(publisher);
    }

    @GetMapping("/{id}")
    public Publisher getPublisherById(@PathVariable int id) {
        return publisherService.getPublisherById(id);
    }

    @PutMapping("/{id}")
    public Publisher updatePublisher(@PathVariable int id, @RequestBody Publisher publisher) {
        return publisherService.updatePublisher(id, publisher);
    }

    @DeleteMapping("/{id}")
    public void deletePublisher(@PathVariable int id) {
        publisherService.deletePublisher(id);
    }
}

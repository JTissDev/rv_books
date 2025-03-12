package com.jtissdev.rvbooks.services;

import com.jtissdev.rvbooks.models.Publisher;
import com.jtissdev.rvbooks.repositories.PublisherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PublisherService {

    @Autowired
    private PublisherRepository publisherRepository;

    public List<Publisher> getAllPublishers() {
        return publisherRepository.findAll();
    }

    public Publisher addPublisher(Publisher publisher) {
        return publisherRepository.save(publisher);
    }

    public Publisher getPublisherById(int id) {
        return publisherRepository.findById(id).orElse(null);
    }

    public Publisher updatePublisher(int id, Publisher publisher) {
        publisher.setId(id);
        return publisherRepository.save(publisher);
    }

    public void deletePublisher(int id) {
        publisherRepository.deleteById(id);
    }
}

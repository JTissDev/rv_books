// Routes for the application
// Importing necessary libraries
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importing pages
import Home from '../pages/Home';
import Books from '../pages/Books';
import { EditBook, NewBook, ViewBook } from '../pages/Book';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {/* Books Pages */}
            <Route path="/books" element={<Books />} />
            {/* <Route path="/books/stat-:status" element={<Books />} />
            <Route path="/books/author-:id" element={<Books />} />
            <Route path="/books/publisher-:id" element={<Books />} /> */}
            {/* Book Pages */}
            <Route path="/book/view/:id" element={<ViewBook />} /> 
            <Route path="/book/:id" element={<EditBook />} />
            <Route path="/book" element={<NewBook />} />
            {/* Authors Pages */}
            {/* <Route path="/authors" element={<Authors />} /> */}
            {/* Author Pages */}
            {/* <Route path="/author/:id" element={<EditAuthor />} />
            <Route path="/author/view-:id" element={<ViewAuthor />} />
            <Route path="/author" element={<NewAuthor />} /> */}
            {/* Publishers Pages */}
            {/* <Route path="/publishers" element={<Publishers />} /> */}
            {/* Publisher Pages */}
            {/* <Route path="/publisher/:id" element={<EditPublisher />} />
            <Route path="/publisher/view-:id" element={<ViewPublisher />} />
            <Route path="/publisher" element={<NewPublisher />} /> */}
            {/* Ajoutez d'autres routes ici */}
        </Routes>
    );
};

export default AppRoutes;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Books from '../pages/Books';

const AppRoutes = () => {
    return (
        <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* Books Pages */}
                <Route path="/books" element={<Books />} />
                {/* <Route path="/book/:id" element={<BookEditPage />} /> */}
                {/* <Route path="/book" element={<BookCreatePage />} /> */}
                {/* Ajoutez d'autres routes ici */}
            </Routes>
        </Router>
    );
};

export default AppRoutes;

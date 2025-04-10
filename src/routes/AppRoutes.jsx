import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* Ajoutez d'autres routes ici */}
            </Routes>
        </Router>
    );
};

export default AppRoutes;

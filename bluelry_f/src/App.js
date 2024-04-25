import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CataloguePage from './pages/CataloguePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import LoginPage from './pages/LoginPage';
import Footer from './components/Footer/Footer'; // Assurez-vous que le chemin d'importation est correct
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';

function App() {
    return (
        <Router>
            <div className="site">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/catalogue" element={<CataloguePage />} />
                    <Route path="/product/:id" element={<ProductDetailsPage />} />
                    <Route path="/cart" element={<ShoppingCartPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Slider from '../components/Slider/Slider';
import ProductList from '../components/ProductList/ProductList';

function HomePage() {
  return (
    <div>
      <Header />
      <Slider />
      <div className="container mt-3">
        <h2>Produits Phares</h2>
        <ProductList />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;

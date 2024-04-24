import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ProductList from '../components/ProductList/ProductList';

function CategoryPage() {
  return (
    <div>
      <Header />
      <div className="container mt-3">
        <h2>Catégories</h2>
        <ProductList />
      </div>
      <Footer />
    </div>
  );
}

export default CategoryPage;

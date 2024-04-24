import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function ShoppingCartPage() {
  return (
    <div>
      <Header />
      <div className="container mt-3">
        <h2>Votre Panier</h2>
        {/* Cart items list placeholder */}
        <p>Liste des articles dans le panier...</p>
        <div className="d-flex justify-content-between">
          <span>Total: $XXX.XX</span>
          <button className="btn btn-success">Passer à la caisse</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ShoppingCartPage;

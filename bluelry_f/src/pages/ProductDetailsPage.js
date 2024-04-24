import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function ProductDetailsPage() {
  return (
    <div>
      <Header />
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6">
            {/* Image gallery placeholder */}
            <img src="path_to_image" alt="Product" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2>Nom du Produit</h2>
            <p>Description du produit...</p>
            <p>Prix: $XX.XX</p>
            <button className="btn btn-primary">Ajouter au panier</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetailsPage;

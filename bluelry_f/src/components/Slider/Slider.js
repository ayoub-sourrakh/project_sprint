import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => (
  <Carousel pause="hover" className="bg-dark">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="promo1.jpg"  // Chemin vers l'image de la promo
        alt="First promo"
      />
      <Carousel.Caption>
        <h3>Première promotion</h3>
        <p>Découvrez nos nouvelles offres exclusives !</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="new1.jpg"  // Chemin vers l'image d'un nouveau produit
        alt="New arrival"
      />
      <Carousel.Caption>
        <h3>Nouveauté : Collier en diamant</h3>
        <p>Élégance et raffinement dans chaque détail.</p>
      </Carousel.Caption>
    </Carousel.Item>
    {/* Ajoutez d'autres Carousel.Item selon les besoins */}
  </Carousel>
);

export default Slider;

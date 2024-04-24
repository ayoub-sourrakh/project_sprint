import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function LoginPage() {
  return (
    <div>
      <Header />
      <div className="container mt-3">
        <h2>Connexion / Inscription</h2>
        <form>
          {/* Form inputs for login or registration */}
          <input type="email" placeholder="Email" className="form-control mb-2" />
          <input type="password" placeholder="Mot de passe" className="form-control mb-2" />
          <button type="submit" className="btn btn-primary">Connexion</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;

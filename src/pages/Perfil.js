import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../css/Perfil.css';

function Perfil() {
  if (!localStorage.user) {
    localStorage.setItem('user', JSON.stringify({
      email: '',
    }));
  }
  const user = JSON.parse(localStorage.getItem('user'));

  const handleOnClick = () => {
    localStorage.clear();
  };

  return (
    <div>
      <Header tela="Perfil" showSearch={ false } />
      <div className="d-flex flex-column explorar-divPerf">
        <h5
          className="text-center p-2 fontPerf"
          data-testid="profile-email"
        >
          {`Email: ${user.email}`}
        </h5>
        <div className="d-flex flex-column align-items-center countainer-ButtonsPerf">
          <Link to="/receitas-feitas">
            <button
              type="button"
              data-testid="profile-done-btn"
            >
              Receitas Feitas
            </button>
          </Link>
          <Link to="/receitas-favoritas">
            <button
              type="button"
              data-testid="profile-favorite-btn"
            >
              Receitas Favoritas
            </button>
          </Link>
          <Link to="/recipes-app">
            <button
              type="button"
              data-testid="profile-logout-btn"
              onClick={ handleOnClick }
            >
              Sair
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Perfil;

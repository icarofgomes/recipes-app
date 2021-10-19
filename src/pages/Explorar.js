import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../css/Explorar.css';

function Explorar() {
  return (
    <div>
      <Header tela="Explorar" showSearch={ false } />
      <div
        className="explorar-div d-flex flex-column align-items-center mt-5"
      >

        <div className="countainer-Buttons">
          <Link to="/explorar/comidas">
            <button
              type="button"
              data-testid="explore-food"
            >
              Explorar Comidas
            </button>
          </Link>
          <Link to="/explorar/bebidas">
            <button
              type="button"
              data-testid="explore-drinks"
            >
              Explorar Bebidas
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Explorar;

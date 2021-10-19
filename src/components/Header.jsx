import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileImage from '../images/profileIcon.svg';
import searchImage from '../images/searchIcon.svg';
import HeaderSearch from './HeaderSearch';
import '../css/Header.css';

function Header({ tela, showSearch = true }) {
  const [inputSearch, setInputSearch] = useState(false);

  const handleChange = () => {
    setInputSearch(!inputSearch);
  };

  return (
    <div
      className="colorHeader p-2"
    >
      <div className="d-flex justify-content-between align-items-center">
        <Link to="/perfil">
          <input
            type="image"
            data-testid="profile-top-btn"
            src={ profileImage }
            alt="Ícone Profile"
          />
        </Link>
        <h2 className="header-title" data-testid="page-title">{ tela }</h2>
        {
          showSearch && (
            <input
              type="image"
              data-testid="search-top-btn"
              onClick={ handleChange }
              src={ searchImage }
              alt="Ícone Busca"
            />
          )
        }
      </div>
      <div>
        { inputSearch && <HeaderSearch tela={ tela } /> }
      </div>
    </div>
  );
}

Header.propTypes = {
  tela: PropTypes.string,
}.isRequired;

export default Header;

import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import '../css/Login.css';
import logo from '../images/Logo3.png';

function Login() {
  const [personData, setPersonData] = useState({
    email: '',
    password: '',
  });
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const regexForEmail = /\S+@\S+\.\S+/;
  const length = 6;
  const passwordIsValid = personData.password.length > length;
  const emailIsValid = regexForEmail.test(personData.email);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setPersonData({ ...personData, [name]: value });
  };

  const handleClick = () => {
    const information = {
      email: personData.email,
    };
    localStorage.setItem('user', JSON.stringify(information));
    localStorage.setItem('mealsToken', JSON.stringify(1));
    localStorage.setItem('cocktailsToken', JSON.stringify(1));
    setShouldRedirect(true);
  };

  return (
    <div
      className="tam1 container d-flex justify-content-center"
    >
      { shouldRedirect && <Redirect to="/comidas" /> }
      <form className="d-flex align-items-center flex-column justify-content-center">
        <img className="img-login p-5" width="275px" src={ logo } alt="Logo Recipes" />
        <input
          className="form-control"
          name="email"
          type="email"
          data-testid="email-input"
          placeholder="Digite um e-mail válido"
          onChange={ handleChange }
        />
        <input
          className="form-control my-2"
          name="password"
          type="password"
          data-testid="password-input"
          placeholder="Senha maior que 6 caracteres"
          onChange={ handleChange }
        />
        <button
          className="btn btn-outline-light"
          type="button"
          data-testid="login-submit-btn"
          disabled={ !((passwordIsValid && emailIsValid === true)) }
          onClick={ handleClick }
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;

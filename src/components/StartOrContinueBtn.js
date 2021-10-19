import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function StartOrContinueBtn({ isMeal, recipe }) {
  const recipeId = recipe.idMeal || recipe.idDrink;

  const isDone = () => {
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    if (!doneRecipes) return false;

    return doneRecipes.find(({ id }) => {
      if (id === recipeId) return true;
      return false;
    });
  };

  const inProgress = () => {
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));

    if (!inProgressRecipes) return false;

    if ('meals' in inProgressRecipes) {
      return recipeId in inProgressRecipes.meals;
    }

    if ('cocktails' in inProgressRecipes) {
      return recipeId in inProgressRecipes.cocktails;
    }

    return false;
  };

  const btnText = inProgress() ? 'Continuar Receita' : 'Iniciar Receita';

  return (
    <Link
      to={ `${isMeal ? '/comidas/' : '/bebidas/'}${recipeId}/in-progress` }
      className="btn btn-danger"
      data-testid="start-recipe-btn"
      hidden={ isDone() }
    >
      {btnText}
    </Link>
  );
}

StartOrContinueBtn.propTypes = {
  isMeal: PropTypes.bool.isRequired,
  recipe: PropTypes.shape({
    idMeal: PropTypes.string,
    idDrink: PropTypes.string,
  }).isRequired,
};

export default StartOrContinueBtn;

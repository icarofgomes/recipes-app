import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchRecipeById from '../services/fetchRecipeById';
import Video from '../components/Video';
import Img from '../components/Img';
import Ingredients from '../components/Ingredients';
import ShareButton from '../components/ShareButton';
import FavoriteButton from '../components/FavoriteButton';
import Recomendations from '../components/Recomendations';
import StartOrContinueBtn from '../components/StartOrContinueBtn';
import '../css/ReceitaDetalhes.css';
import '../css/Ingredients.css';

function ReceitaDetalhes({ match }) {
  const [recipe, setRecipe] = useState({});

  const { recipeId } = match.params;

  // `true` se for a página de comidas, `false` caso seja bebidas
  const isMeal = /comidas/.test(match.path);

  useEffect(() => {
    const getRecipe = async (id) => {
      const result = await fetchRecipeById(id, isMeal);
      setRecipe(result);
    };
    getRecipe(recipeId);
  }, [setRecipe, recipeId, isMeal]);

  const renderContent = () => (
    <div className="d-flex flex-column">
      <Img meal={ isMeal } recipe={ recipe } />
      <div className="d-flex justify-content-between">
        <div className="ml-2 mt-1 titleDisplay">
          <h1
            className="pb-0 mb-0 titleDetalhes"
            data-testid="recipe-title"
          >
            {isMeal ? recipe.strMeal : recipe.strDrink}
          </h1>
          <h5 data-testid="recipe-category">
            {isMeal ? recipe.strCategory : recipe.strAlcoholic}
          </h5>
        </div>
        <div
          className="countainerButtons d-flex align-items-center
            justify-content-between mr-2"
        >
          <ShareButton url={ match.url } />
          <FavoriteButton recipe={ recipe } isMeal={ isMeal } />
        </div>
      </div>

      <Ingredients recipe={ recipe } />

      <h4>Instruções</h4>
      <p
        className="itensIng p-3"
        data-testid="instructions"
      >
        {recipe.strInstructions}

      </p>

      <Video meal={ isMeal } recipe={ recipe } />

      <h4>Recomendações</h4>
      <Recomendations isMeal={ isMeal } />

      <StartOrContinueBtn isMeal={ isMeal } recipe={ recipe } />
    </div>
  );

  return recipe ? renderContent() : <h1>Loading...</h1>;
}

ReceitaDetalhes.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
    params: PropTypes.shape({
      recipeId: PropTypes.string.isRequired,
    }).isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReceitaDetalhes;

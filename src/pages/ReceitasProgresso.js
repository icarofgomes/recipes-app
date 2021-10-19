import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchRecipeById from '../services/fetchRecipeById';
import Img from '../components/Img';
import ShareButton from '../components/ShareButton';
import FavoriteButton from '../components/FavoriteButton';
import IngredientsList from '../components/IngredientsList';
import Context from '../context';
import FinishButton from '../components/FinishButton';
import Recomendations from '../components/Recomendations';
import '../css/Ingredients.css';

// ARRUMAR BUG NO LOCALSTORAGE E NO CHECKBOX
function ReceitasProgresso({ match }) {
  const [recipe, setRecipe] = useState({});
  const [disabledButton, setDisabledButton] = useState(true);
  const { compareCheckBox, ingredientsLength } = useContext(Context);
  const url = match.url.split('/in')[0];

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

  // funcao para habilitar ou desabilitar o botao Finalizar Receita
  const disableButton = () => {
    if (compareCheckBox !== ingredientsLength) {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);

    }
  };

  const renderContent = () => (
    <div className="d-flex flex-column">
      <Img meal={ isMeal } recipe={ recipe } />
      <div className="d-flex justify-content-between">
        <div className="ml-2 titleDisplay">
          <h1
            className="pb-0 mb-0"
            data-testid="recipe-title"
          >
            {isMeal ? recipe.strMeal : recipe.strDrink}
          </h1>
          <h5
            data-testid="recipe-category"
          >
            {isMeal ? recipe.strCategory : recipe.strAlcoholic}
          </h5>
        </div>
        <div
          className="countainerButtons d-flex align-items-center
            justify-content-between mr-2"
        >
          <ShareButton
            url={ url }
          />
          <FavoriteButton
            recipe={ recipe }
            isMeal={ isMeal }
          />
        </div>
      </div>
      <IngredientsList
        recipe={ recipe }
        isMeal={ isMeal }
        disableButton={ disableButton }
        recipeId={ recipeId }
      />

      <h4>Instruções</h4>
      <p
        data-testid="instructions"
        className="itensIng p-3"
      >
        {recipe.strInstructions}
      </p>

      <h4>Recomendações</h4>
      <Recomendations isMeal={ isMeal } />

      <FinishButton
        disabledButton={ disabledButton }
        recipeId={ recipeId }
        isMeal={ isMeal }
        recipe={ recipe }
      />

    </div>
  );

  return recipe ? renderContent() : <h1>Loading...</h1>;
}

ReceitasProgresso.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
    params: PropTypes.shape({
      recipeId: PropTypes.string.isRequired,
    }).isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReceitasProgresso;

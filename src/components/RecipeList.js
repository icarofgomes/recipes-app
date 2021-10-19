import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context';
import '../css/RecipeList.css';

const NUM_RECIPES = 12;

function RecipeList({ isMeal }) {
  const { filteredMeals, filteredDrinks } = useContext(Context);
  const filteredRecipes = isMeal ? filteredMeals : filteredDrinks;

  if (!filteredRecipes) return <h1>Loading...</h1>;

  return (
    filteredRecipes
      .filter((_recipe, idx) => idx < NUM_RECIPES)
      .map((recipe, idx) => {
        const id = isMeal ? recipe.idMeal : recipe.idDrink;
        const to = isMeal ? '/comidas/' : '/bebidas/';
        const title = isMeal ? recipe.strMeal : recipe.strDrink;
        const thumb = isMeal ? recipe.strMealThumb : recipe.strDrinkThumb;

        return (
          <Link
            key={ id }
            to={ `${to}${id}` }
            className="text-decoration-none"
          >
            <section
              className="styleCard"
              key={ title }
              data-testid={ `${idx}-recipe-card` }
            >
              <img
                src={ thumb }
                data-testid={ `${idx}-card-img` }
                className="img-fluid rounded"
                alt={ title }
              />
              <div
                className="titleField d-flex align-items-center
                    justify-content-center flex-wrap"
              >
                <h2
                  data-testid={ `${idx}-card-name` }
                  className="titleCard ml-2"
                >
                  {title}
                </h2>
              </div>
            </section>
          </Link>
        );
      })
  );
}

export default RecipeList;

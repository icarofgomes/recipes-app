import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import fetchExploreIngredients from '../services/fetchExploreIngredients';
import fetchFilterByIngredient from '../services/fetchFilterByIngredient';
import Context from '../context';
import '../css/ExplorarIngredientes.css';

function ExplorarIngredientes({ match }) {
  const { setFilteredMeals, setFilteredDrinks } = useContext(Context);
  const [ingredients, setIngredients] = useState([]);
  const isMeal = /comidas/.test(match.path);
  const NUM_INGREDIENTS = 12;

  useEffect(() => {
    const getIngredients = async () => {
      const result = await fetchExploreIngredients(isMeal);
      setIngredients(result);
    };

    getIngredients();
  }, [isMeal]);

  const handleOnClick = (title) => {
    const filterByIngredient = async (ingredient) => {
      const result = await fetchFilterByIngredient(ingredient, isMeal);
      if (isMeal) {
        setFilteredMeals(result);
      } else {
        setFilteredDrinks(result);
      }
    };
    filterByIngredient(title);
  };

  if (!ingredients) return <h1>Loading...</h1>;

  return (
    <div>
      <Header
        tela="Explorar Ingredientes"
        showSearch={ false }
      />
      <div className="countainerIng d-flex flex-wrap justify-content-around p-2 mb-5">
        {ingredients.filter((ingredient, index) => index < NUM_INGREDIENTS)
          .map((ingredient, index) => {
            const to = isMeal ? '/comidas/' : '/bebidas/';
            const title = isMeal ? ingredient.strIngredient : ingredient.strIngredient1;
            const thumb = isMeal ? `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png`
              : `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png`;

            return (
              <Link
                key={ title }
                to={ to }
                onClick={ () => handleOnClick(title) }
                className="text-decoration-none"
              >

                <section
                  className="cardIng d-flex flex-column"
                  data-testid={ `${index}-ingredient-card` }
                  key={ title }

                >
                  <div className="imgContainer d-flex flex-column rounded">
                    <img
                      src={ thumb }
                      data-testid={ `${index}-card-img` }
                      className="img-fluid"
                      alt={ title }
                    />
                  </div>
                  <h2
                    className="titleCardIngredientes"
                    data-testid={ `${index}-card-name` }
                  >
                    { title }
                  </h2>
                </section>

              </Link>
            );
          })}
      </div>
      <Footer />
    </div>
  );
}

ExplorarIngredientes.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default ExplorarIngredientes;

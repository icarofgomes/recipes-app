import React from 'react';
import PropTypes from 'prop-types';
import '../css/Ingredients.css';

function Ingredients({ recipe }) {
  const ingredients = () => {
    let i = 1;
    const ingList = [];
    while (recipe[`strIngredient${i}`]) {
      ingList.push(`${recipe[`strIngredient${i}`]} ${recipe[`strMeasure${i}`]}`);
      i += 1;
    }
    return ingList;
  };

  return (
    <div>
      <h4>Ingredientes</h4>
      <ul className="itensIng py-2">
        {ingredients().map((ing, idx) => (
          <li key={ ing } data-testid={ `${idx}-ingredient-name-and-measure` }>
            {ing}
          </li>
        ))}
      </ul>
    </div>
  );
}

Ingredients.propTypes = {
  recipe: PropTypes.shape({}).isRequired,
};

export default Ingredients;

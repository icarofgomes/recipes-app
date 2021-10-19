import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context';

const NUM_DRINKS = 12;

function DrinksList() {
  const { filteredDrinks } = useContext(Context);

  return (
    filteredDrinks
      .filter((_drink, idx) => idx < NUM_DRINKS)
      .map((drink, idx) => (
        <Link key={ drink.idDrink } to={ `/bebidas/${drink.idDrink}` }>
          <section key={ drink.strDrink } data-testid={ `${idx}-recipe-card` }>
            <h2 data-testid={ `${idx}-card-name` }>{drink.strDrink}</h2>
            <img
              src={ drink.strDrinkThumb }
              data-testid={ `${idx}-card-img` }
              alt={ drink.strDrink }
            />
          </section>
        </Link>
      ))
  );
}

export default DrinksList;

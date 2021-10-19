const MEAL = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
const DRINK = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';

const fetchFilterByIngredient = async (ingredient, meal = true) => {
  try {
    const response = await fetch(`${meal ? MEAL : DRINK}${ingredient}`);
    const data = await response.json();
    return meal ? data.meals : data.drinks;
  } catch (error) {
    console.error(error);
  }
};

export default fetchFilterByIngredient;

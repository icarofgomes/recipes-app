const MEAL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
const DRINK = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const fetchRecipeById = async (recipeId, meal = true) => {
  try {
    const response = await fetch(`${meal ? MEAL : DRINK}${recipeId}`);
    const data = await response.json();
    return meal ? data.meals[0] : data.drinks[0];
  } catch (error) {
    console.error(error);
  }
};

export default fetchRecipeById;

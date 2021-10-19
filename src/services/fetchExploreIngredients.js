const MEAL = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
const DRINK = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';

const fetchExploreIngredients = async (meal = true) => {
  try {
    const response = await fetch(`${meal ? MEAL : DRINK}`);
    const data = await response.json();
    return meal ? data.meals : data.drinks;
  } catch (error) {
    console.error(error);
  }
};

export default fetchExploreIngredients;

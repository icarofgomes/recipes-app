const MEAL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
const DRINK = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';

const fetchRecipesByCategories = async (category, isMeal = true) => {
  try {
    const response = await fetch(`${isMeal ? MEAL : DRINK}${category}`);
    const data = await response.json();
    return isMeal ? data.meals : data.drinks;
  } catch (error) {
    console.error(error);
  }
};

export default fetchRecipesByCategories;

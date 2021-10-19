const MEAL = 'https://www.themealdb.com/api/json/v1/1/random.php';
const DRINK = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

const fetchExploreRandom = async (meal = true) => {
  try {
    const response = await fetch(`${meal ? MEAL : DRINK}`);
    const data = await response.json();
    return meal ? data.meals[0] : data.drinks[0];
  } catch (error) {
    console.error(error);
  }
};

export default fetchExploreRandom;

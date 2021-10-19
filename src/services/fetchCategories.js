const MEAL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const DRINK = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

const fetchCategories = async (isMeal) => {
  try {
    const response = await fetch(isMeal ? MEAL : DRINK);
    const data = await response.json();
    return isMeal ? data.meals : data.drinks;
  } catch (error) {
    console.error(error);
  }
};

export default fetchCategories;

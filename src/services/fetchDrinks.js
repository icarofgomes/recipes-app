const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const fetchDrinks = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.drinks;
  } catch (error) {
    console.error(error);
  }
};

export default fetchDrinks;

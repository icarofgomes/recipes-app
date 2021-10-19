const MEAL = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=';

const fetchExploreArea = async (area) => {
  try {
    const response = await fetch(`${MEAL}${area}`);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.error(error);
  }
};

export default fetchExploreArea;

const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';

const fetchAreaCategories = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.error(error);
  }
};

export default fetchAreaCategories;

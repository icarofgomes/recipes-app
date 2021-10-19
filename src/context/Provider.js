import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from '.';
import fetchMeals from '../services/fetchMeals';
import fetchCategories from '../services/fetchCategories';
import fetchDrinks from '../services/fetchDrinks';

function Provider({ children }) {
  const [meals, setMeals] = useState([]);
  const [mealsCategories, setMealsCategories] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);

  const [drinks, setDrinks] = useState([]);
  const [drinksCategories, setDrinksCategories] = useState([]);
  const [filteredDrinks, setFilteredDrinks] = useState([]);
  const [mealDetails, setMealDetails] = useState({});

  const [toggleOn, setToggleOn] = useState('');

  const [compareCheckBox, setCompareCheckBox] = useState(0);
  const [ingredientsLength, setIngredientsLength] = useState(0);

  const [filteredByArea, setFilteredByArea] = useState([]);

  const [doneRecipes, setDoneRecipes] = useState([]);

  useEffect(() => {
    const getMeals = async () => {
      const results = await fetchMeals();
      setMeals(results);
      setFilteredMeals(results);
      setFilteredByArea(results);
    };
    getMeals();

    const getMealsCategories = async () => {
      const results = await fetchCategories(true);
      setMealsCategories(results);
    };
    getMealsCategories();

    const getDrinks = async () => {
      const results = await fetchDrinks();
      setDrinks(results);
      setFilteredDrinks(results);
    };
    getDrinks();

    const getDrinksCategories = async () => {
      const results = await fetchCategories(false);
      setDrinksCategories(results);
    };
    getDrinksCategories();
  }, []);

  const context = {
    meals,
    setMeals,
    mealsCategories,
    setMealsCategories,
    filteredMeals,
    setFilteredMeals,
    mealDetails,
    setMealDetails,

    drinks,
    drinksCategories,
    setDrinks,
    setDrinksCategories,
    filteredDrinks,
    setFilteredDrinks,

    toggleOn,
    setToggleOn,

    compareCheckBox,
    setCompareCheckBox,

    ingredientsLength,
    setIngredientsLength,

    filteredByArea,
    setFilteredByArea,

    doneRecipes,
    setDoneRecipes,

  };

  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

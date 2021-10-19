import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import FilterTypesButtons from '../components/FilterTypesButtons';
import FilteredCards from '../components/FilteredCards';

if (!localStorage.favoriteRecipes) {
  const arrayFavorite = [];
  localStorage.setItem('favoriteRecipes', JSON.stringify(arrayFavorite));
}
let favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));

function ReceitasFavoritas() {
  const [recipes, setRecipes] = useState(favoriteRecipes);
  const [filters, setFilters] = useState('');

  const removeFavorite = () => {
    favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    setRecipes(favoriteRecipes);
  };

  useEffect(() => {
    favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (filters === '') {
      return setRecipes(favoriteRecipes);
    }
    favoriteRecipes = favoriteRecipes.filter((recipe) => recipe.type === filters);
    return setRecipes(favoriteRecipes);
  }, [filters]);

  useEffect(() => {
    setRecipes(favoriteRecipes);
  }, [recipes]);

  const filterType = (type) => {
    if (type === 'comida') {
      // newRecipes = favoriteRecipes.filter((recipe) => recipe.type === type);
      return setFilters('comida');
    }
    if (type === 'bebida') {
      // newRecipes = favoriteRecipes.filter((recipe) => recipe.type === type);
      return setFilters('bebida');
    }
    return setFilters('');
  };

  return (
    <div>
      <Header tela="Receitas Favoritas" showSearch={ false } />
      <FilterTypesButtons filterType={ filterType } />
      <FilteredCards
        recipes={ recipes }
        favoriteOrDone="favorite"
        removeFavorite={ removeFavorite }
      />
    </div>
  );
}

export default ReceitasFavoritas;

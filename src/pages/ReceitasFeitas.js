import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import FilterTypesButtons from '../components/FilterTypesButtons';
import FilteredCards from '../components/FilteredCards';

if (!localStorage.doneRecipes) {
  const arrayDone = [];
  localStorage.setItem('doneRecipes', JSON.stringify(arrayDone));
}
let itensDone = JSON.parse(localStorage.getItem('doneRecipes'));

function ReceitasFeitas() {
  const [recipes, setRecipes] = useState(itensDone);
  const [filters, setFilters] = useState('');

  useEffect(() => {
    itensDone = JSON.parse(localStorage.getItem('doneRecipes'));
    if (filters === '') {
      return setRecipes(itensDone);
    }
    itensDone = itensDone.filter((recipe) => recipe.type === filters);
    return setRecipes(itensDone);
  }, [filters]);

  useEffect(() => {
    setRecipes(itensDone);
  }, [recipes]);

  const filterType = (type) => {
    if (type === 'comida') {
      return setFilters('comida');
    }
    if (type === 'bebida') {
      return setFilters('bebida');
    }
    return setFilters('');
  };

  return (
    <div>
      <Header tela="Receitas Feitas" showSearch={ false } />
      <FilterTypesButtons filterType={ filterType } />
      <FilteredCards recipes={ recipes } />
    </div>
  );
}

export default ReceitasFeitas;

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipeList from '../components/RecipeList';
import Categories from '../components/Categories';
import Context from '../context';

function Recipes({ match }) {
  const { filteredMeals, filteredDrinks } = useContext(Context);

  // `true` se for a página de comidas, `false` caso seja bebidas
  const isMeal = /comidas/.test(match.path);

  const renderContent = () => {
    if (!filteredMeals || !filteredDrinks) return <h1>Loading...</h1>;

    return (
      <>
        <Categories isMeal={ isMeal } />
        <div className="d-flex flex-wrap justify-content-around mx-1 mb-5 p-1">
          <RecipeList isMeal={ isMeal } />
        </div>
      </>);
  };

  return (
    <>
      <Header tela={ isMeal ? 'Comidas' : 'Bebidas' } />
      {renderContent()}
      <Footer />
    </>
  );
}

Recipes.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default Recipes;

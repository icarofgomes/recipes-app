import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

const favoriteRecipes = (recipe) => {
  let itemFavorite = JSON.parse(localStorage.getItem('favoriteRecipes'));
  itemFavorite = itemFavorite
    .filter((item) => item.id !== recipe.id);
  localStorage.setItem('favoriteRecipes', JSON.stringify(itemFavorite));
};

function FavoriteBtn({ recipe, index, removeFavorite }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    favoriteRecipes(recipe);
    removeFavorite();
  };

  useEffect(() => {
    const loadPage = () => {
      const itemFavorite = JSON.parse(localStorage.getItem('favoriteRecipes'));
      if (itemFavorite !== null) {
        const blablabla = itemFavorite
          .some((item) => item.id === recipe.id);
        if (blablabla) setClicked(true);
      }
    };
    loadPage();
  });

  return (
    <input
      className="ml-2"
      type="image"
      src={ clicked ? blackHeartIcon : whiteHeartIcon }
      alt="Ícone de compartilhar"
      data-testid={ `${index}-horizontal-favorite-btn` }
      onClick={ handleClick }
    />
  );
}

FavoriteBtn.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  removeFavorite: PropTypes.func.isRequired,
};

export default FavoriteBtn;

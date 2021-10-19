import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShareButton from './ShareButton';
import FavoriteBtn from './FavoriteBtn';
import '../css/FilteredCards.css';

function FilteredCards({ recipes, favoriteOrDone = 'done', removeFavorite }) {
  return (
    <div className="d-flex flex-column align-items-center mb-5 p-1 countainerFav">
      {
        recipes
          .map(({
            image, area, category, name, tags, doneDate, type, alcoholicOrNot, id,
          }, index) => (
            <div
              className="styleCardFav"
              key={ index }
            >
              <Link to={ `./${type}s/${id}` } >
                <input
                  className="rounded"
                  width="200px"
                  src={ image }
                  type="image"
                  alt="Imagem Horizontal"
                  data-testid={ `${index}-horizontal-image` }
                />
              </Link>
              <div className="d-flex justify-content-between">
                <div className="titlesFav px-2">
                  <p
                    className="p-0 m-0"
                    data-testid={ `${index}-horizontal-top-text` }
                  >
                    { type === 'bebida' ? alcoholicOrNot : `${area} - ${category}`}
                  </p>
                  <Link
                    to={ `./${type}s/${id}` }
                    className="linkTile text-decoration-none"
                  >
                    <h2
                      data-testid={ `${index}-horizontal-name` }
                      className="titleFav"
                    >
                      { name }
                    </h2>
                  </Link>
                  { favoriteOrDone === 'done'
                  && (
                    <p data-testid={ `${index}-horizontal-done-date` }>{ doneDate }</p>
                  )}
                </div>
                <div
                  className="buttonsFav d-flex align-items-center
                    justify-content-center"
                >
                  <ShareButton
                    url={ `/${type}s/${id}` }
                    testID={ `${index}-horizontal-share-btn` }
                  />
                  { favoriteOrDone === 'favorite'
                  && (
                    <FavoriteBtn
                      recipe={ recipes[index] }
                      index={ index }
                      removeFavorite={ removeFavorite }
                    />
                  )}
                  { favoriteOrDone === 'done'
                  && (
                    <div>
                      {
                        tags === '' ? '' : tags.map((tag, i) => (
                          <p
                            data-testid={ `${index}-${tag}-horizontal-tag` }
                            key={ i }
                          >
                            {tag}
                          </p>
                        ))
                      }
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
      }
    </div>
  );
}

FilteredCards.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  favoriteOrDone: PropTypes.string.isRequired,
  removeFavorite: PropTypes.func.isRequired,
};

export default FilteredCards;

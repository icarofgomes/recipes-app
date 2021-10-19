import Carousel from 'react-bootstrap/Carousel';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context';
import '../css/Recomendations.css';

const NUM_RECOMENDATIONS = 6;
const FIRST_SLIDE = 0;
const SECOND_SLIDE = 2;
const THIRD_SLIDE = 4;

function Recomendations({ isMeal }) {
  const { meals, drinks } = useContext(Context);

  if (!meals || !drinks) return <h1>Loading...</h1>;

  const recomendations = (isMeal)
    ? drinks.slice(0, NUM_RECOMENDATIONS)
    : meals.slice(0, NUM_RECOMENDATIONS);

  if (!recomendations.length) return <h1>Loading...</h1>;

  const renderSlideItem = (i) => (
    <Carousel.Item key={ i }>
      <div className="carouselCard d-flex justify-content-center align-items-center">
        <div
          data-testid={ `${i}-recomendation-card` }
          className="mx-3 cardSlide"
        >
          <input
            className="rounded"
            width="120px"
            src={ isMeal ? drinks[i].strDrinkThumb : meals[i].strMealThumb }
            type="image"
            alt="Imagem Horizontal"
          />
          <h3 data-testid={ `${i}-recomendation-title` } className="text-center">
            {isMeal ? drinks[i].strDrink : meals[i].strMeal}
          </h3>
        </div>
        <div
          data-testid={ `${i + 1}-recomendation-card` }
          className="mx-3 cardSlide"
        >
          <input
            className="rounded"
            width="120px"
            src={ isMeal ? drinks[i + 1].strDrinkThumb : meals[i + 1].strMealThumb }
            type="image"
            alt="Imagem Horizontal"
          />
          <h3
            data-testid={ `${i + 1}-recomendation-title` }
            className="text-center"
          >
            {isMeal ? drinks[i + 1].strDrink : meals[i + 1].strMeal}
          </h3>
        </div>
      </div>
    </Carousel.Item>
  );

  return (
    <div>
      <Carousel>
        {renderSlideItem(FIRST_SLIDE)}
        {renderSlideItem(SECOND_SLIDE)}
        {renderSlideItem(THIRD_SLIDE)}
      </Carousel>
    </div>
  );
}

Recomendations.propTypes = {
  isMeal: PropTypes.bool.isRequired,
};

export default Recomendations;

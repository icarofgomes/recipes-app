import React from 'react';
import PropTypes from 'prop-types';

const VIDEO_ID_LENGTH = 11;

function Video({ meal, recipe }) {
  if (!meal) return null;

  const videoId = String(recipe.strYoutube).slice(-VIDEO_ID_LENGTH);
  const youtubeURL = `https://www.youtube.com/embed/${videoId}?controls=0`;

  return (
    <div className="embed-responsive embed-responsive-16by9">
      <iframe
        title={ recipe.strMeal }
        className="embed-responsive-item"
        src={ youtubeURL }
        allowFullScreen
        data-testid="video"
      />
    </div>
  );
}

Video.propTypes = {
  meal: PropTypes.bool.isRequired,
  recipe: PropTypes.shape({
    strYoutube: PropTypes.string,
    strMeal: PropTypes.string,
  }).isRequired,
};

export default Video;

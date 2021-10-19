import React from 'react';
import PropTypes from 'prop-types';

function FilterTypesButtons({ filterType }) {
  return (
    <div className="d-flex flex-wrap mb-3 mt-2 ml-2 justify-content-center">
      <button
        className="btn btn-outline-danger mx-2 mb-2"
        onClick={ () => filterType() }
        type="button"
        data-testid="filter-by-all-btn"
      >
        All
      </button>
      <button
        className="btn btn-outline-danger mx-2 mb-2"
        onClick={ () => filterType('comida') }
        type="button"
        data-testid="filter-by-food-btn"
      >
        Food
      </button>
      <button
        className="btn btn-outline-danger mx-2 mb-2"
        onClick={ () => filterType('bebida') }
        type="button"
        data-testid="filter-by-drink-btn"
      >
        Drink
      </button>
    </div>
  );
}

FilterTypesButtons.propTypes = {
  filterType: PropTypes.func.isRequired,
};

export default FilterTypesButtons;

import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Context from '../context';
import fetchExploreArea from '../services/fetchExploreArea';
import fetchAreaCategories from '../services/fetchAreaCategories';
import '../css/ExplorarOrigem.css';

function ExplorarOrigem() {
  const { filteredMeals, filteredByArea, setFilteredByArea } = useContext(Context);
  const [areaCategories, setAreaCategories] = useState([]);
  const NUM_RECIPES = 12;

  useEffect(() => {
    const getAreaCategories = async () => {
      const results = await fetchAreaCategories();
      setAreaCategories(results);
    };
    getAreaCategories();
  }, []);

  const handleOnChange = ({ target: { value } }) => {
    if (value === 'All') {
      setFilteredByArea(filteredMeals);
    } else {
      const filterByArea = async (area) => {
        const result = await fetchExploreArea(area);
        setFilteredByArea(result);
      };
      filterByArea(value);
    }
  };

  if (!areaCategories || !filteredByArea) return <h1>Loading...</h1>;

  return (
    <div>
      <Header tela="Explorar Origem" />
      <div className=" p-3">
        <h5>Selecione um filtro por local de origem:</h5>
        <select
          className="selectOrigem select border border-danger rounded"
          data-testid="explore-by-area-dropdown"
          onChange={ ({ target }) => handleOnChange({ target }) }
        >
          <option data-testid="All-option">All</option>
          {areaCategories
            .map((area) => (
              <option
                key={ area.strArea }
                data-testid={ `${area.strArea}-option` }

              >
                {area.strArea}
              </option>
            ))}
        </select>
      </div>
      <div className="d-flex flex-wrap justify-content-around mb-5 p-2">
        {filteredByArea
          .filter((_recipe, idx) => idx < NUM_RECIPES)
          .map((recipe, idx) => {
            const id = recipe.idMeal;
            const to = '/comidas/';
            const title = recipe.strMeal;
            const thumb = recipe.strMealThumb;

            return (
              <Link key={ id } to={ `${to}${id}` } className="text-decoration-none">
                <section
                  className="cardOrigem"
                  key={ title }
                  data-testid={ `${idx}-recipe-card` }
                >
                  <img
                    src={ thumb }
                    data-testid={ `${idx}-card-img` }
                    className="img-fluid rounded"
                    alt={ title }
                  />
                  <h2
                    className="titleOrigem"
                    data-testid={ `${idx}-card-name` }
                  >
                    {title}
                  </h2>
                </section>
              </Link>
            );
          }) }
      </div>
      <div />
      <Footer />
    </div>
  );
}

export default ExplorarOrigem;

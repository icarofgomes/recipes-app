import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Recipes from '../pages/Recipes';
import Explorar from '../pages/Explorar';
import Perfil from '../pages/Perfil';
import ReceitasFeitas from '../pages/ReceitasFeitas';
import ReceitasFavoritas from '../pages/ReceitasFavoritas';
import ReceitasDetalhes from '../pages/ReceitaDetalhes';
import ReceitasProgresso from '../pages/ReceitasProgresso';
import ExplorarReceitas from '../pages/ExplorarReceitas';
import ExplorarIngredientes from '../pages/ExplorarIngredientes';
import NotFoundPage from '../pages/NotFoundPage';
import ExplorarOrigem from '../pages/ExplorarOrigem';

function Routes() {
  return (
    <Switch>
      <Route exact path="/recipes-app" component={ Login } />
      <Route exact path="/comidas" component={ Recipes } />
      <Route exact path="/bebidas" component={ Recipes } />
      <Route exact path="/comidas/:recipeId" component={ ReceitasDetalhes } />
      <Route exact path="/bebidas/:recipeId" component={ ReceitasDetalhes } />
      <Route
        path="/comidas/:recipeId/in-progress"
        component={ ReceitasProgresso }
      />
      <Route
        path="/bebidas/:recipeId/in-progress"
        component={ ReceitasProgresso }
      />
      <Route exact path="/explorar" component={ Explorar } />
      <Route exact path="/explorar/comidas" component={ ExplorarReceitas } />
      <Route exact path="/explorar/bebidas" component={ ExplorarReceitas } />
      <Route
        exact
        path="/explorar/comidas/ingredientes"
        component={ ExplorarIngredientes }
      />
      <Route
        exact
        path="/explorar/bebidas/ingredientes"
        component={ ExplorarIngredientes }
      />
      <Route path="/explorar/comidas/area" component={ ExplorarOrigem } />
      <Route path="/explorar/bebidas/area" component={ NotFoundPage } />
      <Route path="/perfil" component={ Perfil } />
      <Route path="/receitas-feitas" component={ ReceitasFeitas } />
      <Route path="/receitas-favoritas" component={ ReceitasFavoritas } />
    </Switch>
  );
}

export default Routes;

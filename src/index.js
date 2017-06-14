import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import CocktailsContainer from './CocktailsContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <CocktailsContainer/>
  </Router>,
document.getElementById('root'));
registerServiceWorker();

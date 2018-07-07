import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import HomePage from './containers/homepage';
import FoodForm from './containers/foodForm';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path='form' component={FoodForm}/>
  </Route>
);
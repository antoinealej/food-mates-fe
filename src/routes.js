import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import HomePage from './containers/homepage';
import Login from './containers/login';
import FoodForm from './containers/foodForm';
import Search from './containers/search';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path='login' component={Login} />
    <Route path='form' component={FoodForm} />
    <Route path='search' component={Search} />
  </Route>
);
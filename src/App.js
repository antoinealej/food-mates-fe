import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from './containers/homepage';
import Login from './containers/login';
import Search from './containers/search';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Route path='/' component={Homepage} />
          {/* <Route path='/login' component={Login} /> */}
          {/* <Route path='/search' component={Search} /> */}
      </BrowserRouter>
    );
  }
}

export default App;

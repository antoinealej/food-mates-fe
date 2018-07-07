import React, { Component } from 'react';
import Login from './components/login';
import Search from './containers/search';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Route path='/' component={Login} />
          {/* <Route path='/search' component={Search} /> */}
      </BrowserRouter>
    );
  }
}

export default App;

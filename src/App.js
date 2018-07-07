import React, { Component } from 'react';
import Login from './containers/login';
import Homepage from './containers/homepage';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' component={Homepage} />
          <Route path='/login' component={Login} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

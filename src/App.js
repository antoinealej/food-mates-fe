import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from './containers/homepage';
import Login from './containers/login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' component={Homepage} />
          {/* <Route path='/login' component={Login} /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

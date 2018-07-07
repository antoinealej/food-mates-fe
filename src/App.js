import React, { Component } from 'react';
import Login from './components/login';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Route path='/' component={Login} />
      </BrowserRouter>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
      <div className="homepage">
        <Button variant="contained" color="primary" href="/containers/login.js">
          Login page
        </Button>
      </div>
    );
  }
}

export default App;

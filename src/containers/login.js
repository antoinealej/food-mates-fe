import React, { Component } from 'react';
import './login.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class Login extends Component {
  render() {
    return (
      <div className="login__container">
        <div className="login__title">
          Stay connected with foodmates
        </div>
        <div className="login__input-container">
          <TextField
            id="login__username"
            label="Username"
            placeholder="Username"
            className="test"
            margin="normal"
          />

          <TextField
            id="login__password"
            label="Password"
            placeholder="Password"
            className="test"
            margin="normal"
          />

          <Button
            className="login__btn-login"
            variant="contained"
            color="primary"
            href="/containers/login.js"
            style={{backgroundColor: '#50E3C2', marginTop: '40%'}}>
            Login
          </Button>
        </div>
      </div>
    );
  }
}

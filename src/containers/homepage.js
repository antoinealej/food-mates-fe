import React, { Component } from 'react';
import './homepage.css';
import Button from '@material-ui/core/Button';
import Logo from '../assets/img/FoodmatesLogoGBG.png';
import { login, register } from '../utils/auth';

export default class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <div className="homepage__display-container">
          <div className="homepage__logo-container">
            <img className="homepage__logo" src={Logo} alt="Foodmate_logo"/>
          </div>
          <div className="homepage__tagline">
            Turn wastes to mates
          </div>
          <div className="homepage__btn-container">
            <Button
              className="homepage__btn-login"
              variant="contained"
              color="primary"
              href="/containers/login.js"
              style={{backgroundColor: '#50E3C2'}}
              onClick={() => login('user', 'pass')}
            >
              Log in
            </Button>
            <Button
              className="homepage__btn-signup"
              variant="contained"
              color="primary"
              href="/containers/login.js"
              style={{backgroundColor: '#50E3C2', marginTop: '5%'}}
              onClick={() => register('user', 'pass')}
            >
              Sign up
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

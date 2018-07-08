import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import FoodCategory from '../components/foodCategory';
import config from '../config';
import './food-form.css';

const labels = [
  {
    label: 'Category',
    chips: ['Packaged Food', 'Fresh food', 'Cooked Food']
  },
  {
    label: 'Bought From',
    chips: ['From supermarket', 'Gift', 'Bought online']
  },
  {
    label: 'Delivery Method',
    chips: ['Meet up', 'Delivery']
  },
  {
    label: 'Used Conditions',
    chips: ['100% new', '80% new', '50% new', 'used']
  }
];


export default class FoodForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      dataFromChildren: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.getDataFromCategory = this.getDataFromCategory.bind(this);
  }

  handleSubmit(e) {
    this.setState({ value: e.target.value })
  }

  getDataFromCategory(data) {

    this.setState({
      dataFromChildren: data
    })
  }

  render() {
    return (
      <div className="container">
        <AppBar
          position="static"
          style={{
            backgroundColor: '#F9F9F9',
            height: 70
          }}
        >
          <div className="title">
            Food Form
          </div>
        </AppBar>

        <div className="food-image" />
        <div className="food-form-container">
          <form onSubmit={this.handleSubmit} className="form">

            <div className="form-category">
              <label >
                Description
                <input
                  className="input"
                  placeholder="Honey Pot"
                />
              </label>
            </div>

            {labels.map(label => <FoodCategory
              key={label.label}
              label={label.label}
              chip={label.chips}
              sendDataBack={this.getDataFromCategory}
            />)}

            <div className="form-category">
              <label>
                Expiry Date
              </label>
              <div className="chips-container">
                <Chip
                  label="I don't know"
                  style={{
                    margin: 5
                  }}
                />
                <input
                  className="input-expiry"
                  placeholder="Enter Date"
                />
              </div>
            </div>

            <Button
              className="login__btn-login"
              variant="contained"
              color="primary"
              style={{backgroundColor: config.teal_colour}}>
              SUBMIT
            </Button>

          </form>
        </div>

      </div>
    )
  }
}
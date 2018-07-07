import React, { Component } from 'react';
import Chip from '@material-ui/core/Chip';

export default class FoodCategory extends Component {

  render() {
    const { label, chip } = this.props;

    return (
      <div className="form-category">
        <label>{label}</label>
        <div className="chips-container">
          {chip.map(chip => (<Chip
            clickable
            key={chip}
            label={chip}
            style={{
              margin: 5
            }}
          />))}
        </div>
      </div>
    )
  }
}
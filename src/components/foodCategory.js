import React, { Component } from 'react';
import Chip from '@material-ui/core/Chip';

export default class FoodCategory extends Component {
  constructor(props){
    super(props);

    this.retrieveData = this.retrieveData.bind(this);
  }

  retrieveData(e) {
    this.props.sendDataBack(e);
  }

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
            onClick={this.retrieveData}
          />))}
        </div>
      </div>
    )
  }
}
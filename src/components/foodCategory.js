import React, { Component } from 'react';
import Chip from '@material-ui/core/Chip';
import config from '../config';

export default class FoodCategory extends Component {
  constructor(props){
    super(props);

    this.retrieveData = this.retrieveData.bind(this);
  }

  retrieveData(chip) {
    // this.props.sendDataBack(e);
    this.setState({ key: chip });
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
              margin: 5,
              backgroundColor: (this.state && this.state.key === chip) ? config.teal_colour : ''
            }}
            onClick={() => this.retrieveData(chip)}
          />))}
        </div>
      </div>
    )
  }
}
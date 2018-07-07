import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './search.css';

export default class Search extends Component {
  render() {
    return (
      <div class="search">
        <div>
          <Button variant="outlined" color="primary">Category</Button>
          <Button variant="outlined" color="primary">Bought From</Button>
        </div>
      </div>
      
    );
  }
}

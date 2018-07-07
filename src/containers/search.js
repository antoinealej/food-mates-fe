import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import SimpleMediaCard from '../components/search/SimpleMediaCard';
import SimpleDialog from '../components/search/SimpleDialog';
import categories from '../models/category';
import './search.css';
import coffeeImage from '../assets/img/pexels-photo-416441.jpg';

const items = [
  { name: 'Coffee Beans', category: categories[0], image: coffeeImage },
  { name: 'Coffee Beans2', category: categories[1], image: coffeeImage },
  { name: 'Coffee Beans3', category: categories[2], image: coffeeImage },
  { name: 'Coffee Beans4', category: categories[1], image: coffeeImage },
];

class Search extends Component {
  state = {
    open: false,
    selectedCategory: '',
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = (value) => {
    this.setState({ selectedCategory: value, open: false });
  };

  handleCameraClick = () => {
  //   navigator.mediaDevices.getUserMedia({ video: true })
  //   .then(function(stream) {
  //     /* use the stream */
  //   })
  //   .catch(function(err) {
  //     /* handle the error */
  //   });
  }

  handleCameraChange = (event) => {
    const imageEle = document.getElementById('camera-img');
    const { files } = event.target;

    let file = null;

    for (let i = 0; i < files.length; i++) {
      if (files[i].type.match(/^image\//)) {
        file = files[i];
        break;
      }
    }

    if (file !== null) {
      imageEle.src = URL.createObjectURL(file);
    }
  }

  render() {
    const { selectedCategory } = this.state;
    const categoryDisplay = this.state.selectedCategory ? this.state.selectedCategory : 'Category';
    const categoryButtonVariant = this.state.selectedCategory ? 'contained' : 'outlined';

    return (
      <div className="search">
        <div className="searchRow">
          <Button variant={categoryButtonVariant} color="primary" onClick={this.handleClickOpen}>{categoryDisplay}</Button>
          <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>Bought From</Button>
          
          <label for="camera-file">
            Camera
          </label>
          <input id="camera-file" type="file" accept="image/*" capture="environment" style={{ display: 'none' }} onChange={this.handleCameraChange} />
          <img id="camera-img" style={{ width: '100%' }} />

          <SimpleDialog
            selectedCategory={this.state.selectedCategory}
            open={this.state.open}
            onClose={this.handleClose}
            categories={categories}
          />
        </div>
        <div>
          {items.map((item, index) => {
            if(selectedCategory && item.category !== selectedCategory) {
              return null;
            } else {
              return (
                <SimpleMediaCard
                  key={index}
                  name={item.name}
                  category={item.category}
                  image={item.image}
                />
              )
            }
          })}
        </div>
      </div>

    );
  }
}

export default Search;

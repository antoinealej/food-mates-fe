import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import SimpleMediaCard from '../components/search/SimpleMediaCard';
import SimpleDialog from '../components/search/SimpleDialog';
import categories from '../models/category';
import './search.css';
import coffeeImage from '../assets/img/pexels-photo-416441.jpg';
import croissantImage from '../assets/img/MVIMG_20180708_113456.jpg';
import skittlesImage from '../assets/img/MVIMG_20180708_112858.jpg';
import cokeImage from '../assets/img/MVIMG_20180708_112907.jpg';
import Icon from '@material-ui/core/Icon';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import config from '../config';

const items = [
  { name: 'Maltesers', category: categories[0], image: coffeeImage },
  { name: 'Croissant', category: categories[1], image: croissantImage },
  { name: 'Skittles', category: categories[2], image: skittlesImage },
  { name: 'Coca Cola', category: categories[1], image: cokeImage },
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
        <AppBar
          position="static"
          style={{
            backgroundColor: '#F9F9F9',
            height: 60
          }}
        >
          <div className="search__title-container">
            <div className="search__title">
              Search
            </div>
            <Button className="test__right" color="inherit" href='/form'>
              <AddCircleIcon className="search__right-icon" color="primary" style={{ color: config.teal_colour }}/>
            </Button>
          </div>
        </AppBar>
        <div className="searchRow">
          <Button
            variant={categoryButtonVariant}
            color="primary"
            onClick={this.handleClickOpen}
            style={{color: config.teal_colour, borderRadius: '15px'}}
          >
            {categoryDisplay}
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={this.handleClickOpen}
            style={{color: config.teal_colour, borderRadius: '15px'}}
          >
            Bought From
          </Button>

          {/* <label for="camera-file">
            Camera
          </label>
          <input id="camera-file" type="file" accept="image/*" capture="environment" style={{ display: 'none' }} onChange={this.handleCameraChange} />
          <img id="camera-img" style={{ width: '100%' }} /> */}

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

import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Dropzone from 'react-dropzone';
import FoodCategory from '../components/foodCategory';
import config from '../config';
import placeholderFood from '../assets/img/placeholder-food.jpg';
import { listCategories } from '../utils/category';
import { listFoodOrigin } from '../utils/foodOrigin';
import './food-form.css';

console.log(placeholderFood);

const staticLabels = [
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
    this.onImageDrop = this.onImageDrop.bind(this);
  }

  componentDidMount() {
    listCategories().then((categories) => {
      let labels = this.state.labels || staticLabels;
      labels[0].chips = categories.map(cat => cat.name);
      this.setState({ labels })
    });
    listFoodOrigin().then((foodOrigines) => {
      let labels = this.state.labels || staticLabels;
      labels[1].chips = foodOrigines.map(food => food.name);
      this.setState({ labels })
    });

  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.value)
    this.setState({ value: e.target.value });

  }

  getDataFromCategory(data) {

    this.setState({
      dataFromChildren: data
    })
  }

  onImageDrop(files) {
    this.setState({
      uploadImage: files[0]
    });
  }

  render() {
    const uploadImage = this.state && this.state.uploadImage;
    const labels = (this.state && this.state.labels) || [];
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

        <Dropzone
          className="food-image"
          multiple={false}
          accept="image/*"
          onDrop={this.onImageDrop.bind(this)}
          style={{
            backgroundImage: `url(${uploadImage && uploadImage.preview || placeholderFood})`
          }}>
        </Dropzone>
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
              type="submit"
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
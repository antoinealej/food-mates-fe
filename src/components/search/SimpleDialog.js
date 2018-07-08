import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import categories from '../../models/category';
import config from '../../config';

class SimpleDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: props.selectedCategory
    }
  }

  handleClose = () => {
    this.props.onClose(this.state.selectedCategory);
  };

  handleListItemClick = (value) => {
    this.setState({
      selectedCategory: value
    })
  };

  handleSearchButtonClick = () => {
    this.props.onClose(this.state.selectedCategory);
  }

  render() {
    const { open, categories, selectedCategory, onClose } = this.props;

    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">Category</DialogTitle>
        <div>
          <List>
            {categories.map((category, index) => {
              const buttonVariant = category === this.state.selectedCategory ? 'contained' : 'outlined';
              return (
                <ListItem key={index}>
                  <Button
                    variant={buttonVariant}
                    color="primary"
                    onClick={() => this.handleListItemClick(category)}
                    style={{color: config.teal_colour, borderRadius: '15px'}}
                  >
                    {category}
                  </Button>
                </ListItem>
              )
            })}
            <ListItem button onClick={this.handleClose}>
              <Button
                variant="contained"
                color="primary"
                onClick={this.handleClickOpen}
                style={{color: config.teal_colour, borderRadius: '15px'}}
              >
                Search
              </Button>
            </ListItem>
          </List>
        </div>
      </Dialog>
    );
  }
}

SimpleDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  categories: PropTypes.array.isRequired,
  selectedCategory: PropTypes.string,
  onClose: PropTypes.func,
};

export default SimpleDialog;

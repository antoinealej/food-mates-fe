import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import './search.css';

const items = ['Packaged Food', 'Fresh Food', 'Cooked Food'];
const styles = {};

class SimpleDialog extends React.Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">Category</DialogTitle>
        <div>
          <List>
            {items.map(item => (
              <ListItem>
                <Button variant="outlined" color="primary" onClick={() => this.handleListItemClick(item)}>{item}</Button>
              </ListItem>
              
            ))}
            <ListItem button onClick={() => this.handleListItemClick('addAccount')}>
              <Button variant="contained" color="primary" onClick={this.handleClickOpen}>Search</Button>
            </ListItem>
          </List>
        </div>
      </Dialog>
    );
  }
}

SimpleDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};


const SimpleDialogWrapped = withStyles(styles)(SimpleDialog);

export default class Search extends Component {
  state = {
    open: false,
    selectedValue: items[1],
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = value => {
    this.setState({ selectedValue: value, open: false });
  };

  render() {
    return (
      <div class="search">
        <div>
          <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>Category</Button>
          <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>Bought From</Button>
          <SimpleDialogWrapped
            selectedValue={this.state.selectedValue}
            open={this.state.open}
            onClose={this.handleClose}
          />
        </div>
      </div>
      
    );
  }
}

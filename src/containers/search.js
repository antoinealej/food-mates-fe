import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';
import './search.css';

const items = ['Packaged Food', 'Fresh Food', 'Cooked Food'];
const styles = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
};

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
        <DialogTitle id="simple-dialog-title">CATEGORY</DialogTitle>
        <div>
          <List>
            {items.map(item => (
              <ListItem button onClick={() => this.handleListItemClick(item)} key={item}>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={item} />
              </ListItem>
            ))}
            <ListItem button onClick={() => this.handleListItemClick('addAccount')}>
              <ListItemAvatar>
                <Avatar>
                  <AddIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="add account" />
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

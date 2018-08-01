import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from 'material-ui-icons/Menu';
import IconButton from 'material-ui/IconButton';


class OpcionsMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {

    console.log(this.props);
    const { firebase ,history } = this.props;
    // console.log(firestore , history)
    const { anchorEl } = this.state;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MenuIcon/>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={() => history.push('/projects')} >
            Proyectos
          </MenuItem>
          <MenuItem onClick={() => history.push('/designers')} >
            Diseñadores</MenuItem>
          <MenuItem onClick={ () => firebase.logout() }>
            Cerrar sesión
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default OpcionsMenu;
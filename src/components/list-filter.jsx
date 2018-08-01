import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';


const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    borderBottom: '1px solid rgba(1,1,1,0.1)',
    [theme.breakpoints.up('md')]: {
      width: '100%',        
    },
  },
  itemText: {
    paddingLeft: '0',
  },
  elementItemText: {
    paddingLeft: '0 !important',
    primary: {
      fontSize: '1rem',
    }
  },
});

class FilterList extends React.Component {
  state = { open: true };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes, title, filters } = this.props;
    // console.log(filters);
    return (
      <div className={classes.root}>
        <List
          component="nav"
        >
          <ListItem button onClick={this.handleClick}>
            <ListItemText className={classes.itemText} primary={title}/>
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {filters.map(item => (
                  <ListItem button className={classes.nested} key={item} >
                    <ListItemText className={classes.elementItemText} inset primary={item} />
                  </ListItem>
              ))}
            </List>
          </Collapse>
        </List>
      </div>
    );
  }
}

FilterList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FilterList);
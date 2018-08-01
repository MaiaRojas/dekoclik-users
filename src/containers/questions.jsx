import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import image from '../img/muestra-perfil.png';

const styles = theme => ({
  list: {
    float: 'left',
    position: 'relative',
    display: 'inline',
    counterIncrement: 'li',
    width: '12%',
    textAlign: 'center',
    color: '#ccc'
  },
  ol: {
    padding: 0,
    display: 'flex',
    justifyContent: 'center'
  },
  stepbar: {
    marginTop: '6%',
  },
  title: {
    fontWeight: 750,
    color: '#4c4c4c',
    fontSize: 34,
    marginTop: '4%'
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '3%'
  },
  image: {
    width: 260,
    height: 280,
    margin: 2
  }
});

const Questions = (props) => {
  const { classes } = props;

  return (
    <div id='root'>
      <div className={classes.stepbar}>
        <div className={classes.ol}>
          <div className={classes.list}></div>
          <div className={classes.list}></div>
          <div className={classes.list}></div>
          <div className={classes.list}></div>
          <div className={classes.list}></div>
          <div className={classes.list}></div>
          <div className={classes.list}></div>
        </div>
      </div>
      <Typography variant="title" gutterBottom align="center" className={classes.title}>
        ¿ Lorem ipsum dolor sit amet ?
      </Typography>
      <div className={classes.container}>
        <div>
          <img src={image} alt='image' className={classes.image}/>
        </div>
        <div>
          <img src={image} alt='image' className={classes.image}/>
        </div>
        <div>
          <img src={image} alt='image' className={classes.image}/>
        </div>
      </div>
    </div>
  );
}

Questions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Questions);


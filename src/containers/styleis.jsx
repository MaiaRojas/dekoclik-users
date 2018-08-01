import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from 'material-ui/Button';
import image from '../img/muestra-perfil.png';

const styles = theme => ({
  title: {
    fontWeight: 750,
    color: '#4c4c4c',
    fontSize: 60,
    marginTop: '2%',
    marginBottom: '3%'
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '3%'
  },
  button: {
    margin: theme.spacing.unit,
      border: '2px solid #FF5D51',
      borderRadius: 5,
      color: '#FF5D51',
      backgroundColor: 'white',
      display: 'block',
      marginTop: 10,
      fontSize: 18,
      float: 'left',
        padding:15
  },
  p: {
    fontSize: 23,
    marginLeft: '15%',
    marginRight: '15%',
    lineHeight: 1.5
  },
  p1: {
    fontSize: 29,
    fontWeitght: 100,
    marginTop: '8%'
  }
});

const Styleis = (props) => {
  const { classes } = props;

  return (
    <div id='root'>
      <Typography variant="p" gutterBottom align="center" className={classes.p1}>
        Tu estilo es
      </Typography>
      <Typography variant="title" gutterBottom align="center" className={classes.title}>
         Lorem ipsum 
      </Typography>
      <Typography variant="p" gutterBottom align="center" className={classes.p}>
          consectetur adipisicing elit. Veritatis error natus facilis vero fugit fuga praesentium laboriosam! Harum minus cumque perspiciatis minima maxime reiciendis, earum accusamus, nihil placeat dignissimos necessitatibus.Laboriosam neque nesciunt sapiente eius porro amet tempora, molestiae ipsam est assumenda quibusdam unde cum fugit! Dolorum aperiam explicabo iusto nisi! Aut, alias consectetur! Fuga, velit? Et sint eligendi consectetur.
      </Typography>
      <div className={classes.container}>
        <Button variant="contained" size="small" className={classes.button}>
          Empezar otra vez
        </Button>
        <Button variant="contained" size="small" className={classes.button}>
          Empezar proyecto
        </Button>
      </div>
    </div>
  );
}

Styleis.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Styleis);


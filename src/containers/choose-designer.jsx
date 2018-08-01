import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card from 'material-ui/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    width: '20%',
    margin: 15
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  container: {
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
      border: '2px solid #FF5D51',
      color: '#FF5D51',
      backgroundColor: 'white',
      display: 'block',
      marginTop: 10,
      fontSize: 13,
      borderRadius: '4px'
  },
  button2: {
    border: '2px solid #FF5D51',
    color: '#FF5D51',
    backgroundColor: 'white',
    display: 'block',
    marginTop: 10,
    fontSize: 22,
    borderRadius: '5px',
    padding: 16,
    margin: 10,
    marginTop: '4%'
},
  title: {
    color: '#4a4a4a',
    fontSize: 45,
    fontWeight: 900,
    marginTop: '5%',
    marginBottom: '2%',
  },
  head: {
    textAlign: 'center',
    fontSize: 15
  }
};

function SimpleMediaCard(props) {
  const { classes } = props;
  return (
    <div>
      <Typography variant="title" gutterBottom align="center" className={classes.title}>
         Elige tu diseñador 
      </Typography>
      <div className={classes.container}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2" className={classes.head}>
              Nombre Diseñador
            </Typography>
          </CardContent>
          <CardActions style={{display: 'flex', justifyContent: 'center'}}>
            <Button size="small" color="primary" className={classes.button}>
              Portafolio
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2" className={classes.head}>
              Nombre Diseñador
            </Typography>
          </CardContent>
          <CardActions style={{display: 'flex', justifyContent: 'center'}}>
            <Button size="small" color="primary" className={classes.button}>
              Portafolio
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2" className={classes.head}>
              Nombre Diseñador
            </Typography>
          </CardContent>
          <CardActions style={{display: 'flex', justifyContent: 'center'}}>
            <Button size="small" color="primary" className={classes.button}>
              Portafolio
            </Button>
          </CardActions>
        </Card>
      </div>
      <div className={classes.container}>
        <Button size="small" color="primary" className={classes.button2}>
          Elegir ahora
        </Button>
        <Button size="small" color="primary" className={classes.button2}>
          Volver al perfil
        </Button>
      </div>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);
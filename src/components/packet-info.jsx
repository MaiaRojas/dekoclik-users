import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import ProjectEditOpenModalButton from './project-edit-open-modal-button';


const styles = theme => ({
  root: {
    marginLeft: 40,
    marginRight: 40,
    marginTop: 100
  },
  card: {
    maxWidth: 200,
    margin: 5
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  button: {
    margin: theme.spacing.unit,
      border: '2px solid #FF5D51',
      color: '#FF5D51',
      backgroundColor: 'white',
      display: 'block',
      marginTop: 10,
      fontSize: 10,
  },
  grid: {
    flexGrow: 1,
  },
  icon: {
    color: '#FF5D51',
    marginLeft: 'auto',
  }
});

const PacketInfo = (props) => {
  const { classes } = props;
  // console.log('PacketInfo', props)
  return (
    <div className={classes.root}>
      <div>
        <Tooltip placement="left" title="Editar">
          <ProjectEditOpenModalButton
            // profile={props.profile}
            // firebase={props.firebase}
            // uid={props.uid}
            // auth={props.auth}
          />
        </Tooltip>
        <Tooltip placement="left" title="Cambiar de diseñador">
          <IconButton
            onClick={() => {
            props.history.push(`/designers/${props.designerid}/projects/${props.projectid}/why`)
          }}
          >
            <PersonIcon />
          </IconButton>
        </Tooltip>
      </div>
      <div>
        <Typography gutterBottom variant="headline" component="h2" style={{ color: '#777777',fontSize: 26.25, marginTop: 30}}>
          Paquete Clásico
        </Typography>
        <Typography component="p" style={{ color: '#939393',fontSize: 15.22}}>
          Cliente: Ana Rosa Chavez
        </Typography>
        <Typography component="p" style={{ color: '#939393',fontSize: 15.22}}>
          Ambiente: Sala
        </Typography>
        <Button variant="contained" size="small" className={classes.button}>
          Volver
        </Button>
      </div>
      <div>
        <Typography gutterBottom variant="headline" component="h2" style={{ color: '#777777',fontSize: 26.25, marginTop: 30}}>
          Brief
        </Typography>
        <Typography component="p" style={{ color: '#939393',fontSize: 15.22}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo architecto laborum vel aspernatur non illo ipsum nesciunt nobis totam dignissimos quod voluptate.
        </Typography>
        <Button variant="contained" size="small" className={classes.button}>
          Ver más
        </Button>
      </div>
      <div className={classes.grid}>
        <Typography gutterBottom variant="headline" component="h2" style={{ color: '#777777',fontSize: 26.25, marginTop: 30}}>
          Conceptos
        </Typography>
        <Grid container>
          <Grid item xs={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="/img/home.png"
                title="Casita"
              />
              <CardActions>
              <Button variant="contained" size="small" className={classes.button}>
                Catálogo
              </Button>
              <CloudUploadIcon className={classes.icon}/>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardActions>
              <Button variant="contained" size="small" className={classes.button}>
                Catálogo
              </Button>
              <CloudUploadIcon className={classes.icon}/>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                // image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardActions>
              <Button variant="contained" size="small" className={classes.button}>
                Catálogo
              </Button>
              <CloudUploadIcon className={classes.icon}/>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

PacketInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PacketInfo);
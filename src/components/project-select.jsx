import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import NoEncryptionIcon from 'material-ui-icons/NoEncryption';
import DeleteIcon from 'material-ui-icons/Delete';
import IconButton from 'material-ui/IconButton';
import ProjectDeleteDialog from './project-delete-dialog';
import ProjectLockedDialog from './project-locked-dialog';
import { toggleProjectDeleteDialog } from '../reducers/project-delete-dialog';
import { toggleProjectLockedDialog } from '../reducers/project-locked-dialog';


const styles = theme => ({
  card: {
    maxWidth: 300,
    margin: 50,
    backgroundColor:'white',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  button: {
    margin: theme.spacing.unit,
    backgroundColor: '#FF5D51',
    color: 'white'
  },
});

const ProjectSelect = (props) => {
  const { classes, history } = props;
  // console.log('Project select',props)
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="/img/home.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2" style={{ color: '#777777',fontSize: 26.25}}>
            Paquete Clásico
          </Typography>
          <Typography component="p" style={{ color: '#939393',fontSize: 15.22}}>
            Cliente: Ana Rosa Chavez
          </Typography>
          <Typography component="p" style={{ color: '#939393',fontSize: 15.22}}>
            Ambiente: Sala
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="raised"
            color="primary"
            onClick={() => {
              history.push(`/designers/${props.designerid}/projects/${props.projectid}`)}
            }
            className={classes.button}
          >
            Continuar
          </Button>
            <div>
              <Tooltip placement="left" title="Bloquear projecto">
                <IconButton onClick={
                  props.toggleProjectLockedDialog
                }>
                  <NoEncryptionIcon />
                </IconButton>
              </Tooltip>
              <Tooltip placement="left" title="Eliminar projecto">
                <IconButton onClick={props.toggleProjectDeleteDialog}>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </div>
        </CardActions>
      </Card>
    {props.deleteDialogOpen &&
      <ProjectDeleteDialog
        designerid={props.designerid}
        projectid={props.projectid}
      />
    }
    {props.lockedDialogOpen &&
      <ProjectLockedDialog
        designerid={props.designerid}
        projectid={props.projectid}
      />
    }
    </div>
  );
}

ProjectSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = {
  toggleProjectLockedDialog,
  toggleProjectDeleteDialog,
};


const mapStateToProps = ({
  projectDeleteDialog,
  projectLockedDialog,
}) => ({
  deleteDialogOpen: projectDeleteDialog.open,
  lockedDialogOpen: projectLockedDialog.open,
  // drawerOpen: topbar.drawerOpen,
});


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles, { withTheme: true }),
)(ProjectSelect);
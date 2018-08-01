import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from 'material-ui/List';
import StarIcon from 'material-ui-icons/Star';
import StarBorderIcon from 'material-ui-icons/Star';
import TopBar from '../components/top-bar';
import ProjectSelect from '../components/project-select';
import ProjectSection from '../components/project-section';
import Loader from '../components/loader';
import Alert from '../components/alert';
import ProjectDeleteDialog from '../components/project-delete-dialog';
import { toggleProjectDeleteDialog } from '../reducers/project-delete-dialog';
import { toggleProjectLockedDialog } from '../reducers/project-locked-dialog';
import { displayDrawer } from '../reducers/top-bar';

const styles = theme => ({
  divUser: {
    backgroundColor: '#eeeeee',
    height: '100vh'
  },
  divProject: {
    backgroundColor: 'white',
    height: '100vh'
  },
  root: {
    flexGrow: 1,
    marginTop: '90px',
  },
  bigAvatar: {
    width: 200,
    height: 201,
    marginTop: 190
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  projectListWrapper: {
    background: theme.palette.background.paper,
  },
});


const Project = ({
  classes,
  designer,
  projects,
  match,
  history,
  auth,
  deleteDialogOpen,
}) => {
  if(!designer || typeof projects === 'undefined'){
    return (<Loader />);
  }
  const { designerid } = match.params;
  console.log(designer);
  return (
    <div >
      <TopBar title="project">
      </TopBar>
      <div className={classes.root}>
        <Grid container style={{backgroundColor:'white',}}>
          <Grid item xs={5} className={classes.divUser}>
            <div className={classes.flex}>
              <Avatar style={{ border: '5px solid white'}} className={classes.bigAvatar}>
                <img src='https://www.coam.org/media_arquitectos/18739_foto.jpg' alt='img-user'/>
              </Avatar>
            </div>
              <Typography gutterBottom variant="headline" component="h2" style={{ textAlign: 'center', color: '#777777'}}>
                Alexandra
              </Typography>
              <Typography component="p" style={{ textAlign: 'center', color: '#777777'}}>
                Alvarez Muller
              </Typography>
              <div style={{textAlign: 'center',}}>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarBorderIcon />
              </div>
          </Grid>
          <ProjectSection
            title="Proyectos"
          >
            {!projects.length ?
              (
                <Alert
                  message="El diseñador aun no tiene proyectos asignados"
                />
              )
              :
              (
                <div className={classes.projectListWrapper}>
                  <List dense={false}>
                    {projects.map(project => (
                      <ProjectSelect
                        key={project.id}
                        designerid={designerid}
                        designer={designer}
                        projectid={project.id}
                        project={project}
                        history={history}
                      />
                    ))}
                  </List>
                </div>
              )
            }
          </ProjectSection>
        </Grid>
        {/* {deleteDialogOpen &&
          <ProjectDeleteDialog />
        } */}
      </div>
    </div>
  );
}

Project.propTypes = {
  classes: PropTypes.object.isRequired,
};


const mapDispatchToProps = {
  toggleProjectLockedDialog,
  toggleProjectDeleteDialog,
  displayDrawer,
};


const mapStateToProps = ({
  firestore,
  designer,
  projectDeleteDialog,
  projectLockedDialog,
  topbar,
}, { match }) => ({
  designer: (firestore.data.designers || {})[match.params.designerid],
  projects: firestore.ordered[`designers/${match.params.designerid}/projects`],
  deleteDialogOpen: projectDeleteDialog.open,
  lockedDialogOpen: projectLockedDialog.open,
  drawerOpen: topbar.drawerOpen,
});

export default compose(
  firestoreConnect(({ match }) => ([
    {
      collection: 'designers',
      doc: match.params.designerid,
    },
    {
      collection: `designers/${match.params.designerid}/projects`,
    }
  ])),
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
)(Project);
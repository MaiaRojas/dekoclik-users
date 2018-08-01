import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import {
  resetProjectLockedDialog,
  toggleProjectLockedDialog,
} from '../reducers/project-locked-dialog';


const styles = theme => ({
  root: {
    color: theme.palette.text.primary,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  textField: {
    margin: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2,
  },
  dateField: {
    margin: theme.spacing.unit,
    width: 200,
  },
});


class ProjectLockedDialog extends React.Component {
  // shouldComponentUpdate({ isInProgress, cohortKey }) {
  //   return !(isInProgress && cohortKey);
  // }

  render() {
    const { classes, ...props } = this.props;
    console.log(...props);
    return (
      <div className={classes.container}>
        <Dialog open={props.open} onClose={props.toggleProjectLockedDialog}>
          <DialogTitle>
            Desea bloquear este projecto?
          </DialogTitle>
          <DialogActions>
            <Button onClick={props.toggleProjectLockedDialog} color="default">
              No
            </Button>
            <Button
              variant="raised"
              color="primary"
              onClick={() => {
                conole.log('bloqueado')
                // return props.firebase.firestore()
                //   .doc(`designers/${props.designerid}/projects/${props.projectid}`)
                //   .delete()
                //   .then(props.resetProjectLockedDialog, console.error)
                //   .catch(console.error)
              }}
            >
              Si
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}


ProjectLockedDialog.propTypes = {

};


const mapStateToProps = ({ firestore, projectLockedDialog }) => ({
  projects: (firestore.data.projects === null) ? {} : firestore.data.projects,
  open: projectLockedDialog.open,
});


const mapDispatchToProps = {
  toggleProjectLockedDialog,
  resetProjectLockedDialog,
};


export default compose(
  firestoreConnect(() => ['projects']),
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
)(ProjectLockedDialog);

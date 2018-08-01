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
import Switch from 'material-ui/Switch';
import {
  resetProjectDeleteDialog,
  toggleProjectDeleteDialog,
} from '../reducers/project-delete-dialog';


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


class ProjectDeleteDialog extends React.Component {
  // shouldComponentUpdate({ isInProgress, cohortKey }) {
  //   return !(isInProgress && cohortKey);
  // }

  render() {
    const { classes, ...props } = this.props;
    console.log(...props);
    return (
      <div className={classes.container}>
        <Dialog open={props.open} onClose={props.toggleProjectDeleteDialog}>
          <DialogTitle>
            Desea eliminar al diseñador?
          </DialogTitle>
          <DialogActions>
            <Button onClick={props.toggleProjectDeleteDialog} color="default">
              No
            </Button>
            <Button
              variant="raised"
              color="primary"
              onClick={() => {
                return props.firebase.firestore()
                  .doc(`designers/${props.designerid}/projects/${props.projectid}`)
                  .delete()
                  .then(props.resetProjectDeleteDialog, console.error)
                  .catch(console.error)
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


ProjectDeleteDialog.propTypes = {

};


const mapStateToProps = ({ firestore, projectDeleteDialog }) => ({
  projects: (firestore.data.projects === null) ? {} : firestore.data.projects,
  open: projectDeleteDialog.open,
});


const mapDispatchToProps = {
  toggleProjectDeleteDialog,
  resetProjectDeleteDialog,
};


export default compose(
  firestoreConnect(() => ['projects']),
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
)(ProjectDeleteDialog);

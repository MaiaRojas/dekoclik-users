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
  resetConfirmDialogOpen,
  toggleConfirmDialogOpen,
} from '../reducers/designer-confirm-dialog';


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


class DesignerConfirmDialog extends React.Component {

  render() {
    const { classes, ...props } = this.props;
    console.log(...props);
    return (
      <div className={classes.container}>
        <Dialog open={props.open} onClose={props.toggleConfirmDialogOpen}>
          <DialogTitle>
            Desea confirmar al diseñador?
          </DialogTitle>
          <DialogActions>
            <Button onClick={props.toggleConfirmDialogOpen} color="default">
              No
            </Button>
            <Button
              variant="raised"
              color="primary"
              onClick={() => {
                console.log('yes')
                // return props.firebase.firestore()
                //   .doc(`designers/${props.designerid}/projects/${props.projectid}`)
                //   .delete()
                //   .then(props.resetProjectDeleteDialog, console.error)
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


DesignerConfirmDialog.propTypes = {

};


const mapStateToProps = ({ firestore, confirmDialogOpen }) => ({
  projects: (firestore.data.projects === null) ? {} : firestore.data.projects,
  open: confirmDialogOpen.open,
});


const mapDispatchToProps = {
  toggleConfirmDialogOpen,
  resetConfirmDialogOpen,
};


export default compose(
  firestoreConnect(() => ['projects']),
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
)(DesignerConfirmDialog);

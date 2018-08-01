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
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {
  resetDesignerDetailDialog,
  toggleDesignerDetailDialog,
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


class DesignerDetailDialog extends React.Component {
  // shouldComponentUpdate({ isInProgress, cohortKey }) {
  //   return !(isInProgress && cohortKey);
  // }

  render() {
    const { classes, ...props } = this.props;
    console.log(...props);
    return (
      <div className={classes.container}>
        <Dialog open={props.open} onClose={props.toggleDesignerDetailDialog}>
          <DialogTitle>
            Desea eliminar al diseñador?
          </DialogTitle>
          <DialogContent>
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="Recipe" className={classes.avatar}>
                    R
                  </Avatar>
                }
                action={
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              />
              <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography component="p">
                  This impressive paella is a perfect party dish and a fun meal to cook together with
                  your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions className={classes.actions} disableActionSpacing>
                <IconButton aria-label="Add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="Share">
                  <ShareIcon />
                </IconButton>
                </CardActions>
            </Card>
          </DialogContent>
          <DialogActions>
            <Button onClick={props.toggleDesignerDetailDialog} color="default">
              No
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}


DesignerDetailDialog.propTypes = {

};


const mapStateToProps = ({ firestore, designerDetailDialog }) => ({
  projects: (firestore.data.projects === null) ? {} : firestore.data.projects,
  open: designerDetailDialog.open,
});


const mapDispatchToProps = {
  resetDesignerDetailDialog,
  toggleDesignerDetailDialog,
};


export default compose(
  firestoreConnect(() => ['projects']),
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
)(DesignerDetailDialog);

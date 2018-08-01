import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import CheckCircleIcon from 'material-ui-icons/CheckCircle';
import { toggleConfirmDialogOpen } from '../reducers/designer-confirm-dialog';
import { displayDrawer } from '../reducers/top-bar';
import { tootgleDetailDesignerDialog } from '../reducers/designer-detail-dialog';

const styles = theme => ({
  root: {
    boxShadow: 'none',
  },
  card: {
    width: '20%',
    marginBottom: theme.spacing.unit * 4,
    borderBottom: 0,
    boxShadow: 'none',
    [theme.breakpoints.down('md')]: {
      width: '50%',
    },
  },
  cardClose: {
    width: '20%',
    marginBottom: theme.spacing.unit * 4,
    [theme.breakpoints.down('md')]: {
      width: '50%',
    },
  },
  cardActions: {
    flexWrap: 'wrap',
    padding: theme.spacing.unit,
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',

  },
  countText: {
    display: 'inline-block',
    fontWeight: 500,
    fontSize: '0.8rem',
  },
  cardContent: {
    backgroundColor: '#4C4C4C',
    minHeight: '200px',
    width:'200px',
    [theme.breakpoints.down('md')]: {
      minHeight: '150px',
      width: '150px',
    },
    [theme.breakpoints.up('xs')]: {
      minHeight: '180px',
      width: '180px',
    }
  },
  cardDesigner: {
    boxShadow: 'none',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyConten: 'center',
    alignItems: 'center',
    padding: '10px',
  },
  sbmtView: {
    color: '#FF5D51',
    border: '2px solid #FF5D51',
    fontSize: '16px',
    lineHeight: '24px',
    borderRadius: '5px',
    backgroundColor: '#fff',
    '&:hover': {
      color: 'white',
      backgroundColor: '#FF5D51 !important',
    }
  },
});


const DesignerCardChange = props => (
  <Card className={props.classes.cardDesigner}>
      <CheckCircleIcon style={{position: 'absolute', left: '22px',}}/>
    <CardMedia
      className={props.classes.media}
      image="/img/designer.jpeg"
      title="Contemplative Reptile"
    />
    <CardContent className={props.classes.cardContent}>
    </CardContent>
    <CardActions className={props.classes.cardActions}>
      <Typography variant="title">
        {props.designer.name}
      </Typography>
      <Button className={props.classes.sbmtView}
        size="small"
        variant="raised"
        color="primary"
        onClick={ props.tootgleDetailDesignerDialog }
        // onClick={props.toggle}
        // onClick={() => props.history.push(`/designers/${props.designer.id}`)}
      >
        Ver Perfil
      </Button>
    </CardActions>
  </Card>
);


DesignerCardChange.propTypes = {

};


DesignerCardChange.defaultProps = {
  progress: undefined,
  drawerOpen: undefined,
};

const mapStateToProps = ({
  topbar,
  confirmDialogOpen,
  designerDetailDialog,
}) => ({
  drawerOpen: topbar.drawerOpen,
  confirmDialogOpen: confirmDialogOpen.open,
  designerDetailDialog: designerDetailDialog.open,
});

const mapDispatchToProps = {
  displayDrawer,
  toggleConfirmDialogOpen,
  tootgleDetailDesignerDialog
};


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
)(DesignerCardChange);

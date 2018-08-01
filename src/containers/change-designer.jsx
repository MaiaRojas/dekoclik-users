import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import { firestoreConnect } from 'react-redux-firebase';
import { FormattedMessage } from 'react-intl';
import IconButton from 'material-ui/IconButton';
import DetailsIcon from 'material-ui-icons/Details';
import Typography from 'material-ui/Typography';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import TopBar from '../components/top-bar';
import Alert from '../components/alert';
import { displayDrawer } from '../reducers/top-bar';
import DesignerCardChange from '../components/designer-card-change';
import Loader from '../components/loader';
import { toggleConfirmDialogOpen } from '../reducers/designer-confirm-dialog';
import { tootgleDetailDesignerDialog } from '../reducers/designer-detail-dialog';
import DesignerConfirmDialog from '../components/designer-confirm-modal-open';
import DesignerDetailDialog from '../components/designer-detail-modal-button';

const drawerWidth = 320;
const styles = theme => ({
  root: {
    width: '100%',
  },
  paper: {
      margin: '10px',
      boxShadow: 'none',
  },
  appBar: {
    width: 0,
    zIndex: 1,
    overflow: 'hidden',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up('md')]: {
      width: 0,
      overflow: 'hiden',
    },
  },
  appBarShift: {
    width: '100vh',
    borderRight:'1px solid rgba(1,1,1,0.1)',
    overflow: 'visible',
    backgroundColor: 'white',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.up('md')]: {
      width: '100%',
      maxWidth: '400px',
    },
  },
  appBarContainer: {
    width: '100%',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth})`,
      overflow: 'hiden',
    },
  },
  appBarShiftContainer: {
    width: '100%',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.up('md')]: {
      width: '100%',
      overflow: 'hiden',
    },
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    padding: '10px',
  },
  constainer: {
      backgroundColor: 'white',
      position: 'absolute',
      width: '100%',
      [theme.breakpoints.up('sm')]: {
          position: 'initial',
      },
  },
  titleContainer: {
    padding: '23px',
    fontSize: '2.5rem',
  },
  titleFilter: {
    padding: '30px',
    borderBottom: '1px solid rgba(1,1,1,.1)',
  },
});


const ChangeDesigner = (props) => {
  console.log('ChangeDesigner', props);
  const {
    designers,
    auth,
    history,
    profile,
    drawerOpen,
    classes,
    firebase,
    match,
  } = props;

  return (
  <div className="designers">
    <TopBar
      title="Desiñadores"
      firebase={firebase}
      history={history}
    >
      <IconButton
        aria-label="open drawer"
        onClick={() => props.displayDrawer()}
      >
        <DetailsIcon />
      </IconButton>
    </TopBar>
      {!designers && <Loader />}
      {designers && !designers.length && (
        <div
          position="absolute"
          className={classNames(classes.appBar, drawerOpen && classes.appBarShift)}
        >
          <Alert message={<FormattedMessage id="courses.noCoursesWarning" />} />
        </div>
      )}

    <div
      position="absolute"
      style={{ display: 'flex', marginTop: '90px', flexDirection: 'column'}}
    >
      <div className={classes.constainer}>
        <Typography variant="title" className={classes.titleContainer}>Elige un diseñador</Typography>
        <div className={classes.container}>
          {designers && designers.length > 0 && (
            [...designers].reverse().map(designer => (
              // console.log(designer)
              <DesignerCardChange
                drawerOpen={drawerOpen}
                key={designer.id}
                designer={designer}
                projectid={match.params}
                auth={auth}
                profile={profile}
                history={history}
              />
            ))
          )}
        </div>
      </div>
      <Button
        onClick={props.toggleConfirmDialogOpen}
      >
        Confirmar diseñador elegido
      </Button>
      {props.confirmDialogOpen &&
        <DesignerConfirmDialog

        />
      }
      {props.designerDetailDialog &&
        <DesignerDetailDialog

        />
      }
    </div>
  </div>
)};


ChangeDesigner.propTypes = {

};


ChangeDesigner.defaultProps = {
  designers: undefined,
  drawerOpen: undefined,
};

const mapStateToProps = ({
  topbar,
  confirmDialogOpen,
  designerDetailDialog
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
  firestoreConnect(( ) => [{
    collection: `designers`,
  }]),
  connect(({ firestore }, { auth }) => ({
    designers: firestore.ordered[`designers`],
  })),
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
)(ChangeDesigner);
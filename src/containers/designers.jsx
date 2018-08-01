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
import TopBar from '../components/top-bar';
import Alert from '../components/alert';
import { displayDrawer } from '../reducers/top-bar';
import DesignerCard from '../components/designer-card';
import Loader from '../components/loader';
import FilterList from '../components/list-filter';


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


const Designers = (props) => {
  const {
    designers,
    auth,
    history,
    profile,
    drawerOpen,
    classes,
    firebase,
  } = props;

  return (
  <div className="designers">
    <TopBar
      title="Diseñadores"
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
      // position="absolute"
      style={{ display: 'flex', marginTop: '90px'}}
    >
      <div
        className={
          classNames(classes.appBar, drawerOpen && classes.appBarShift)}
      >
        <Typography variant="title" className={classes.titleFilter}>Filtros</Typography>
        <div style={{ overflow: 'hiden' }}>
          <FilterList title={'Estado'} filters={['No empezado', 'En proceso', 'Finalizado' ]} />
          <FilterList title={'Paquete'} filters={['Clasico', 'Premiun', 'Exclusivo' ]} />
          <FilterList title={'Estilo'} filters={['Moderno', 'Eclectico', 'Comtemponbareo', 'Clasico' ]} />
          <FilterList title={'Tiempo'} filters={['2 Días', '5 Días', '8 Dias', '15 Días' ]} />
        </div>
      </div>
      <div className={classes.constainer}>
        <Typography variant="title" className={classes.titleContainer} >Diseñadores</Typography>
        <div className={classes.container}>
          {designers && designers.length > 0 && (
            [...designers].reverse().map(designer => (
              <DesignerCard
                drawerOpen={drawerOpen}
                key={designer.id}
                designer={designer}
                auth={auth}
                profile={profile}
                history={history}
              />
            ))
          )}
        </div>
      </div>
    </div>
  </div>
)};


Designers.propTypes = {

};


Designers.defaultProps = {
  designers: undefined,
  drawerOpen: undefined,
};

const mapStateToProps = ({ topbar }) => ({
  drawerOpen: topbar.drawerOpen,
});

const mapDispatchToProps = {
  displayDrawer,
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
)(Designers);
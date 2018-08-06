import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Intl from '../intl';
import WrappedRoute from '../components/wrapped-route';
import ScrollToTop from '../components/scroll-to-top';
import SignIn from './signin';
import Dashboard from './dashboard';
import Projects from './projects';

import Packet from './packet';
import Why from './why';

import ChangeDesigner from './change-designer';
import Loader from '../components/loader';
import Project from './project';
import Customer from './customer';

const App = (props) => {
  if (!props.auth.isLoaded || !props.profile.isLoaded) {
    console.log('no esta auntenticado');
    return (<Loader />);
  }
  console.log(props)
  return (
    <Intl {...props}>
      <Router>
        {props.auth.isEmpty
          ? (
            <Route
              path="/:action?"
              component={SignIn}
              authError={props.authError}
            />
          )
          : (
            <ScrollToTop>
              <Switch>
                {/* <WrappedRoute path="/designers/:designerid/projects/:projectid/why" component={Why} {...props} />
                <WrappedRoute path="/designers/:designerid/projects/:projectid" component={Packet} {...props} /> */}
                <WrappedRoute path="/customer/:projectid" component={Project} {...props} />
                <WrappedRoute path="/customer" component={Customer} {...props} />
                <WrappedRoute path="/projects/:projectid/designers" component={ChangeDesigner} {...props} />
                <WrappedRoute path="/projects" component={Projects} {...props} />
                <WrappedRoute exact path="/" component={Dashboard} {...props} />
              </Switch>
            </ScrollToTop>
          )
        }
      </Router>
    </Intl>
  );
};


App.propTypes = {
  auth: PropTypes.shape({
    isLoaded: PropTypes.bool,
    isEmpty: PropTypes.bool,
  }),
  authError: PropTypes.shape({
    code: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }),
  profile: PropTypes.shape({
    isLoaded: PropTypes.bool,
  }),
};


App.defaultProps = {
  auth: undefined,
  authError: undefined,
  profile: {},
};


const mapStateToProps = ({ firebase: { authError, auth, profile } }) => ({
  authError,
  auth,
  profile,
});


export default compose(
  firestoreConnect(),
  connect(mapStateToProps),
)(App);


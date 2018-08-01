import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import ErrorIcon from 'material-ui-icons/Error';
import DoneIcon from 'material-ui-icons/Done';
import red from 'material-ui/colors/red';
import green from 'material-ui/colors/green';
import { createMuiTheme } from '@material-ui/core/styles';

const apiErrorMessages = {
  'auth/wrong-password': 'Tu correo o contraseña son incorrectos.',
  'auth/user-not-found': 'No hay ninguna cuenta asociada a este correo.',
  'auth/too-many-requests': 'Se han bloqueado todas las consultas desde este dispositivo debido a actividad inusual. Prueba otra vez más tarde.',
  'auth/network-request-failed': 'A network error (such as timeout, interrupted connection or unreachable host) has occurred.',
};


const styles = theme => ({
  results: {
    position: 'absolute',
    marginBottom: theme.spacing.unit * 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    verticalAlign: 'text-bottom',
    width: '300px',
    [theme.breakpoints.up('sm')]: {
      width: '300px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '250px',
    },
  },
  error: {
    color: red[500],
  },
  success: {
    color: green[500],
  },
  errorIcon: {
    position: 'absolute',
  },
  successIcon: {
    position: 'absolute',
  },
  resultsMessage: {
    marginLeft: theme.spacing.unit * 4,
  },
});


const getError = (authError, forgot, forgotResult, signupError, signinError) => {
  if (!forgot && authError && authError.code) {
    return authError;
  }
  if (forgot && forgotResult && forgotResult.error && forgotResult.error.code) {
    return forgotResult.error;
  }
  if (!forgot && signupError && signupError.code) {
    return signupError;
  }
  if (!forgot && signinError && signinError.code) {
    return signinError;
  }
  return null;
};


const SignInResults = ({
  authError,
  forgot,
  forgotResult,
  signupError,
  signinError,
  classes,
}) => {
  const error = getError(authError, forgot, forgotResult, signupError, signinError);

  if (!error && (!forgot || !forgotResult || !forgotResult.success)) {
    return null;
  }

  let statusClassName = classes.success;
  let Icon = DoneIcon;
  let iconClassName = classes.successIcon;
  let message = 'Te hemos enviado un correo con un link para restaurar tu contraseña.';

  if (error) {
    statusClassName = classes.error;
    Icon = ErrorIcon;
    iconClassName = classes.errorIcon;
    message = apiErrorMessages[error.code] || error.message || error;
  }

  return (
    <div className={`${classes.results} ${statusClassName}`}>
      <Icon className={iconClassName} />
      <Typography className={classes.resultsMessage}>
        {message}
      </Typography>
    </div>
  );
};


SignInResults.propTypes = {
  forgot: PropTypes.bool.isRequired,
  forgotResult: PropTypes.shape({}),
  authError: PropTypes.shape({
    code: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }),
  signupError: PropTypes.shape({}),
  signinError: PropTypes.shape({}),
  classes: PropTypes.shape({
    results: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
    success: PropTypes.string.isRequired,
    errorIcon: PropTypes.string.isRequired,
    successIcon: PropTypes.string.isRequired,
    resultsMessage: PropTypes.string.isRequired,
  }).isRequired,
};


SignInResults.defaultProps = {
  authError: undefined,
  forgotResult: undefined,
  signupError: undefined,
  signinError: undefined,
};


export default withStyles(styles)(SignInResults);

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { FormattedMessage } from 'react-intl';
import Progress from './progress';


const styles = theme => ({
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
    alignItems: 'flex-start',
    paddingTop: '0',
  },
  countTitle: {
    display: 'inline-block',
    fontWeight: 500,
    fontSize: '1.2rem',
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
});


const ProjectCard = props => (
  <Card
    to={`/projects/${props.project.id}`}
    component={Link}
    style ={{ width: '33%' }}
  >
    <CardContent className={props.classes.cardContent}>
      <Typography variant="title" style={{ fontSize: '1.2rem', lineHeight: '1.5rem' }}>
        {props.project.title}
      </Typography>
    </CardContent>
    <Progress style={{ bordeRadius: '5px', margin: '5px 0'}} value={53} />
    <CardActions className={props.classes.cardActions}>
      <Typography className={props.classes.countTitle}>
        Paquete Clásico
      </Typography>
      <Typography className={props.classes.countText}>
        Ambiente: Sala
      </Typography>
    </CardActions>
  </Card>
);


ProjectCard.propTypes = {

};


ProjectCard.defaultProps = {
  progress: undefined,
  drawerOpen: undefined,

};

const mapStateToProps = ({ topbar }) => ({
  drawerOpen: topbar.drawerOpen,
});


export default withStyles(styles)(ProjectCard);

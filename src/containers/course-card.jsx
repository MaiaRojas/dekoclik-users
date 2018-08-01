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
        width: '32%',
        marginBottom: theme.spacing.unit * 4,
        borderBottom: 0,
        boxShadow: theme.shadow,
        [theme.breakpoints.down('md')]: {
            width: '100%',
        },
    },
    cardClose: {
        width: '49%',
        marginBottom: theme.spacing.unit * 4,
        [theme.breakpoints.down('md')]: {
            width: '100%',
        },
    },
    cardActions: {
        flexWrap: 'wrap',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px`,
        position: 'relative',
    },
    countText: {
        display: 'inline-block',
        fontWeight: 500,
        fontSize: '0.8rem',
    },
    cardContent: {
        backgroundColor: theme.palette.primary.main,
        minHeight: '60px',
    },
    cardText: {
        margin: '24px',
        height: '70px',
    },
    title: {
        fontSize: '1.2rem',
        lineHeight: '1.5rem',
    },
});

const getSummary = (elem) => {
    const newSummary = elem.slice(0, 130).split('').reverse().join('');
    return newSummary.slice(newSummary.search(' ')).split('').reverse().join('');
};

const CourseCard = props => (
    <Card
        className={
            classNames(props.classes.card, props.drawerOpen && props.classes.cardClose)
        }
        to={`/cohorts/${props.cohort}/courses/${props.course.id}`}
        component={Link}
    >
        <CardContent className={props.classes.cardContent}>
            <Typography variant="title" className={props.classes.title}>
                {props.course.title}
            </Typography>
        </CardContent>
        <Progress value={(props.progress && props.progress.percent) || 0} />
        <div className={props.classes.cardText}>
            <Typography
                paragraph
                component="p"
                dangerouslySetInnerHTML={{ __html: `${getSummary(props.course.description)}...` }}
            />
        </div>
        <CardActions className={props.classes.cardActions}>
            {props.course.stats && props.course.stats.unitCount && (
                <Typography className={props.classes.countText}>
                    <FormattedMessage
                        id="course-card.units"
                        values={{ count: props.course.stats.unitCount }}
                    />
                </Typography>
            )}
            <Typography className={props.classes.countText}>|</Typography>
            {props.course.stats && props.course.stats.durationString &&
            <Typography className={props.classes.countText}>
                {props.course.stats.durationString}
            </Typography>
            }
        </CardActions>
    </Card>
);


CourseCard.propTypes = {
    course: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        stats: PropTypes.shape({
            durationString: PropTypes.string.isRequired,
            unitCount: PropTypes.number.isRequired,
        }),
    }).isRequired,
    cohort: PropTypes.string.isRequired,
    progress: PropTypes.shape({
        percent: PropTypes.number.isRequired,
    }),
    classes: PropTypes.shape({
        card: PropTypes.string.isRequired,
        cardActions: PropTypes.string.isRequired,
        countText: PropTypes.string.isRequired,
        cardContent: PropTypes.string.isRequired,
        cardClose: PropTypes.string.isRequired,
        cardText: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
    drawerOpen: PropTypes.bool,
};


CourseCard.defaultProps = {
    progress: undefined,
    drawerOpen: undefined,

};

const mapStateToProps = ({ topbar }) => ({
    drawerOpen: topbar.drawerOpen,
});


export default compose(
    firestoreConnect(props => [{
        collection: `cohorts/${props.cohort}/users/${props.auth.uid}/progress`,
        doc: props.course.id,
    }]),
    connect(({ firestore }, { cohort, auth, course }) => ({
        progress: firestore.data[`cohorts/${cohort}/users/${auth.uid}/progress`]
            ? firestore.data[`cohorts/${cohort}/users/${auth.uid}/progress`][course.id]
            : undefined,
    })),
    connect(mapStateToProps),
    withStyles(styles),
)(CourseCard);
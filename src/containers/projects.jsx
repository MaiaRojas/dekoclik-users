import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { CircularProgress } from 'material-ui/Progress';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import DetailsIcon from 'material-ui-icons/Details';
import TopBar from '../components/top-bar';
import ProjectCard from '../components/project-card';
import { setProjectsCampusFilter, setProjectsProgramFilter } from '../reducers/projects';
import { displayDrawer } from '../reducers/top-bar';
import { parse as parseProjectId } from '../util/project';
import programs from '../util/programs';
import FilterList from '../components/list-filter';
import { SvgIcon } from '../../node_modules/@material-ui/core';
const drawerWidth = 250;
/*
const FilterIcon = (props) => (
    <SvgIcon {...props}>
        {
            <path xmlns="http://www.w3.org/2000/svg" d="m191.8,480.6v-174.3l-177.3-263.5c-7.2-8.3-4.1-31.1 16.9-31.8h449.2c12.2,0 27.7,14.4 16.9,31.8l-177.3,263.5v108.2c0,6.4-3,12.4-8.1,16.3l-87.6,66.1c-5,5.6-30.1,9.3-32.7-16.3zm-122-428.8l159.4,236.9c2.3,3.4 3.5,7.3 3.5,11.4v139.6l46.8-35.3v-104.3c0-4.1 1.2-8 3.5-11.4l159.2-236.9h-372.4z"/>
        }
    </SvgIcon>
);*/

const styles = theme => ({
    root: {
        width: '100%',
    },
    paper: {
        margin: '10px',
        boxShadow: 'none',
    },
    filterContainer: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    appBar: {
        width: 0,
        zIndex: 1,
        overflow: 'hidden',
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        })
    },
    appBarShift: {
        width: '100vh',
        borderRight: '1px solid rgba(1,1,1,0.1)',
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
    container: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
    },
    constainer: {
        backgroundColor: 'white',
        position: 'absolute',
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
    }
});


const parseDate = (str) => {
    const parts = str.split('-');
    return new Date(
        parseInt(parts[0], 10),
        parseInt(parts[1], 10) - 1,
        parseInt(parts[2], 10),
    );
};


const processProjects = ({
                             projects,
                         }) =>
    projects
        .reduce((memo, project) => [
            ...memo,
            {
                ...project,
                start: project && project.start ? parseDate(project.start) : new Date(),
                // courses: Object.keys(cohortCourses[project.id] || {}),
                // users: Object.keys(cohortUsers[project.id] || {}).length,
                // students: Object.keys(cohortUsers[project.id] || {})
                //   .filter(uid => cohortUsers[project.id][uid] === 'student')
                //   .length,
            },
        ], [])
        .sort((a, b) => {
            if (a.start < b.start) {
                return 1;
            }
            if (a.start > b.start) {
                return -1;
            }
            return 0;
        });


const Projects = (props) => {
    if (!props.projects) {
        return (<CircularProgress />);
    }

    const projects = processProjects(props);
    console.log(props);
    return (
        <div className={`projects ${props.classes.root}`}>
            <TopBar
                title="Projects"
                firebase={props.firebase}
                history={props.history}
            >
                <IconButton
                    aria-label="open drawer"
                    onClick={() => props.displayDrawer()}
                >   
                    <DetailsIcon className={props.classes.iconFilter}/>
                </IconButton>
            </TopBar>
            <div
                position="absolute"
                style={{ display: 'flex', marginTop: '90px'}}
            >
                <div
                    className={
                        classNames(props.classes.appBar, props.drawerOpen && props.classes.appBarShift)}
                >
                    <Typography className={props.classes.titleFilter} variant="title" >Filtros</Typography>
                    <div>
                        <FilterList title={'Estado'} filters={['No empezado', 'En proceso', 'Finalizado' ]} />
                        <FilterList title={'Paquete'} filters={['Clasico', 'Premiun', 'Exclusivo' ]} />
                        <FilterList title={'Estilo'} filters={['Moderno', 'Eclectico', 'Comtemponbareo', 'Clasico' ]} />
                        <FilterList title={'Tiempo'} filters={['2 Días', '5 Días', '8 Dias', '15 Días' ]} />
                    </div>
                </div>
                <div className={props.classes.constainer}>
                    <Typography   className={props.classes.titleContainer} variant="title" >Proyectos</Typography>
                    <div className={props.classes.container}>
                        {projects.map(project => (
                            <Paper key={project.id} className={props.classes.paper}>
                                <ProjectCard
                                    key={project.id}
                                    project={project.id}
                                    project={project}
                                />
                            </Paper>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};


Projects.propTypes = {

};


Projects.defaultProps = {
    projects: undefined,
    campuses: undefined,
    estadoFilter: '',
    programFilter: '',
    drawerOpen: undefined,
};


const filterProjects = (projects, filters) => {
    if (!projects || !projects.length) {
        return projects;
    }

    return projects.reduce((memo, project) => {
        const parsed = parseProjectId(project.id);
        if (filters.campus && filters.campus !== parsed.campus) {
            return memo;
        }
        if (filters.program && filters.program !== parsed.program) {
            return memo;
        }
        return memo.concat({ ...project, ...parsed });
    }, []);
};


const mapStateToProps = ({
                             firestore, projects, projectNewDialog, topbar,
                         }) => ({
    projects: filterProjects(firestore.ordered.projects, {
        campus: projects.campusFilter,
        program: projects.programFilter,
    }),
    campuses: firestore.ordered.campuses,
    estadoFilter: projects.estadoFilter,
    programFilter: projects.programFilter,
    // newDialogOpen: projectNewDialog.open,
    drawerOpen: topbar.drawerOpen,
});


const mapDispatchToProps = {
    // toggleProjectNewDialog,
    setProjectsCampusFilter,
    setProjectsProgramFilter,
    displayDrawer,
};


export default compose(
    firestoreConnect(() => ['projects', 'campuses']),
    connect(mapStateToProps, mapDispatchToProps),
    withStyles(styles),
)(Projects);

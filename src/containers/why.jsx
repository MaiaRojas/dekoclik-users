import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import IconButton from 'material-ui/IconButton';
import AddIcon from 'material-ui-icons/Add';
import TopBar from '../components/top-bar';

const styles = theme => ({
  root: {
    color: '#FF5D51',
    '&$checked': {
      color: '#FF5D51',
    }
  },
  button: {
    margin: theme.spacing.unit,
    border: '2px solid #FF5D51',
    color: '#FF5D51',
    backgroundColor: 'white',
    display: 'block',
    marginTop: 50,
  },
});

class Why extends React.Component {
  state = {
    check1: false,
    check2: false,
    check3: false,
    check4: false,
    check5: false,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;
    console.log('why', this.props);
    const { projectid } = this.props.match.params;
    console.log(projectid)
    return (
      <div>
        <TopBar title="project">
          {/* <IconButton onClick={props.toggleProjectNewDialog}>
            <AddIcon />
          </IconButton> */}
        </TopBar>
        <div style={{marginLeft: 150}}>
          <Typography gutterBottom variant="display2" component="display2" style={{color: '#777777',marginTop: 30, marginBottom: 40}}>
            ¿Por qué?
          </Typography>
          <FormControl component="fieldset">
            <FormGroup>
              <FormControlLabel control={ <Checkbox checked={this.state.check1} onChange={this.handleChange( 'check1')} value="check1"
                classes={{ root: classes.root, checked: classes.checked, }} /> } label="Neque porro quisqan est qui dolorem ipsum quia dolor" />
              <FormControlLabel control={ <Checkbox checked={this.state.check2} onChange={this.handleChange( 'check2')} value="check2"
                classes={{ root: classes.root, checked: classes.checked, }} /> } label="Neque porro quisqan est qui dolorem ipsum quia dolor" />
              <FormControlLabel control={ <Checkbox checked={this.state.check3} onChange={this.handleChange( 'check3')} value="check3"
                classes={{ root: classes.root, checked: classes.checked, }} /> } label="Neque porro quisqan est qui dolorem ipsum quia dolor" />
              <FormControlLabel control={ <Checkbox checked={this.state.check4} onChange={this.handleChange( 'check4')} value="check4"
                classes={{ root: classes.root, checked: classes.checked, }} /> } label="Neque porro quisqan est qui dolorem ipsum quia dolor" />
              <FormControlLabel control={ <Checkbox checked={this.state.check5} onChange={this.handleChange( 'check5')} value="check5"
                classes={{ root: classes.root, checked: classes.checked, }} /> } label="Neque porro quisqan est qui dolorem ipsum quia dolor" />
            </FormGroup>
          </FormControl>
          <Button
            variant="contained"
            className={classes.button}
            onClick={() => {
              this.props.history.push(`/projects/${projectid}/designers`)
            }}
          >
            Enviar
          </Button>
        </div>
      </div>
    );
  }
}

Why.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Why);
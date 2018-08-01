import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from 'material-ui/IconButton';
import AddIcon from 'material-ui-icons/Add';
import TopBar from '../components/top-bar';
import PacketInfo from '../components/packet-info';

const styles = theme => ({
  divUser: {
    backgroundColor: '#eeeeee',
    height: '100vh'
  },
  divProject: {
    backgroundColor: 'white',
    height: '100%',
  },
  root: {
    flexGrow: 1,
  },
  bigAvatar: {
    width: 200,
    height: 201,
    marginTop: 190
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Packet = (props) => {
  const { classes } = props;
  // console.log('Entro a PACKET', props)
   const { designerid, projectid } = props.match.params;
  return (
    <div >
    <TopBar title="project">
        {/* <IconButton onClick={this.handleClickOpen}>
          <SettingsIcon />
        </IconButton> */}
    </TopBar>
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={5} className={classes.divUser}>
          <div className={classes.flex}>
            <Avatar style={{ border: '5px solid white'}} className={classes.bigAvatar}>
              <img src='https://www.coam.org/media_arquitectos/18739_foto.jpg' alt='img-user'/>
            </Avatar>
          </div>
            <Typography gutterBottom variant="headline" component="h2" style={{ textAlign: 'center', color: '#777777'}}>
              Alexandra
            </Typography>
            <Typography component="p" style={{ textAlign: 'center', color: '#777777'}}>
              Alvarez Muller
            </Typography>
        </Grid>
        <Grid item xs={7} className={classes.divProject}>
          <PacketInfo className={classes.packetInfo}
            designerid={designerid}
            projectid={projectid}
            history={props.history}
          />
        </Grid>
      </Grid>
    </div>
    </div>
  );
}

Packet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Packet);
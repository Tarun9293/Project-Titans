import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './Styles'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';



function Play() {
  const classes = useStyles();
  const {push}=useHistory()
    return (
      <div className={classes.root}>
                <Grid container spacing={3} xs={12}>
                    <Grid item xs={12}>
                        {/* <h1>Choose the section to kickstart!!!</h1> */}
                        <Paper className={classes.paper} style={{backgroundColor: 'transparent',boxShadow: 'none'}}>   
                        <Button variant="contained" color="primary"
                            className={classes.button}
                            onClick={() => push(`/${'General'}`)} style={{ color: 'black', opacity: '1' }}>General</Button>

                        <Button variant="contained" color="primary"
                            className={classes.button}
          
          onClick={() => push(`/${'worldcup'}`)} style={{ color: 'black', opacity: '1' }}>WorldCup</Button>
          </Paper>
  </Grid>
  </Grid>

      </div>
      );
}

export default Play
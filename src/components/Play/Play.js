import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 40,
      width: 100,
      textAlign: 'center',
      lineHeight: '3'
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

function Play() {
  const classes = useStyles();
  const {push}=useHistory()
    return (
        <React.Fragment>
          <CssBaseline />
            <Container maxWidth="sm">
                <Grid container justify="center" spacing={8}>
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="baseline" style={{ marginTop: '30%' }}>
                        <h1>Choose the section to kickstart!!!</h1>
                            
                        <Button variant="contained" color="primary"
                            className={classes.paper}
                            onClick={() => push(`/${'General'}`)} style={{ color: 'black', opacity: '1' }}>General</Button></Grid>
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="baseline">
                        <Button variant="contained" color="primary"
                            className={classes.paper}
                            onClick={() => push(`/${'worldcup'}`)} style={{ color: 'black', opacity: '1' }}>WorldCup</Button></Grid>
                </Grid>
            </Container>
        </React.Fragment>
      );
}

export default Play
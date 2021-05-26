import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      color:'red'
    },
    content: {
        backgroundColor: '#ccffff', 
        height: '100vh'
    }
  }));

export default function FixedContainer() {
    const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed >
        <Typography component="div" className={classes.content} />
      </Container>
    </React.Fragment>
  );
}

import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import CardContentItem from './cardComponent'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      color:'red'
    },
    content: {
        backgroundColor: 'black', 
        height: '100vh'
    },
  }));

export default function FixedContainer(props) {
    const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
      <CardContentItem />
      </Container>
    </React.Fragment>
  );
}
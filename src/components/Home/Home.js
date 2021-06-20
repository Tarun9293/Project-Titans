import React from 'react';
import './Home.css'
import { Container, Grid, Paper} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



function Home() {
  const classes = useStyles();
  const {push}=useHistory()
  return (
    // <main>
    //   <Container maxWidth='md'  >
    //     <Grid container spacing={2} alignItems="center" justify="center" style={{ color: "white" }}>
    //       {/* <Grid item xs={12}> */}
    //         <Typography variant='h1'>
    //           <Grid item xs={6} style={{ width: "50px", height: "50px" }}>
    //             Play Quiz
    //           </Grid>
    //           <Grid item xs={6} style={{ width: "50px", height: "50px" }}>
    //             Create Quiz
    //           </Grid>
    //         </Typography>
    //       {/* </Grid> */}
    //     </Grid>
    //   </Container>
    // </main>

    <div className={classes.root}>
      <Grid container spacing={5}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="baseline"
          style={{ marginTop: "250px" }}
        >
          <Button variant="contained" color="primary"
            className={classes.paper} style={{ width: '190px', height: '80px', lineHeight: '45px', fontSize: '16px' }}
            onClick={() => push(`/${'Play'}`)} style={{ color: 'black', opacity: '1' }}>Play Quiz</Button>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="baseline"
          style={{ marginTop: "20px" }}
        >
          <Button variant="contained" color="primary"
            className={classes.paper} style={{ width: '190px', height: '80px', lineHeight: '45px', fontSize: '16px' }}
            onClick={() => push(`/${'text'}`)} style={{ color: 'black', opacity: '1' }}>Create Quiz</Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home

import React from 'react';
import './Home.css'
import { Container, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import useStyles from './Styles'


function Home() {
  const classes = useStyles();
  const { push } = useHistory()
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
      <Grid container spacing={3} xs={12}>
        <Grid item xs={12}       

          alignItems="baseline"
        ><Paper className={classes.paper} style={{backgroundColor: 'transparent',boxShadow: 'none'}}>
          <Button className={classes.button} variant="contained" color="primary"
            onClick={() => push(`/${'Play'}`)} style={{ color: 'white', opacity: '1' }}>Play Quiz</Button>
          <Button className={classes.button} variant="contained" color="primary"
           onClick={() => push(`/${'text'}`)} style={{ color: 'white', opacity: '1' }}>Create Quiz</Button>
           </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home

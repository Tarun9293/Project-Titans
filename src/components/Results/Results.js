
import { Container, Grid,Paper, Typography} from '@material-ui/core'
import React from 'react';
import useStyles from './Styles';
import {connect} from 'react-redux'



function Results({questions}) {
    const classes=useStyles();
    return (
      <main>
      <Container maxWidth='md'  >
      <Grid  container spacing={2} alignItems="center" justify="center"style={{ minHeight: "100vh" }}>
        <Grid item xs={12}>     
          <Paper className={classes.paper} alignItems="center" > 
          <Typography  className={classes.typo } variant='h5'>
              Your Quiz is Over ! 
            </Typography>
            <Typography  className={classes.typo } variant='h5'>
              Team A Score : {questions.scoreA}
            </Typography>
            <Typography  className={classes.typo } variant='h5'>
              Team B Score : {questions.scoreB}
            </Typography>
          </Paper>      
          </Grid>
          </Grid>
        </Container>
        </main>
    )
}


const mapStateToProps = (state)=>
{
  return{
    questions : state.general
  }
}

export default connect(mapStateToProps)(Results)

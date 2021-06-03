
import { Container, Grid,Paper} from '@material-ui/core'
import React ,{useState} from 'react';
import {connect} from 'react-redux'
import { fetchDataSuccess } from '../../redux/worldcup/worldCupActions';
import Questions from '../Questions/Questions'
import useStyles from './Styles';

function WorldCup({questions}) {

  const classes =useStyles();
  const [currQues,setCurrentQues]=useState(0)
  const [showAnswer,setShowAnswer]=useState(false)
    return (
      <main>
      <Container maxWidth='md'  >
      <Grid  container spacing={2} alignItems="center" justify="center"style={{ minHeight: "100vh" }}>
        <Grid item xs={12}>     
          <Paper className={classes.paper} alignItems="center" >
            <Questions
             questions={questions}
             currQues={currQues}
             setCurrentQues={setCurrentQues}
             showAnswer={showAnswer}
             setShowAnswer={setShowAnswer}
            />
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
    questions : state.worldCup
  }
}

const mapDispatchToProps =(dispatch)=>
{
  return{
    fetchData: ()=> dispatch(fetchDataSuccess())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(WorldCup)

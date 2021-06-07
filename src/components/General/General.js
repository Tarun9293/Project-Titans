
import { Container, Grid,Paper} from '@material-ui/core'
import React ,{useState,useEffect} from 'react';
import {connect} from 'react-redux'
import { fetchData} from '../../redux/worldcup/worldCupActions';
import Questions from '../Questions/Questions'
import useStyles from './Styles';
import CircularProgress from '@material-ui/core/CircularProgress';



function General({fetchData,questions}) {

  useEffect(() => {
    fetchData()
  },[])
  const classes =useStyles();
  const [currQues,setCurrentQues]=useState(0)
  const [showAnswer,setShowAnswer]=useState(false)
    return (
      <main>
      <Container maxWidth='md'  >
      <Grid  container spacing={2} alignItems="center" justify="center"style={{ minHeight: "100vh" }}>
        <Grid item xs={12}>    
          <Paper className={classes.paper} alignItems="center" >   
          {!questions.isLoading ?
          <Questions
          questions={questions}
          currQues={currQues}
          setCurrentQues={setCurrentQues}
          showAnswer={showAnswer}
          setShowAnswer={setShowAnswer}
          /> : <CircularProgress color="secondary"/>
          }
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

const mapDispatchToProps =(dispatch)=>
{
  return{
    fetchData: ()=> dispatch(fetchData())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(General)


import { Container, Grid,Paper} from '@material-ui/core'
import React ,{useState,useEffect} from 'react';
import {connect} from 'react-redux'
import { fetchData,increaseScoreA,increaseScoreB} from '../../redux/general/generalActions';
import Questions from '../Questions/Questions'
import useStyles from './Styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Timer from '../Timer';
import {Typography,Button } from '@material-ui/core'



function General({fetchData,questions,ScoreA,ScoreB}) {

  useEffect(() => {
    fetchData()
  },[])
  const classes =useStyles();
  const [currQues,setCurrentQues]=useState(0)
  const [showAnswer,setShowAnswer]=useState(false)
  const [checkAnswer, setCheckAnswer] = useState(false)
  const [timer, showTimer] = useState(false)
  const [timerStart, setTimerStart] = useState(false)

    return (
      <main>
      <Container >
      <Grid  container spacing={5} alignItems="center" justify="center" style={{ minHeight: "100vh" }}>
        <Grid item xs={12}>   
        {
          !questions.isLoading ?
        questions.data[currQues].id % 2===0 ?
        (       
        <Paper style={{backgroundColor: 'transparent',boxShadow: 'none',marginTop:'5%'}}>
          <Typography style={{color:'white',padding:'10px'}} variant='h3'>Team B</Typography>
        </Paper> 
        ) :  (<Paper style={{backgroundColor: 'transparent',boxShadow: 'none',marginTop:'5%'}}>
        <Typography style={{color:'white',padding:'10px'}} variant='h3'>Team A</Typography>
      </Paper> 
      ):null 
      }
                          
       <Paper className={classes.paper} >          
          {!questions.isLoading ?
          <Questions
          questions={questions}
          currQues={currQues}
          setCurrentQues={setCurrentQues}
          showAnswer={showAnswer}
          setShowAnswer={setShowAnswer}
          checkAnswer={checkAnswer}
          setCheckAnswer={setCheckAnswer}
          timer={timer}
          showTimer={showTimer}
          ScoreA={ScoreA}
          ScoreB={ScoreB}
          setTimerStart={setTimerStart}
          /> : <CircularProgress color="secondary"/>
          }
         </Paper>   
          <Paper style={{backgroundColor: 'transparent',boxShadow: 'none',marginTop:'5%'}}>
            {!timerStart?
          (<Button variant="contained" color="primary" className={classes.button}
          onClick={()=>{setTimerStart(true)}}
          >Start Timer</Button>):
            
            !timer ?
           <Timer questions={questions} checkAnswer={checkAnswer} 
           setCurrentQues={setCurrentQues} 
           currQues={currQues} timer={timer}
           showTimer={showTimer}
           setTimerStart={setTimerStart}
           />:null}
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
    fetchData: ()=> dispatch(fetchData()),
    ScoreA:()=>dispatch(increaseScoreA()),
    ScoreB:()=>dispatch(increaseScoreB())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(General)

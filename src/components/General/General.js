
import { Container, Grid,Paper} from '@material-ui/core'
import React ,{useState,useEffect} from 'react';
import {connect} from 'react-redux'
import { fetchData} from '../../redux/worldcup/worldCupActions';
import Questions from '../Questions/Questions'
import useStyles from './Styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Timer from '../Timer';
import {Typography } from '@material-ui/core'



function General({fetchData,questions}) {

  useEffect(() => {
    fetchData()
  },[])
  const classes =useStyles();
  const [currQues,setCurrentQues]=useState(0)
  const [showAnswer,setShowAnswer]=useState(false)
  const [checkAnswer, setCheckAnswer] = useState(false)
  const [timer, showTimer] = useState(false)

    return (
      <main>
      <Container >
      <Grid  container spacing={5} alignItems="center" justify="center" style={{ minHeight: "100vh" }}>
        <Grid item xs={12}>   
        {
          !questions.isLoading ?
        questions.data[currQues].id % 2==0 ?
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
          /> : <CircularProgress color="secondary"/>
          }
         </Paper>   
          <Paper style={{backgroundColor: 'transparent',boxShadow: 'none',marginTop:'5%'}}>
            {!timer ?
           <Timer questions={questions} checkAnswer={checkAnswer} 
           setCurrentQues={setCurrentQues} 
           currQues={currQues} timer={timer}
           showTimer={showTimer}
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
    fetchData: ()=> dispatch(fetchData())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(General)

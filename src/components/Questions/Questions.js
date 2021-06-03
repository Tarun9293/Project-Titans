import { Button, Typography } from '@material-ui/core'
import React,{useState} from 'react'
import useStyles from './Styles'


  function Questions({questions,currQues,setCurrentQues,showAnswer,setShowAnswer}) {
   const classes=useStyles();
   const [nextQuest,showNextQuest]=useState(false)
      if(showAnswer) {
        if(nextQuest)
        {
        return(
          <div>
         
            <Typography className={classes.typo }key={questions.data[currQues].id} variant='h5'>
              {questions.data[currQues].question}
            </Typography>  
             <Button className={classes.button} size="medium" variant="contained" color="primary" 
            onClick={()=>{showNextQuest(true);setShowAnswer(false)}}>Next Question</Button>
            <Button className={classes.button} size="medium" variant="contained" 
            color="primary" >Show Answer</Button> 
       
        </div>
        ) 
          }
        else {
          return(
          <div>
         
            <Typography className={classes.typo } key={questions.data[currQues].id} variant='h5'>
              {questions.data[currQues].answer}
            </Typography>  
             <Button className={classes.button}size="medium" variant="contained" color="primary" 
            onClick={()=>{showNextQuest(true);setCurrentQues(currQues+1);setShowAnswer(false);}}>Next Question</Button>
        
        </div>
        ) 
          }
      }  
        else  if (!showAnswer)
        {
          if(!nextQuest)
          {
        return(
          <div>
        
            <Typography className={classes.typo } key={questions.data[currQues].id}  variant='h5'>
              {questions.data[currQues].question}
            </Typography>  
            <Button className={classes.button} size="medium" variant="contained" color="primary" 
            onClick={()=>setCurrentQues(currQues+1)}>Next Question</Button>
            <Button className={classes.button} size="medium" variant="contained" 
            color="primary" onClick={()=>setShowAnswer(true)}>Show Answer</Button>
    
        </div>
        )
          }  
          else
          {
        return(
          <div>

            <Typography className={classes.typo } key={questions.data[currQues].id}variant='h5'>
              {questions.data[currQues].question}
            </Typography>  
            <Button className={classes.button} size="medium" variant="contained" color="primary" 
            onClick={()=>setCurrentQues(currQues+1)}>Next Question</Button>
            <Button className={classes.button} size="medium" variant="contained" 
            color="primary" onClick={()=>{setShowAnswer(true);showNextQuest(false);}}>Show Answer</Button>
 
        </div>
        )
          }  
        } 
}

export default Questions

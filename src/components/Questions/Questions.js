import { Button, Typography } from '@material-ui/core'
import React,{useState} from 'react'
import useStyles from './Styles'
import { useHistory } from "react-router";


  function Questions({questions,currQues,setCurrentQues,showAnswer,setShowAnswer}) {
   const classes=useStyles();
   const history = useHistory();
   const [nextQuest,showNextQuest]=useState(false)
    let length=questions.data.length

    function setValue(){
      if(currQues<length-1){
      setCurrentQues(currQues+1);
      }
      else{
        history.push("/Results");
      }
    }
    
    function setValue1(){
      if(currQues<length-1){
      showNextQuest(true);
      setCurrentQues(currQues+1);
      setShowAnswer(false);
      }
      else{
        history.push("/Results");
      }
    }
   

      if(showAnswer) {
        if(nextQuest)
        {
        return(
          <div>
         
            <Typography className={classes.typo }key={questions.data[currQues].id} variant='h5'>
            {questions.data[currQues].id}.{questions.data[currQues].question}
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
            onClick={setValue1}>Next Question</Button>
        
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
            {questions.data[currQues].id}.{questions.data[currQues].question}
            </Typography>  
            <Button className={classes.button} size="medium" variant="contained" color="primary" 
            onClick={setValue}>Next Question</Button>
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
            {questions.data[currQues].id}.{questions.data[currQues].question}
            </Typography>  
            <Button className={classes.button} size="medium" variant="contained" color="primary" 
            onClick={setValue}>Next Question</Button>
            <Button className={classes.button} size="medium" variant="contained" 
            color="primary" onClick={()=>{setShowAnswer(true);showNextQuest(false);}}>Show Answer</Button>
 
        </div>
        )
          }  
        } 
}

export default Questions

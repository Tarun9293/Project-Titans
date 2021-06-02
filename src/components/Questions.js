import { Button, CardContent, Typography } from '@material-ui/core'
import React,{useState} from 'react'
const typo = {
    color: 'white',
    marginBottom: 12,
    textAlign: 'left'

      }

const button = {
  display: 'auto',
  border: '2px solid green',
  borderStyle: 'solid',
  padding: '10px',
  marginTop: '100%',
  width: '40%',
  whiteSpace: 'nowrap',
  marginRight: '10px',
  marginLeft: '10px',
 
}

const next = {
  display: 'flex',
  border: '2px solid green',
  borderStyle: 'solid',
  padding: '10px',
 
  width: '100%',
  whiteSpace: 'nowrap',
  marginRight: '80%',
  marginLeft: '10px',
 
}

const ans = {
  display: 'flex',
  border: '2px solid green',
  borderStyle: 'solid',
  padding: '10px',
  
  width: '100%',
  whiteSpace: 'nowrap',
  marginRight: '80%',
  marginLeft: '10px',
 
}
  
function Questions({questions,currQues,setCurrentQues,showAnswer,setShowAnswer}) {
   
   
   

   const [nextQuest,showNextQuest]=useState(false)

   console.log(showAnswer)
   console.log(nextQuest)
   console.log(currQues)
      if(showAnswer) {
        if(nextQuest)
        {
        return(
          <div>
          <CardContent>
            <Typography key={questions.data[currQues].id} style={typo} variant='h5'>
              {questions.data[currQues].question}
            </Typography>  
             <Button style={button} size="medium" variant="contained" color="primary" 
            onClick={()=>{showNextQuest(true);setShowAnswer(false)}}>Next</Button>
            <Button style={ans} size="medium" variant="contained" 
            color="primary" >Show Answer</Button> 
        </CardContent>
        </div>
        ) 
          }
        else {
          return(
          <div>
          <CardContent>
            <Typography key={questions.data[currQues].id} style={typo} variant='h5'>
              {questions.data[currQues].answer}
            </Typography>  
             <Button style={next} size="medium" variant="contained" color="primary" 
            onClick={()=>{showNextQuest(true);setCurrentQues(currQues+1);setShowAnswer(false);}}>Next Question</Button>
        </CardContent>
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
          <CardContent>
            <Typography key={questions.data[currQues].id} style={typo} variant='h5'>
              {questions.data[currQues].question}
            </Typography>  
            <Button style={button} size="medium" variant="contained" color="primary" 
            onClick={()=>setCurrentQues(currQues+1)}>Next</Button>
            <Button style={button} size="medium" variant="contained" 
            color="primary" onClick={()=>setShowAnswer(true)}>Show Answer</Button>
        </CardContent>
        </div>
        )
          }  
          else
          {
        return(
          <div>
          <CardContent>
            <Typography key={questions.data[currQues].id} style={typo} variant='h5'>
              {questions.data[currQues].question}
            </Typography>  
            <Button style={button} size="medium" variant="contained" color="primary" 
            onClick={()=>setCurrentQues(currQues+1)}>Next</Button>
            <Button style={ans} size="medium" variant="contained" 
            color="primary" onClick={()=>{setShowAnswer(true);showNextQuest(false);}}>Show Answer</Button>
        </CardContent>
        </div>
        )
          }  
        } 
}

export default Questions

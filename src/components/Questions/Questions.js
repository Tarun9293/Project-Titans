import { Button, Typography } from '@material-ui/core'
import React, { useState,useReducer} from 'react'
import useStyles from './Styles'
import { useHistory } from "react-router";
import { Field, reduxForm } from 'redux-form';
import {renderTextField} from './textField'
import {connect} from 'react-redux'



const required =(value)=>
{
  if(!value || value==='')
  {
    return 'This field is required'
  }
  if(value && !/^\S+(?:\s+\S+)*$/i.test(value))
  {
    return 'No Leading/Trailing Spaces'
  }
  return undefined
}

const reducer=(state,action)=>
{
  switch(action)
  {
    case 'increaseScore':
      return state +1
      default:
        return state
  }
}

function Questions({ questions, currQues,showTimer,setCurrentQues,checkAnswer,setCheckAnswer,handleSubmit,valid}) {
  const classes = useStyles();
  const history = useHistory();
  const [answerValue, setanswerValue] = useState('')
  const [correctAnswer, setcorrectAnswer] = useState(false)
  
  const score=0
  let length = questions.data.length
  const [Totalscore,dispatch]=useReducer(reducer,score)
 
  function setPreviousQues() {
    if (currQues < length - 1) {
      setCurrentQues(currQues+1);
      setCheckAnswer(false);
      showTimer(false);
    }
    else {
      history.push('/Results');
      history.push(
        {
          customNameData : Totalscore
      });
    }
   
  }

  function setNextQuestion() {
    if (currQues < length - 1) {
      setCurrentQues(currQues + 1);
      showTimer(true);
      setTimeout(() => {  showTimer(false); }, 1);
    }
    else {
      history.push('/Results');
      history.push(
        {
          customNameData : Totalscore
      });
    }
  }

  const checkAnswerValue = () => {
    let currentAnswer = questions.data[currQues].answer.toLocaleLowerCase()
    let answer=currentAnswer.split(' ')
    console.log(answer)
    let storedAnswer=answerValue.toLocaleLowerCase()
    console.log(storedAnswer)
    let count=0;
    answer.forEach(value=>
      {
      if (value===storedAnswer) {
        console.log(value)
        console.log(storedAnswer)
       count=count + 1;
      }
    })
   console.log(count)
    if (count >  0) {
      setcorrectAnswer(true);
      setCheckAnswer(true);
      showTimer(true);
      dispatch('increaseScore')
    }
    else {
      setcorrectAnswer(false);
      setCheckAnswer(true);
      showTimer(true);
    }
  }



    return (
      <div>
        { !checkAnswer ? (
          <React.Fragment>
            <Typography className={classes.typo} key={questions.data[currQues].id[currQues]} variant='h5'>
              {questions.data[currQues].id}.{questions.data[currQues].question}
            </Typography>
            <form  onSubmit={handleSubmit}>
              <Field  onChange={(e) => setanswerValue(e.target.value)} 
              value={answerValue} 
              name="answer" 
              component={renderTextField} 
              validate={required}
              InputProps={{
                className: classes.input
              }}
              InputLabelProps={{
                className: classes.floatingLabelFocusStyle,
              }}
              />
              <Button disabled={!valid} className={classes.button} size="medium" variant="contained" color="primary"
                onClick={setNextQuestion}>Next Question</Button>
              <Button disabled={!valid} onClick={() => {
               checkAnswerValue();
               }} color="primary" 
               className={classes.button} 
               size="medium" type='submit ' 
               variant="contained">Check Answer</Button>            
            </form>
          </React.Fragment>
        ) :
          (correctAnswer ?
            <React.Fragment>
              <Typography className={classes.typoRight} variant='h5'>Your Answer is Right!</Typography>
              <Typography className={classes.typo} key={questions.data[currQues].id[currQues]} variant='h5'>
                {questions.data[currQues].answer}
              </Typography>
              <Button className={classes.button} size="medium" variant="contained" color="primary"
                onClick={setPreviousQues}>Next Question</Button>
            </React.Fragment>
            :
            <React.Fragment>
              <Typography className={classes.typoWrong} variant='h5'>Your Answer is Wrong!</Typography>
              <Typography className={classes.typo} key={questions.data[currQues].id[currQues]} variant='h5'>
                Correct Answer : {questions.data[currQues].answer}
              </Typography>
              <Button className={classes.button} size="medium" variant="contained" color="primary"
                onClick={setPreviousQues}>Next Question</Button>
            </React.Fragment>)
        }
      </div>
    )
  }
 
  Questions = reduxForm({
    form: 'answer',
    
    
  })(Questions);
  

  
export default Questions

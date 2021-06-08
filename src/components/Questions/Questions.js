import { Button, Typography } from '@material-ui/core'
import React, { useState} from 'react'
import useStyles from './Styles'
import { useHistory } from "react-router";
import TextField from '@material-ui/core/TextField';


function Questions({ questions, currQues, setCurrentQues}) {
  const classes = useStyles();
  const history = useHistory();
  const [answerValue, setanswerValue] = useState('')
  const [correctAnswer, setcorrectAnswer] = useState(false)
  const [checkAnswer, setCheckAnswer] = useState(false)
  const [score, setScore] = useState(0)
  let length = questions.data.length
  console.log(score)

  function setPreviousQues() {
    if (currQues < length - 1) {
      setCurrentQues(currQues+1);
      setCheckAnswer(false);
      setanswerValue('')
    }
    else {
      history.push('/Results');
      history.push(
        {
          customNameData : score
      });
    }
   
  }

  function setNextQuestion() {
    if (currQues < length - 1) {
      setCurrentQues(currQues + 1);
    }
    else {
      history.push('/Results');
      history.push(
        {
          customNameData : score
      });
    }
  }

  const checkAnswerValue = () => {
    let currentAnswer = questions.data[currQues].answer.toLocaleLowerCase()
    let storedAnswer=answerValue.toLocaleLowerCase()
    if (currentAnswer.includes(storedAnswer)) {
      setcorrectAnswer(true);
      setCheckAnswer(true);
      setScore(score+1);
    }
    else {
      setcorrectAnswer(false);
      setCheckAnswer(true);
    }
  }



    return (
      <div>
        { !checkAnswer ? (
          <React.Fragment>
            <Typography className={classes.typo} key={questions.data[currQues].id[currQues]} variant='h5'>
              {questions.data[currQues].id}.{questions.data[currQues].question}
            </Typography>
            <TextField
              className={classes.textField} id="standard-answer-input" label="Enter Answer here" type="text"
              value={answerValue}
              size="medium"
              variant="filled"
              autoComplete="off"
              InputProps={{
                className: classes.input
              }}
              InputLabelProps={{
                className: classes.floatingLabelFocusStyle,
              }}
              onInput={(e) => setanswerValue(e.target.value)}
            />
            <Button className={classes.button} size="medium" variant="contained" color="primary"
              onClick={setNextQuestion}>Next Question</Button>
            <Button className={classes.button} size="medium" variant="contained"
              color="primary" onClick={() => {
                checkAnswerValue();
              }}>Check Answer</Button>
          </React.Fragment>
        ) :
          (correctAnswer ?
            <React.Fragment>
              <Typography className={classes.typoRight} variant='h5'>Your Answer is Right!</Typography>
              <Typography className={classes.typo} key={questions.data[currQues].id[currQues]} variant='h5'>
                {questions.data[currQues].answer}
              </Typography>
              <Button className={classes.button} size="medium" variant="contained" color="primary"
                onClick={setPreviousQues}>Back</Button>
            </React.Fragment>
            :
            <React.Fragment>
              <Typography className={classes.typoWrong} variant='h5'>Your Answer is Wrong!</Typography>
              <Typography className={classes.typo} key={questions.data[currQues].id[currQues]} variant='h5'>
                Correct Answer : {questions.data[currQues].answer}
              </Typography>
              <Button className={classes.button} size="medium" variant="contained" color="primary"
                onClick={setPreviousQues}>Back</Button>
            </React.Fragment>)
        }
      </div>
    )
  }
 

export default Questions

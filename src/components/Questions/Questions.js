import { Button, Typography } from '@material-ui/core'
import React, { useState } from 'react'
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
  function setPreviousQues() {
    setCurrentQues(currQues);
    setCheckAnswer(false);
    setanswerValue('')
   
  }

  function setNextQuestion() {
    if (currQues < length - 1) {
      setCurrentQues(currQues + 1);
    }
    else {
      history.push("/Results");
    }
  }

  const checkAnswerValue = () => {

    let currentAnswer = questions.data[currQues].answer.toLocaleLowerCase()
    console.log(currentAnswer)
    let storedAnswer=answerValue.toLocaleLowerCase()
    console.log(storedAnswer)
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

  const TotalScore = React.createContext();

    return (
     //  <TotalScore.Provider  value={5}>
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
     //  </TotalScore.Provider>
    )
  }
 

export default Questions

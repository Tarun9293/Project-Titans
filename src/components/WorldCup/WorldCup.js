import React,{useState} from 'react';
import Card from '@material-ui/core/Card';
import {connect} from 'react-redux'
import { fetchDataSuccess } from '../../redux/worldcup/worldCupActions';
import Questions from '../Questions';
import { Button } from '@material-ui/core';


 const card = {
  backgroundColor: '#5d6cd7',
  border : '1px',
  borderStyle: 'solid',
  borderWidth : '3px',
  borderColor:'green',
  display:'flex',
  justifyContent:'center',
  height:'50%',
  width: '60%',
  marginTop: '10%',
  marginLeft: '20%' }

  

function WorldCup({questions}) {

  console.log(questions)
  const [currQues,setCurrentQues]=useState(0)
  const [showAnswer,setShowAnswer]=useState(false)
  return (
     <React.Fragment>
     <Card style={card}>
      <Questions 
      questions={questions}
      currQues={currQues}
      setCurrentQues={setCurrentQues}
      showAnswer={showAnswer}
      setShowAnswer={setShowAnswer}
      />

    </Card> 

    {/* {dataQues.data.map(value=>
    {
    return(
      <Button size="medium" variant="contained" color="inherit" onClick={()=>fetchDataSuccess()}style={button}>{value.id}</Button>
    )
    })
    } */}

     </React.Fragment>
  );
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
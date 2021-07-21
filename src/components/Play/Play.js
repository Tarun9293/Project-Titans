import React ,{useState,useEffect}from 'react';
import { fetchData,increaseScoreA,increaseScoreB} from '../../redux/general/generalActions';
import useStyles from './Styles'
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux'
import {useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './Play.css'



function Play({fetchData,questions,ScoreA,ScoreB}) {
  const classes = useStyles();
  const history=useHistory();
  useEffect(() => {
    fetchData()
  },[])
    return (
      <div>
        <Grid container spacing={3} xs={12}>
          <Grid item xs={12} alignItems="baseline" className="box">
            {/* <h1>Choose the section to kickstart!!!</h1> */}
          <div >
            <div className="polaroid">
              <div className="container">
                <p className="category" onClick={() => history.push('/Play/General')}>General</p>
              </div>
            </div>
            <div className="polaroid">
              <div className="container">
                <p className="category" onClick={() => history.push(`/${'General'}`)}>T20</p>
              </div>
            </div>
            <div className="polaroid">
              <div className="container">
                <p className="category" onClick={() => history.push(`/${'General'}`)}>Worldcup</p>
              </div>
            </div>
          </div> 
          </Grid>
        </Grid>
      </div>
      );
}

const mapDispatchToProps =(dispatch)=>
{
  return{
    fetchData: ()=> dispatch(fetchData()),
    ScoreA:()=>dispatch(increaseScoreA()),
    ScoreB:()=>dispatch(increaseScoreB())
  }
}

export default connect(null,mapDispatchToProps)(Play)

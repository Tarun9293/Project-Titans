import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './Styles'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './Play.css'



function Play() {
  const classes = useStyles();
  const {push}=useHistory()
    return (
      <div>
        <Grid container spacing={3} xs={12}>
          <Grid item xs={12} alignItems="baseline" className="box">
            {/* <h1>Choose the section to kickstart!!!</h1> */}
          <div >
            <div className="polaroid">
              <div className="container">
                <img className="image" src="/src/general.jpg" alt="general"/>
                <p className="category" onClick={() => push(`/${'General'}`)}>General</p>
              </div>
            </div>
            <div className="polaroid">
              <div className="container">
                <p className="category" onClick={() => push(`/${'General'}`)}>T20</p>
              </div>
            </div>
            <div className="polaroid">
              <div className="container">
                <p className="category" onClick={() => push(`/${'General'}`)}>Worldcup</p>
              </div>
            </div>
          </div> 
          </Grid>
        </Grid>
      </div>
      );
}

export default Play
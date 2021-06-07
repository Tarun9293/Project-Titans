
import { Container, Grid,Paper} from '@material-ui/core'
import React ,{useState,useEffect} from 'react';
import {connect} from 'react-redux'
import { fetchData} from '../../redux/worldcup/worldCupActions';
import useStyles from './Styles';


function WorldCup({fetchData}) {

    return (
      <main>
      <Container maxWidth='md'  >
      <Grid  container spacing={2} alignItems="center" justify="center"style={{ minHeight: "100vh" }}>
        
          </Grid>
        </Container>
        </main>
    )
}


export default WorldCup

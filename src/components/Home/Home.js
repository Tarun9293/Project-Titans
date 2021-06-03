

import Button from '@material-ui/core/Button';
import React from 'react';
import './Home.css'
import { Container, Grid,Paper, Typography} from '@material-ui/core'






const button = {
    
    border: '1px solid #c3c3c3',
    justifyContent: 'center',
    backgroundColor: '#5d6cd7',
    marginTop: '20%',
     
    
    
      
    // align-items: flex-end;
    // marginTop: '20%',
    // marginLeft: '10%',
    // left: '-30%'
}


const button1 = {
    
    border: '1px solid #c3c3c3',
    justifyContent: 'center',
    marginTop: '20%',
    marginLeft: '10%',
    backgroundColor: '#5d6cd7'
      
    // align-items: flex-end;
    // marginTop: '20%',
    // marginLeft: '10%',
    // left: '-30%'
}




function Home() {
  
    return (
        <main>
      <Container maxWidth='md'  >
      <Grid  container spacing={2} alignItems="center" justify="center"style={{ color:"white",marginTop:'50%' }}>
        <Grid item xs={12}>     
          <Typography   variant='h1'>
              LET'S START
            </Typography> 
          </Grid>
          </Grid>
        </Container>
        </main>
    )
}

export default Home

import React from 'react';
import './Home.css'
import { Container, Grid,Typography} from '@material-ui/core'

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

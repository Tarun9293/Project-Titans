
import { Container, Grid,Paper, Typography} from '@material-ui/core'
import React  from 'react';
import useStyles from './Styles';

function Results() {
    const classes=useStyles();
    return (
     // <TotalScore.Consumer>
      <main>
      <Container maxWidth='md'  >
      <Grid  container spacing={2} alignItems="center" justify="center"style={{ minHeight: "100vh" }}>
        <Grid item xs={12}>     
          <Paper className={classes.paper} alignItems="center" > 
          <Typography  className={classes.typo } variant='h5'>
              Your Quiz is Over!
            </Typography>
          </Paper>      
          </Grid>
          </Grid>
        </Container>
        </main>
       // </TotalScore.Consumer>
    )
}


export default Results

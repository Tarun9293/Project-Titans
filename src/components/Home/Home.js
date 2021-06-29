import React from 'react';
import './Home.css'
import { Container, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import useStyles from './Styles'


function Home() {
  const classes = useStyles();
  const { push } = useHistory()
  return (
    // <main>
    //   <Container maxWidth='md'  >
    //     <Grid container spacing={2} alignItems="center" justify="center" style={{ color: "white" }}>
    //       {/* <Grid item xs={12}> */}
    //         <Typography variant='h1'>
    //           <Grid item xs={6} style={{ width: "50px", height: "50px" }}>
    //             Play Quiz
    //           </Grid>
    //           <Grid item xs={6} style={{ width: "50px", height: "50px" }}>
    //             Create Quiz
    //           </Grid>
    //         </Typography>
    //       {/* </Grid> */}
    //     </Grid>
    //   </Container>
    // </main>

    <div className={classes.root}>
      <Grid container spacing={3} xs={12}>
        <Grid item xs={12} alignItems="baseline" className="box1">
          <div >
            <ul className="box2">
              <li className="category1"
              onClick={() => push(`/${'Play'}`)}>Play Quiz</li>
              <li className="category1"
              onClick={() => push(`/${'text'}`)}>Create Quiz</li>
            </ul>
            {/* <div className="category1"
              onClick={() => push(`/${'Play'}`)}>Play Quiz
            </div>
            <div className="category1"
              onClick={() => push(`/${'text'}`)} >Create Quiz
            </div> */}
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home

import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    link: {
        fontSize:'20px',
        textDecoration: 'none',
        margin: "0.5rem",
        color: 'white'
    
    },
    appBar: {
     backgroundColor: '#3a28a7'
    }
  }));
  
function NavBar() {
    const classes = useStyles();
  
    return (
      <div className={classes.root} >
        <AppBar position="relative" className={classes.appBar}>
          <Toolbar >
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              TITANS QUIZ
            </Typography>  
             {/* <Link to="/" className={classes.link}  >Home</Link>   
             <Link to="/questions/worldcup" className={classes.link} >WorldCup</Link>   
             */}
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  export default NavBar
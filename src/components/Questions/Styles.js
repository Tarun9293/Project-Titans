import { makeStyles } from '@material-ui/core/styles';

 const useStyles = makeStyles((theme) => ({
    paper: {
      backgroundColor:'#5d6cd7',
      minHeight:'20vh',
      position: 'relative'
    },
    typo:{
      padding: '30px',
      color:'white'
    },
    typoRight:{
      padding: '10px',
      color:'white'
    },
    typoWrong:{
      padding: '10px',
      color:'Red'
    },
    button:{
      padding: '10px',
      marginBottom:'20px',
      marginLeft:'20px',
      marginTop:'10%',
      position:'relative'   ,
      border: '2px solid green',
      borderStyle: 'solid',
      width:'20%',
      whiteSpace: 'wrap',
    },

    buttonDisabled:{
      padding: '10px',
      marginBottom:'20px',
      marginLeft:'20px',
      marginTop:'10%',
      position:'relative'   ,
      border: '2px solid',
      borderStyle: 'solid',
      width:'20%',
      whiteSpace: 'wrap',
    },
    textField: {
      width: '90%',
      marginLeft: 'auto',
      marginRight: 'auto',            
      paddingBottom: 0,
      marginTop: 'auto',
      fontWeight: 500
    },
  input: {
      color: 'white',
      fontSize:20
      
  },
  floatinglabelfocusstyle: {
    color: "white",
  }
  }));

  export default useStyles
import { makeStyles } from '@material-ui/core/styles';

 const useStyles = makeStyles((theme) => ({
    paper: {
      backgroundColor:'#5d6cd7',
      minHeight:'20vh',
      position: 'relative'
    },
    typo:{
      padding: '10px',
      marginLeft:'20px',
      
      color:'white'
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
  }));

  export default useStyles
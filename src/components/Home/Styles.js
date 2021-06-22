import { makeStyles } from '@material-ui/core/styles';

 const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
    button:{
      padding: '10px',
      marginBottom:'20px',
      marginLeft:'20px',
      marginTop:'20%',
      position:'relative'   ,
      border: '2px solid ',
      borderStyle: 'solid',
      width:'10%',
      whiteSpace: 'wrap',
    }
  }));

  export default useStyles
import TextField from '@material-ui/core/TextField';
import useStyles from './Styles'
import { Typography } from '@material-ui/core'

 export const renderTextField = ({
    input,
    label,
    meta: { touched, error },
    classes,
    ...custom 
  }) => (  
    <div>
    <TextField
    style={{  
      width: '90%',
      marginLeft: 'auto',
      marginRight: 'auto',            
      paddingBottom: 0,
      marginTop: 'auto',
      fontWeight: 500
    }}
      hinttext={label}
      floatinglabeltext={label}    
      {...input}
      {...custom}
      label="Enter Answer..."
      size="medium"
      variant="filled"
      autoComplete="off" 
    />
     {touched && error && <Typography style={{color:'red'}}>{error}</Typography>}
 
  </div>
  )
import TextField from '@material-ui/core/TextField';
import useStyles from './Styles'


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
      hintText={label}
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      {...custom}
      label="Enter Answer..."
      size="medium"
      variant="filled"
      autoComplete="off" 
      
    />
 
  </div>
  )
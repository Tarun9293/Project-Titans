

import Button from '@material-ui/core/Button';
import React from 'react';
import './Home.css'






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
        <React.Fragment>
            <div className="position" >
            
        <Button style={button} size="large" variant="contained" 
                     color="secondary" >General</Button>
        <Button style={button1}   size="large" variant="contained" 
                     color="secondary">WorldCup</Button>      
    </div>
        </React.Fragment>
    )
}

export default Home

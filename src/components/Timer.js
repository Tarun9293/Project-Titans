import React from 'react'
import { Typography } from '@material-ui/core'
import { useHistory } from "react-router";


function Timer({currQues,setCurrentQues,questions}) {
    
    let length = questions.data.length
    const history = useHistory();
    const [seconds, setSeconds] = React.useState(20);
    
    React.useEffect(() => {
        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
        } else {

            if (currQues < length - 1) {
                setCurrentQues(currQues + 1)
                setSeconds(20);
            }
            else {
                history.push('/Results')
            }
        }
        return () => clearTimeout();
    });

    return (
    
        <Typography style={{color:'white'}} variant='h5'>
           Time Remaining: {seconds}
        </Typography>
    
    )
}

export default Timer
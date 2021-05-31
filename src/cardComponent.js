
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react'


const cardStyle = {
    backgroundColor: 'white',
    padding: '70px',
    border: '5px solid #4CAF50',
    height: '50vh',
    margin: '100px',
}

const questionText = {
    textAlign: 'left'
}

const button = {
    
    justifyContent: 'center',
     flexDirection: 'row',
    // align-items: flex-end;
    marginTop: '20%',
    marginLeft: '10%',
    left: '-30%'
}


class CardContentItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
          
            count : 1,
            data:
                [
                    { id: 1, question: 'Who won the 1983 WorldCup', answer: 'India' },
                    { id: 2, question: 'Who won the 1987 WorldCup', answer: 'Australia' },
                     { id: 3, question: 'Who won the 1992 WorldCup', answer: 'Pakistan' },
                     { id: 4, question: 'Who won the 1996 WorldCup', answer: 'Sri Lanka' },
                ]
        }
    }

   



   


    render() {
        const {  data,count } = this.state
        console.log(data)
        console.log(count)
       

        return (
<div>
            <Card style={cardStyle}>
            <CardContent >
         
            </CardContent>
            {
                data.map(value => {
                    return(
                    <Button style={button} size="small" variant="contained" 
                    key={value.id} color="secondary" >
                        {value.id}</Button>
                )}).fi
            }
            </Card>
            
             
            
            </div>
        )
        }
}


export default CardContentItem
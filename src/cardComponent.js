
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
    padding: '20px',
    height: '10px',
    position: 'absolute',
    bottom: '350px'

}


class CardContentItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isClicked: false,
            count : 1,
            data:
                [
                    { id: 1, question: 'Who won the 1983 WorldCup', answer: 'India' },
                    // { id: 2, question: 'Who won the 1987 WorldCup', answer: 'Australia' },
                    // { id: 3, question: 'Who won the 1992 WorldCup', answer: 'Pakistan' },
                    // { id: 4, question: 'Who won the 1996 WorldCup', answer: 'Sri Lanka' },
                ]
        }
    }


    showAnswer = () => {
        this.setState({
            isClicked: true
        })
    }

    increment = () => {
        this.setState( prevState => {
           return {count : prevState.count + 1}
        })
    }
    


    render() {
        const { isClicked, data,count } = this.state
        console.log(isClicked)
        console.log(data)
        console.log(count)
        let values = isClicked ? data.map(value => {
           if(value.id = count)   
           {        
                    console.log(value.id)
                    return ( 
                    <CardContent >
                    <Typography key={value.id} style={questionText} variant="h5" component="h2">
                   {value.answer}
                    </Typography>
                    </CardContent>)
           }
        }) :  data.map(value =>{
            if(value.id = 1)   
            {        
                     console.log(value.id)
                     return ( 
                    <React.Fragment>
                     <CardContent >
                     <Typography key={value.id} style={questionText} variant="h5" component="h2">
                     {value.id}.{value.question}
                     </Typography>
                     </CardContent>
                     <CardActions>
                     <Button  size="small" variant="contained" color="secondary" onClick={this.showAnswer}>Show Answer</Button>
                     </CardActions>
                     </React.Fragment>
                     )
            }
    })
        return (

            <Card style={cardStyle}>
                {values}
                
                <CardActions>
                    <Button style={button} size="small" variant="contained" color="secondary" onClick={this.increment}>Next</Button>
        </CardActions>

            </Card>
        )
    }
}


export default CardContentItem
import React, { Component } from 'react'
import withCounter from './withCounter'

class Counter extends Component {
   
    render() {
        
        const{count,increment}=this.props
        return (
            <div>
                <button onClick= {increment} >Click {count} times</button>
            </div>
        )
    }
}

export default withCounter(Counter)

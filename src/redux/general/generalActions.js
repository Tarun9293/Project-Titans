import {FETCH_DATA_SUCCESS,FETCH_DATA_REQUEST, INCREASE_SCORE_B,INCREASE_SCORE_A} from './generalTypes'
import axios from 'axios'


export const fetchDataRequest = () =>{
return{
    type: FETCH_DATA_REQUEST
}
}

export const fetchDataSuccess = (question) =>{
    return{
        type: FETCH_DATA_SUCCESS,
        payload: question
    }
    }

    export const increaseScoreA = () =>{
        return{
            type: INCREASE_SCORE_A
                               
        }
        }
        export const increaseScoreB = () =>{
            return{
                type: INCREASE_SCORE_B
                            
            }
            }



export const fetchData=()=>{
    return (dispatch)=>
    {   
        dispatch(fetchDataRequest)
        axios.get('data.json')
        .then(response=>{
            const question = response.data
            dispatch(fetchDataSuccess(question))
        })
    }
}

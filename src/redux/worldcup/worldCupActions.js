import {FETCH_DATA_SUCCESS,FETCH_DATA_REQUEST} from './worldcupTypes'
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

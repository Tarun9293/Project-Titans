import {FETCH_DATA_REQUEST,FETCH_DATA_SUCCESS} from './worldcupTypes'
import axios from 'axios'

// export const fetchDataRequest = () =>{
// return{
//     type: FETCH_DATA_REQUEST
// }
// }

export const fetchDataSuccess = () =>{
    console.log()
    return{
        type: FETCH_DATA_SUCCESS
    }
    }



// export const fetchData=(value)=>{
//     return (dispatch)=>
//     {
//         dispatch(fetchDataRequest)
//         dispatch(fetchDataSuccess(value))
   
//     }


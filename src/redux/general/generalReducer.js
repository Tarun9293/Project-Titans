import {FETCH_DATA_SUCCESS,FETCH_DATA_REQUEST} from './generalTypes'
const initialState = {
    data : [],
    isLoading : true
}


const generalReducer= (state=initialState ,action)=>
{
switch(action.type)
{
    case FETCH_DATA_REQUEST :
        return{
            ...state,
            isLoading : true
        }
    
    case FETCH_DATA_SUCCESS :
        console.log(state)
        return{
            data : action.payload,
            isLoading : false
            }
    default :
    return state
}
}

export default generalReducer
import {FETCH_DATA_SUCCESS,FETCH_DATA_REQUEST} from './worldcupTypes'
const initialState = {
    data : [],
    isLoading : true
}


const worldcupReducer= (state=initialState ,action)=>
{
switch(action.type)
{
    case FETCH_DATA_REQUEST :
        return{
            ...state,
            isLoading : true
        }
    
    case FETCH_DATA_SUCCESS :
        return{
            data : action.payload,
            isLoading : false
            }
    default :
    return state
}
}

export default worldcupReducer
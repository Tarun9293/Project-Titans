import {FETCH_DATA_REQUEST,FETCH_DATA_SUCCESS} from './worldcupTypes'
const initialState = {
    data : [
        { id: 1, question: 'Who won the 1983 WorldCup', answer: 'India' },
        { id: 2, question: 'Who won the 1987 WorldCup', answer: 'Australia' },
        { id: 3, question: 'Who won the 1992 WorldCup', answer: 'Pakistan' },
        { id: 4, question: 'Who won the 1996 WorldCup', answer: 'Sri Lanka' },
    ]
}


const worldcupReducer= (state=initialState ,action)=>
{
switch(action.type)
{
    // case FETCH_DATA_REQUEST :
    //     return{
    //         ...state,
    //         isLoading : true
    //     }
    
    case FETCH_DATA_SUCCESS :
        return{
            state
            
           
        }
    default :
    return state
}
}

export default worldcupReducer
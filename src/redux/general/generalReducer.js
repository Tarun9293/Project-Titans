import { FETCH_DATA_SUCCESS, FETCH_DATA_REQUEST, INCREASE_SCORE_A, INCREASE_SCORE_B } from './generalTypes'
const initialState = {
    scoreA : 0,
    scoreB : 0,
    data: [],
    isLoading: true,
   
};

const generalReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                isLoading: true,
            }

        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            }
        case INCREASE_SCORE_A:
            return {
                ...state,
                 scoreA:state.scoreA+1
            }
        case INCREASE_SCORE_B:
            return {
                ...state,
                 scoreB:state.scoreB+1
                
            }
        default:
            return state
    }
}

export default generalReducer
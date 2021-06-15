import { combineReducers } from 'redux'
import generalReducer from './redux/general/generalReducer'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    general : generalReducer,
    form: formReducer
})

export default rootReducer
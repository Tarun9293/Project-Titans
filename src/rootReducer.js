import { combineReducers } from 'redux'
import worldcupReducer from './redux/worldcup/worldcupReducer'
import generalReducer from './redux/general/generalReducer'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    worldCup : worldcupReducer,
    general : generalReducer,
    form: formReducer
})

export default rootReducer
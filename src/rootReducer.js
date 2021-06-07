import { combineReducers } from 'redux'
import worldcupReducer from './redux/worldcup/worldcupReducer'
import generalReducer from './redux/general/generalReducer'

const rootReducer = combineReducers({
    worldCup : worldcupReducer,
    general : generalReducer
})

export default rootReducer
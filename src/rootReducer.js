import { combineReducers } from 'redux'
import worldcupReducer from './redux/worldcup/worldcupReducer'

const rootReducer = combineReducers({
    worldCup : worldcupReducer
})

export default rootReducer
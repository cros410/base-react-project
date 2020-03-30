import { combineReducers } from 'redux'
import counterReducer from 'store/counter/reducer'
import MemeReducer from 'store/meme/reducer'
const reducers = combineReducers({
  counterReducer,
  MemeReducer
})

export default reducers

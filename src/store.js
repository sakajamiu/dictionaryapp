import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import randomWordReducer from './reducer/RandomWord'
import autoCompleteReducer from './reducer/AutoComplete'

const reducer = combineReducers({
  randomWord: randomWordReducer,
  suggestions: autoCompleteReducer
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store
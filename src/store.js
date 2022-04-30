import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import randomWordReducer from './reducer/RandomWord'
import autoCompleteReducer from './reducer/AutoComplete'
import searchWordReducer from './reducer/SearchWord'

const reducer = combineReducers({
  randomWord: randomWordReducer,
  suggestions: autoCompleteReducer,
  searchedWord: searchWordReducer
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store
import searchWordService from '../service/SearchWord'


export const searchWord = (word) => {
  return async dispatch => {
    const searchedWord = await searchWordService.get(word)
    if(searchedWord){
      dispatch({
        type: 'SEARCHWORD',
        searchedWord: searchedWord
      })
    }
    return {
      type: 'LOADING',
      data: 'Loading'
    }
  }
}



const reducer = (state = [], action ) => {
  switch(action.type){
  case 'SEARCHWORD':
    return action.searchedWord
  case 'LOADING':
    return action.data
  default:
    return state

  }
}

export default reducer
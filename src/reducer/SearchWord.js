import searchWordService from '../service/SearchWord'


export const searchWord = (word) => {
  return async dispatch => {
    const searchedWord = await searchWordService.get(word)
    dispatch({
      type: 'SEARCHWORD',
      searchedWord: searchedWord
    })

  }
}

const reducer = (state = [], action ) => {
  switch(action.type){
  case 'SEARCHWORD':
    return action.searchedWord
  default:
    return state

  }
}

export default reducer
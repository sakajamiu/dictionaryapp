import autoCompleteService from '../service/Autocomplete'

export const autoComplete = ( word ) => {
  return async dispatch => {
    const suggestion = await autoCompleteService.get(word)
    dispatch({
      type: 'AUTOCOMPLETE',
      suggestions: suggestion
    })
  }
}

const reducer = (state = [], action) => {
  switch(action.type){
  case 'AUTOCOMPLETE':
    return action.suggestions
  default:
    return state
  }
}

export default reducer
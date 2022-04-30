import autoCompleteService from '../service/Autocomplete'

export const autoComplete = ( word ) => {
  console.log(word)
  if(word.length > 0){
    return async dispatch => {
      const suggestion = await autoCompleteService.get(word)
      dispatch({
        type: 'AUTOCOMPLETE',
        suggestions: suggestion
      })
    }
  }
  return {
    type: 'CLEAR',
    data: []
  }
}
export const cleared = () => {
  return{
    type: 'CLEARED',
    Data: []
  }
}

const reducer = (state = [], action) => {
  switch(action.type){
  case 'AUTOCOMPLETE':
    return action.suggestions
  case 'CLEAR':
    return action.data
  case 'CLEARED':
    return action.Data
  default:
    return state
  }
}

export default reducer
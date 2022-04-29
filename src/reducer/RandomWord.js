import randomWordService from '../service/RandomWord'

export const randomWord = () => {
  return async dispatch => {
    const randomWord = await randomWordService.get()
    dispatch({
      type : 'RANDOM',
      word: randomWord
    })
  }
}

const reducer = (state = [], action ) => {
  switch(action.type){
  case 'RANDOM':
    return action.word
  default:
    return state
  }

}

export default reducer
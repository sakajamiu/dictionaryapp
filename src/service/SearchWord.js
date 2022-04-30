import axios from 'axios'
const baseUrl ='https://api.dictionaryapi.dev/api/v2/entries/en/'

const get = async word  => {
  const response = await axios.get(`${baseUrl}${word}`)
  return response.data
}

export default { get }
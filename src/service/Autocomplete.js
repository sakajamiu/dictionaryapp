import axios from 'axios'

const baseUrl ='https://api.datamuse.com/sug?s='

const get = async word => {
  const response = await axios.get(`${baseUrl}${word}`)
  return response.data
}

export default { get }
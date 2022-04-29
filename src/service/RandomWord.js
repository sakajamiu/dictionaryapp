import axios  from 'axios'
const baseUrl ='https://random-words-api.vercel.app/word'

const get = async() => {
  const response = await axios.get(baseUrl)
  return response.data
}

export default { get }
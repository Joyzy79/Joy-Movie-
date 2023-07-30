import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'eecf05dbf295cd2a45a12149b2ece9a9',
    language: 'pt-BR',
    page: 1
  }
})

export default api

/* eslint-disable no-unused-vars */
import { useState } from 'react'

import api from '../../services/api'
import { Info, Background } from './styles'

function Home() {
  const [movie, setMovie] = useState()

  async function getMovies() {
    const data = await api.get('/movie/popular')

    setMovie(data.data.results[2])
    console.log(movie)
  }

  getMovies()

  return (
    <Info>
      <Background img="">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
      </Background>
    </Info>
  )
}

export default Home

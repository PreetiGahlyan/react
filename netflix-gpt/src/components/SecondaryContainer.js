import React from "react"
import MovieList from "./MovieList"
import { useSelector } from "react-redux"

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  )

  return (
    <div>
      <MovieList title="Now Playing" movies={nowPlayingMovies}></MovieList>
    </div>
  )
}

export default SecondaryContainer

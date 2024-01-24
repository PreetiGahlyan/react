import React from "react"
import MovieList from "./MovieList"
import { useSelector } from "react-redux"

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  )
  const popularMovies = useSelector((store) => store.movies?.popularMovies)
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies)
  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies)

  return (
    <div className="bg-black">
      <div className="-mt-10 relative z-20">
        <MovieList title="Now Playing" movies={nowPlayingMovies}></MovieList>
        <MovieList title="Popular Movies" movies={popularMovies}></MovieList>
      </div>
      <MovieList title="Top Rated Movies" movies={topRatedMovies}></MovieList>
      <MovieList title="Upcoming Movies" movies={upcomingMovies}></MovieList>
    </div>
  )
}

export default SecondaryContainer

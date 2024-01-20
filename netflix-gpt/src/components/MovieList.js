import React from "react"
import MovieCard from "./MovieCard"

const MovieList = ({ title, movies }) => {
  console.log(movies)
  return (
    <div>
      <h1 className="text-3xl py-3">{title}</h1>
      <div className="flex gap-1 overflow-x-scroll">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default MovieList

import React from "react"
import MovieCard from "./MovieCard"

const MovieList = ({ title, movies }) => {
  console.log(movies)
  return (
    <div className="bg-black px-6">
      <h1 className="text-3xl py-3 text-white">{title}</h1>
      <div className="flex  overflow-x-scroll">
        <div className="flex gap-2">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieList

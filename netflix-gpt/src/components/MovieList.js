import React from "react"
import MovieCard from "./MovieCard"

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-6">
      <h1 className="text-3xl py-3 text-white">{title}</h1>
      <div className="flex [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] overflow-x-auto">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieList

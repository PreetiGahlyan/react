import React from "react"
import { IMG_CDN_URL } from "../utils/constants"

const MovieCard = ({ movie }) => {
  const { poster_path } = movie
  return (
    <div>
      <img alt="Movie Poster" src={IMG_CDN_URL + poster_path} />
    </div>
  )
}

export default MovieCard

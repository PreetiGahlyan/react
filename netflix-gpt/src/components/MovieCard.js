import React from "react"
import { IMG_CDN_URL } from "../utils/constants"

const MovieCard = ({ movie }) => {
  const { poster_path } = movie
  return (
    <div className="pr-4 w-36">
      <img alt="Movie Poster" src={IMG_CDN_URL + poster_path} />
    </div>
  )
}

export default MovieCard

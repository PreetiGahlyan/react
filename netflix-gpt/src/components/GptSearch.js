import React from "react"
import GptSearchBar from "./GptSearchBar"
import GptMovieSuggestions from "./GptMovieSuggestions"

const GptSearch = () => {
  return (
    <div className={`bg-first bg-cover bg-repeat h-screen`}>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch

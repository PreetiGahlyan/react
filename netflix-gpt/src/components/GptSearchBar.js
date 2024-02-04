import React, { useRef } from "react"
import lang from "../utils/languageConstants"
import { useDispatch, useSelector } from "react-redux"
import openAi from "../utils/openAi"
import { API_OPTIONS } from "../utils/constants"
import { addGptMovieResults } from "../utils/gptSlice"

const GptSearchBar = () => {
  const selectedlang = useSelector((store) => store.config?.lang)
  const searchTextRef = useRef(null)
  const dispatch = useDispatch()

  const searchMovieInTMDB = async (movieName) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    )
    const json = await data.json()
    return json.results
  }

  const handleGptSearchClick = async () => {
    const gptResults = await openAi.chat.completions.create({
      messages: [
        {
          role: "user",
          content:
            "Act as a movie recommendation system and suggest some movie for the query :  " +
            searchTextRef.current.value +
            ". only give me name of top 5 movies, comma separated like the example result given ahead. Example result: Sholey, Jodha Akhbar.",
        },
      ],
      model: "gpt-3.5-turbo",
    })

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(", ")
    const promises = gptMovies.map((movie) => searchMovieInTMDB(movie))
    const tmdbMovieResults = await Promise.all(promises)

    dispatch(
      addGptMovieResults({
        movieNames: gptMovies,
        movieResults: tmdbMovieResults,
      })
    )
  }

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="bg-black w-1/2 flex"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchTextRef}
          className="p-2 m-4 w-[80%]"
          placeholder={lang[selectedlang].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 w-auto h-max m-4 bg-red-500 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[selectedlang].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar

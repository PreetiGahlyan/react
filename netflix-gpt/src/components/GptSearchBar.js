import React from "react"
import lang from "../utils/languageConstants"
import { useSelector } from "react-redux"

const GptSearchBar = () => {
  const selectedlang = useSelector((store) => store.config?.lang)

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black w-1/2 flex">
        <input
          type="text"
          className="p-2 m-4 w-[80%]"
          placeholder={lang[selectedlang].gptSearchPlaceholder}
        />
        <button className="py-2 px-4 w-auto h-max m-4 bg-red-500 text-white rounded-lg">
          {lang[selectedlang].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar

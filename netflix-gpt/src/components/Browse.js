import React from "react"
import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"

const Browse = () => {
  useNowPlayingMovies()

  return (
    <div>
      <div className="absolute z-50 w-screen">
        <Header />
      </div>
      <MainContainer />
      <SecondaryContainer />
      {/*
        MainContainer
          - video background
          - video title
        Secondary container
          - movies list * n
              - cards * n
       */}
    </div>
  )
}

export default Browse

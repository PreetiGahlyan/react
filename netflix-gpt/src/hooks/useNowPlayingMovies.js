import { API_OPTIONS, NOW_PLAYING_MOVIES_API } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addNowPlayingMovies } from "../utils/moviesSlice"
import { useEffect } from "react"

const useNowPlayingMovies = () => {
  const dispatch = useDispatch()
  const nowPlayingMovies = useSelector(
    (store) => store?.movies?.nowPlayingMovies
  )

  const getNowPlayingMovies = async () => {
    const response = await fetch(NOW_PLAYING_MOVIES_API, API_OPTIONS)
    const data = await response.json()
    dispatch(addNowPlayingMovies(data.results))
  }

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies()
  }, [])
}

export default useNowPlayingMovies

import { API_OPTIONS, POPULAR_MOVIES_API } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addPopularMovies } from "../utils/moviesSlice"
import { useEffect } from "react"

const usePopularMovies = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    ;(async () => {
      const response = await fetch(POPULAR_MOVIES_API, API_OPTIONS)
      const data = await response.json()
      dispatch(addPopularMovies(data.results))
    })()
  }, [])
}

export default usePopularMovies

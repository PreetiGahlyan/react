import { API_OPTIONS, TOP_RATED_MOVIES_API } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addTopRatedMovies } from "../utils/moviesSlice"
import { useEffect } from "react"

const useTopRatedMovies = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    ;(async () => {
      const response = await fetch(TOP_RATED_MOVIES_API, API_OPTIONS)
      const data = await response.json()
      dispatch(addTopRatedMovies(data.results))
    })()
  }, [])
}

export default useTopRatedMovies

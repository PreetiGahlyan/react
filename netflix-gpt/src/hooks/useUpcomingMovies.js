import { API_OPTIONS, UPCOMING_MOVIES_API } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addUpcomingMovies } from "../utils/moviesSlice"
import { useEffect } from "react"

const useUpcomingMovies = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    ;(async () => {
      const response = await fetch(UPCOMING_MOVIES_API, API_OPTIONS)
      const data = await response.json()
      dispatch(addUpcomingMovies(data.results))
    })()
  }, [])
}

export default useUpcomingMovies

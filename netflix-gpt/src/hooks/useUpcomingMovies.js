import { API_OPTIONS, UPCOMING_MOVIES_API } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addUpcomingMovies } from "../utils/moviesSlice"
import { useEffect } from "react"

const useUpcomingMovies = () => {
  const dispatch = useDispatch()
  const upcomingMovies = useSelector((store) => store?.movies?.upcomingMovies)

  const getUpcomingMovies = async () => {
    const response = await fetch(UPCOMING_MOVIES_API, API_OPTIONS)
    const data = await response.json()
    dispatch(addUpcomingMovies(data.results))
  }

  useEffect(() => {
    !upcomingMovies && getUpcomingMovies()
  }, [])
}

export default useUpcomingMovies

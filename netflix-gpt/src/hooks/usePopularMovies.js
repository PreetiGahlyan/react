import { API_OPTIONS, POPULAR_MOVIES_API } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addPopularMovies } from "../utils/moviesSlice"
import { useEffect } from "react"

const usePopularMovies = () => {
  const dispatch = useDispatch()
  const popularMovies = useSelector((store) => store?.movies?.popularMovies)

  const getpopularMovies = async () => {
    const response = await fetch(POPULAR_MOVIES_API, API_OPTIONS)
    const data = await response.json()
    dispatch(addPopularMovies(data.results))
  }

  useEffect(() => {
    !popularMovies && getpopularMovies()
  }, [])
}

export default usePopularMovies

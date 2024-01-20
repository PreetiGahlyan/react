import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addTrailerVideo } from "../utils/moviesSlice"
import { API_OPTIONS } from "../utils/constants"

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch()
  useEffect(() => {
    ;(async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      )
      const data = await response.json()

      const filterData = data.results.filter(
        (video) => video.type === "Trailer"
      )
      const trailer = filterData.length ? filterData[0] : data.results[0]
      dispatch(addTrailerVideo(trailer))
    })()
  }, [movieId])
}

export default useMovieTrailer

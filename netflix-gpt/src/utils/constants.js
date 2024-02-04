export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const USER_PROFILE_IMAGE =
  "https://avatars.githubusercontent.com/u/26164863?v=4"

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
}

export const NOW_PLAYING_MOVIES_API =
  "https://api.themoviedb.org/3/movie/now_playing?page=1"

export const POPULAR_MOVIES_API =
  "https://api.themoviedb.org/3/movie/popular?page=1"

export const TOP_RATED_MOVIES_API =
  "https://api.themoviedb.org/3/movie/top_rated?page=1"

export const UPCOMING_MOVIES_API =
  "https://api.themoviedb.org/3/movie/upcoming?page=1"

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780"

export const SUPPORTED_LANGUGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
]

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY

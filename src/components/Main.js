import RestaurantCard, { withTopRatingLabel } from "./RestaurantCard"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { SWIGGY_API_URL } from "../utils/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

const Main = () => {
  const [restaurantList, setRestaurantList] = useState([])
  const [filteredList, setFilteredList] = useState([])
  const [searchText, setSearchText] = useState("")
  const onlineStatus = useOnlineStatus()
  const TopRatedRestaurantCard = withTopRatingLabel(RestaurantCard)

  useEffect(() => {
    ;(async () => {
      const response = await fetch(SWIGGY_API_URL)
      const apiData = await response.json()
      const restaurants =
        apiData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      setRestaurantList(restaurants)
      setFilteredList(restaurants)
    })()
  }, [SWIGGY_API_URL])

  if (onlineStatus === false)
    return (
      <h2>
        Looks like you are offline!!! Please check your network connection.
      </h2>
    )

  return restaurantList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="main">
      <div className="filter flex">
        <div className="search my-4 p-4">
          <input
            type="text"
            className="border border-solid border-black rounded-md pl-2"
            placeholder="search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="px-4 bg-green-100 ml-3 rounded-lg"
            onClick={() => {
              setFilteredList(
                restaurantList.filter((a) =>
                  a.info?.name.toLowerCase().includes(searchText.toLowerCase())
                )
              )
            }}
          >
            Search
          </button>
        </div>
        <div className="my-4 py-4">
          <button
            className="filter-btn px-2 bg-green-100 rounded-lg"
            onClick={() => {
              setFilteredList(
                restaurantList.filter((a) => a.info?.avgRating > 4)
              )
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredList?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info?.avgRating > 4 ? (
              <TopRatedRestaurantCard resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Main

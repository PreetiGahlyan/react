import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { SWIGGY_API_URL } from "../utils/constants"
import { Link } from "react-router-dom"

const Main = () => {
  const [restaurantList, setRestaurantList] = useState([])
  const [filteredList, setFilteredList] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    const response = await fetch(SWIGGY_API_URL)
    const apiData = await response.json()
    const restaurants =
      apiData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    setRestaurantList(restaurants)
    setFilteredList(restaurants)
  }

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="main">
      <div className="btn-group">
        <div className="search">
          <input
            type="text"
            className="search-text"
            placeholder="search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
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
        <button
          className="filter-btn"
          onClick={() => {
            setFilteredList(restaurantList.filter((a) => a.info?.avgRating > 4))
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Main

import RestaurantCard from "./RestaurantCard"
import restaurantList from "../utils/mockData"

const Main = () => {
  return (
    <div className="main">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  )
}

export default Main

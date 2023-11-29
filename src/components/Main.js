import RestaurantCard from "./RestaurantCard"

const Main = ({ restaurantList }) => {
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

import { CDN_URL } from "../utils/constants"

const RestaurantCard = ({ resData: { info } }) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    costForTwo,
    sla: { deliveryTime },
  } = info

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  )
}

export default RestaurantCard

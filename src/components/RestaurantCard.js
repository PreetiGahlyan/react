import { SWIGGY_CDN_URL } from "../utils/constants"

const RestaurantCard = ({ resData }) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    costForTwo,
    sla: { deliveryTime },
  } = resData?.info

  return (
    <div className="m-4 p-4 w-[250px] max-h-full bg-gray-100 rounded-lg">
      <img
        className="res-logo rounded-lg h-[150px] w-full"
        alt="res-logo"
        src={SWIGGY_CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-1">{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  )
}

export const withTopRatingLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute text-white bg-green-700 m-0 p-1">
          Top rated restaurant
        </label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard

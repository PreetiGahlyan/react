import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"

const RestaurantMenu = () => {
  const { resId } = useParams()
  const resInfo = useRestaurantMenu(resId)

  if (resInfo === null) return <Shimmer />

  const recommendedMenuItems =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards

  const { name, cuisines } = resInfo?.cards[0]?.card?.card?.info

  return (
    <div className="menu">
      <h2>{name}</h2>
      <h3>{cuisines.join(" , ")}</h3>
      <p className="menu-group">Recommended Menu Items</p>
      {recommendedMenuItems?.map((item) => (
        <div className="menu-item" key={item.card.info.id}>
          <h4>{item.card.info.name}</h4>
          <h4>
            Rs. {(item.card.info?.price || item.card.info?.defaultPrice) / 100}
            for two
          </h4>
        </div>
      ))}
    </div>
  )
}

export default RestaurantMenu

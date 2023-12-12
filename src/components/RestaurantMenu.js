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
    <div className="menu border-solid border-blue-200 border m-4 p-2 text-center">
      <h2 className="font-bold text-2xl">{name}</h2>
      <h3 className="">{cuisines.join(" , ")}</h3>
      <p className="menu-group text-blue-500">Recommended Menu Items</p>
      {recommendedMenuItems?.map((item) => (
        <div className="menu-item flex justify-around" key={item.card.info.id}>
          <h4 className="w-1/4 text-left">{item.card.info.name}</h4>
          <h4 className="w-1/4 text-left">
            Rs.
            {(item.card.info?.price || item.card.info?.defaultPrice) / 100} for
            two
          </h4>
        </div>
      ))}
    </div>
  )
}

export default RestaurantMenu

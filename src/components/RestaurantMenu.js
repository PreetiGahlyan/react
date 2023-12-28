import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestaurantCategory from "./RestaurantCategory"
import { useState } from "react"

const RestaurantMenu = () => {
  const { resId } = useParams()
  const resInfo = useRestaurantMenu(resId)
  const [activeIndex, setActiveIndex] = useState(0)

  if (resInfo === null) return <Shimmer />

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info

  return (
    <div className="menu text-center">
      <h1 className="font-bold text-xl my-4">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(" , ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === activeIndex}
          onShow={() => {
            setActiveIndex(index)
          }}
        />
      ))}
    </div>
  )
}

export default RestaurantMenu

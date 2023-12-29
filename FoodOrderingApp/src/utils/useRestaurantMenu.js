import { useEffect, useState } from "react"
import { MENU_ITEM_URL } from "./constants"

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null)
  useEffect(() => {
    ;(async () => {
      const response = await fetch(MENU_ITEM_URL + resId)
      const json = await response.json()
      setResInfo(json.data)
    })()
  }, [resId])

  return resInfo
}

export default useRestaurantMenu

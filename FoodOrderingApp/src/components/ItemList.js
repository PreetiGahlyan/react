import { useDispatch } from "react-redux"
import { SWIGGY_CDN_URL } from "../utils/constants"
import { addItem } from "../utils/cartSlice"

const ItemList = ({ items }) => {
  const dispatch = useDispatch()
  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item))
  }

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="m-2 p-2 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span> {item.card.info.name}</span>
              <span>
                - ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 ">
            <div className="absolute">
              <button
                className="p-2 mb-2 bg-black text-white shadow-lg"
                onClick={() => handleAddItem(item)}
              >
                Add+
              </button>
            </div>
            <img
              className="w-full h-[150px]"
              src={SWIGGY_CDN_URL + item.card.info?.imageId}
            ></img>
          </div>
        </div>
      ))}
    </div>
  )
}
export default ItemList

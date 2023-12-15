import ItemList from "./ItemList"

const RestaurantCategory = ({ data, showItems, onShow }) => {
  return (
    <div>
      <div className="w-8/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 rounded-sm">
        <div className="flex justify-between cursor-pointer" onClick={onShow}>
          <span className="font-bold text-md">
            {data.title} ({data.itemCards?.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  )
}

export default RestaurantCategory

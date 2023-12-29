import { useContext, useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../context/UserContext"
import { useSelector } from "react-redux"

const Header = () => {
  const [btnLabel, setBtnLabel] = useState("Login")
  const onlineStatus = useOnlineStatus()
  const { loggedInUser } = useContext(UserContext)
  //subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items)

  return (
    <div className="flex justify-between bg-green-100">
      <div>
        <img className="absolute w-24" src={LOGO_URL} />
      </div>
      <div>
        <ul className="flex flex-wrap p-4 m-4 font-normal">
          <li className="px-2">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-2 ">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 ">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-2 ">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-2 ">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-2 font-bold">
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>
          <button
            className="px-2 bg-green-400 rounded-md shadow-md"
            onClick={() => {
              btnLabel === "Login"
                ? setBtnLabel("LogOut")
                : setBtnLabel("Login")
            }}
          >
            {btnLabel}
          </button>
          <li className="px-2">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  )
}

export default Header

import { useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

const Header = () => {
  const intialValue = "Login"
  const [btnLabel, setBtnLabel] = useState(intialValue)
  const onlineStatus = useOnlineStatus()

  return (
    <div className="flex justify-between bg-blue-100">
      <div>
        <img className="w-24" src={LOGO_URL} />
      </div>
      <div>
        <ul className="flex p-4 m-4 font-normal">
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
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
          <li className="px-2 ">Cart</li>
          <button
            className="px-2"
            onClick={() => {
              btnLabel === intialValue
                ? setBtnLabel("LogOut")
                : setBtnLabel(intialValue)
            }}
          >
            {btnLabel}
          </button>
        </ul>
      </div>
    </div>
  )
}

export default Header

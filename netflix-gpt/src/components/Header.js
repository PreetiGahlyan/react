import React from "react"
import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useSelector } from "react-redux"

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector((store) => store.user)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/")
      })
      .catch((error) => {
        navigate("/error")
      })
  }
  return (
    <div className="flex justify-between">
      <img
        className="w-56 p-2"
        alt="logo"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />
      {user && (
        <div className="flex h-12 mt-4">
          <img className="w-12" alt="signedInUser" src={user?.photoURL} />
          <button
            onClick={handleSignOut}
            className="w-auto px-2 cursor-pointer font-bold text-white"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  )
}

export default Header

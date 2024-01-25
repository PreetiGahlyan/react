import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { auth } from "../utils/firebase"
import { useSelector } from "react-redux"
import { onAuthStateChanged, signOut } from "firebase/auth"

import { useDispatch } from "react-redux"
import { addUser, removeUser } from "../utils/userSlice"
import { LOGO, SUPPORTED_LANGUGES } from "../utils/constants"
import { toggleGptSearchView } from "../utils/gptSlice"
import { changeLanguage } from "../utils/configSlice"

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector((store) => store.user)
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        )
        navigate("/browse")
      } else {
        dispatch(removeUser())
        navigate("/")
      }
    })

    return () => unsubscribe()
  }, [])

  const handleSignOut = () => {
    signOut(auth)
      .then()
      .catch((error) => {
        navigate("/error")
      })
  }

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView())
  }

  const handleLanuageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className="flex justify-between">
      <img className="w-56 p-2" alt="logo" src={LOGO} />
      {user && (
        <div className="flex h-12 mt-4">
          {showGptSearch && (
            <select
              className="p-2 m-2 h-max bg-gray-700 text-white rounded-lg"
              onChange={handleLanuageChange}
            >
              {SUPPORTED_LANGUGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="p-2 w-auto rounded-lg m-2 h-max bg-purple-500 text-white"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
          <img
            className="w-12 rounded-lg"
            alt="signedInUser"
            src={user?.photoURL}
          />
          <button
            onClick={handleSignOut}
            className="w-auto px-8  rounded-lg cursor-pointer font-bold text-white"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  )
}

export default Header

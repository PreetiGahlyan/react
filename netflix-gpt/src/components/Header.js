import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { auth } from "../utils/firebase"
import { useSelector } from "react-redux"
import { onAuthStateChanged, signOut } from "firebase/auth"

import { useDispatch } from "react-redux"
import { addUser, removeUser } from "../utils/userSlice"
import { LOGO } from "../utils/constants"

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector((store) => store.user)
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

  return (
    <div className="flex justify-between">
      <img className="w-56 p-2" alt="logo" src={LOGO} />
      {user && (
        <div className="flex h-12 mt-4">
          <img className="w-12" alt="signedInUser" src={user?.photoURL} />
          <button
            onClick={handleSignOut}
            className="w-auto px-8 cursor-pointer font-bold text-white"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  )
}

export default Header

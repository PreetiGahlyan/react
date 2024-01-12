import React, { useRef, useState } from "react"
import Header from "./Header"
import { checkValidateData } from "../utils/validate"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth"
import { auth } from "../utils/firebase"
import { useDispatch } from "react-redux"
import { addUser } from "../utils/userSlice"
import { USER_PROFILE_IMAGE } from "../utils/constants"

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(false)
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const dispatch = useDispatch()
  const [error, setError] = useState(null)

  const toggleIsSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }

  const handleSubmit = () => {
    const emailAddress = emailRef.current.value
    const password = passwordRef.current.value
    const name = nameRef?.current?.value
    //validate form data
    const message = checkValidateData(
      emailAddress,
      password,
      isSignInForm ? "Preeti" : name
    )
    setError(message)

    if (message) return

    //sign in/sign up logic
    isSignInForm
      ? signInWithEmailAndPassword(auth, emailAddress, password)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user
          })
          .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            setError(`${errorCode} - ${errorMessage}`)
          })
      : createUserWithEmailAndPassword(auth, emailAddress, password)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user
            updateProfile(user, {
              displayName: name,
              photoURL: USER_PROFILE_IMAGE,
            }).then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              )
            })
          })
          .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            setError(`${errorCode} - ${errorMessage}`)
          })
  }

  return (
    <div className={`bg-first bg-cover bg-repeat h-screen`}>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black p-12 w-4/12 text-white rounded-md"
        >
          <h1 className="font-bold text-3xl mb-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              ref={nameRef}
              className="p-4 mt-4 w-full bg-gray-700 rounded-md"
            />
          )}
          <input
            type="text"
            ref={emailRef}
            placeholder="Email Address"
            className="p-4 mt-4 w-full bg-gray-700 rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            ref={passwordRef}
            className="p-4 mt-4 w-full bg-gray-700 rounded-md"
          />
          <p className="text-red-500 text-lg py-2">{error}</p>
          <button
            className="p-4 w-full my-6 bg-red-500 rounded-md"
            onClick={handleSubmit}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4" onClick={toggleIsSignInForm}>
            {isSignInForm
              ? "Already Registered? Sign In"
              : "New to Netflix? Sign Up"}{" "}
            Now
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login

import React, { useRef, useState } from "react"
import Header from "./Header"
import { checkValidateData } from "../utils/validate"
import { useNavigate } from "react-router-dom"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth"
import { auth } from "../utils/firebase"
import { useDispatch } from "react-redux"
import { addUser } from "../utils/userSlice"

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const navigate = useNavigate()
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
            navigate("/browse")
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
              photoURL: "https://avatars.githubusercontent.com/u/26164863?v=4",
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
            navigate("/browse")
          })
          .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            setError(`${errorCode} - ${errorMessage}`)
          })
  }

  return (
    <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/3aac2646-dd73-480d-b9b8-fbf55b24aff8/DE-en-20231225-popsignuptwoweeks-perspective_alpha_website_small.jpg')] bg-cover bg-repeat h-screen">
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

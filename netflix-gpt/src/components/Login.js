import React, { useState } from "react"
import Header from "./Header"

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)

  const toggleIsSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }

  const handleButtonClick = () => {
    //validate form data
  }

  return (
    <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/3aac2646-dd73-480d-b9b8-fbf55b24aff8/DE-en-20231225-popsignuptwoweeks-perspective_alpha_website_small.jpg')] bg-cover bg-repeat h-screen">
      <Header />
      <div className="flex justify-center">
        <form className="bg-black p-12 w-4/12 text-white rounded-md">
          <h1 className="font-bold text-3xl mb-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 mt-4 w-full bg-gray-700 rounded-md"
            />
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="p-4 mt-4 w-full bg-gray-700 rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-4 mt-4 w-full bg-gray-700 rounded-md"
          />
          <button
            className="p-4 w-full my-6 bg-red-500 rounded-md"
            onClick={handleButtonClick}
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

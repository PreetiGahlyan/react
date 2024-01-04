import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth"
import { auth } from "../utils/firebase"

export const signUpUser = (emailAddress, password) => {
  createUserWithEmailAndPassword(auth, emailAddress, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user
      return null
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      return `${errorCode} - ${errorMessage}`
    })
}

export const loginUser = (emailAddress, password) => {
  signInWithEmailAndPassword(auth, emailAddress, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user
      return null
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      return `${errorCode} - ${errorMessage}`
    })
}

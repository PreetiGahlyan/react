// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"

import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTCRtzzd58Fw9l_QUjIye1IISCtLqChKI",
  authDomain: "netflixgpt-f05df.firebaseapp.com",
  projectId: "netflixgpt-f05df",
  storageBucket: "netflixgpt-f05df.appspot.com",
  messagingSenderId: "50567495704",
  appId: "1:50567495704:web:714ffd075113dd4221436d",
  measurementId: "G-E70PKBSMYK",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const auth = getAuth()

import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDcNRp4bUfzOhVGJzMGqr1LqmOW4JyRqTs",
  authDomain: "jelly-spy.firebaseapp.com",
  projectId: "jelly-spy",
  storageBucket: "jelly-spy.appspot.com",
  messagingSenderId: "282956312851",
  appId: "1:282956312851:web:7123bb6987be5304436ae6",
  measurementId: "G-3H04TR7ZYH",
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

export const db = getFirestore(app)

export const googleAuthClient = new GoogleAuthProvider()

googleAuthClient.addScope("https://www.googleapis.com/auth/adwords")
googleAuthClient.setCustomParameters({
  access_type: "offline",
  prompt: "consent",
})

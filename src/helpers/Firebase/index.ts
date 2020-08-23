import firebase from 'firebase/app'
import 'firebase/auth'

import { FirebaseConfig } from './types'

const firebaseConfig: FirebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DB_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MSG_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const registerByEmail = async (
  email: string,
  password: string,
  displayName: string
): Promise<unknown> => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    const user = firebase.auth().currentUser
    user?.updateProfile({ displayName })

    return user
  } catch (error) {
    return error
  }
}

export const loginByEmail = (email: string, password: string): void => {
  firebase.auth().signInWithEmailAndPassword(email, password)
}

export default firebase

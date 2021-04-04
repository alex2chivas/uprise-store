import firebase from 'firebase/app'
import 'firebase/firebase-firestore'
import 'firebase/storage'
import 'firebase/auth'

// Initilaize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyB9ivwrpmC1eQAyvwPdlhsnqQ0nZp3nlRk',
  authDomain: 'uprise-6e435.firebaseapp.com',
  projectId: 'uprise-6e435',
  storageBucket: 'uprise-6e435.appspot.com',
  messagingSenderId: '1017945615858',
  appId: '1:1017945615858:web:0cb1ffdc9e6cd34f12cf6b',
  measurementId: 'G-RLLTCL8Z3Z'
}

firebase.initializeApp(firebaseConfig)

export const firebaseAppAuth = firebase.auth()

export const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
}

const storage = firebase.storage()

export { storage, firebase as default }

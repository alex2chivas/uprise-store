import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

export default combineReducers({
  form: formReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})

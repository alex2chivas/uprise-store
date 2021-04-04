import { createStore, applyMiddleware, compose } from 'redux'
import firebase from 'firebase/app'
import {
  reduxFirestore,
  getFirestore,
  createFirestoreInstance
} from 'redux-firestore'
import { getFirebase } from 'react-redux-firebase'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from './reducers'
import fbConfig from './config/fbConfig'
import { persistConfig } from './config/persistConfig'

const persistedReducer = persistReducer(persistConfig, reducers)
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose()

export const store = createStore(
  persistedReducer,
  composeEnhancers(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase, fbConfig)
  )
)

export const persistor = persistStore(store)

export const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

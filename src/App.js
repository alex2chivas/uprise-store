import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { PersistGate } from 'redux-persist/integration/react'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { persistor, rrfProps } from './store'

function App () {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router>
          <Container>
            <div className='App'>Working</div>{' '}
          </Container>
        </Router>
      </ReactReduxFirebaseProvider>
    </PersistGate>
  )
}

export default App

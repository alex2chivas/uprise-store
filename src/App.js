import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { PersistGate } from 'redux-persist/integration/react'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { persistor, rrfProps } from './store'

import Header from './component/Header'

function App () {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router>
          <Header />
          <Switch>
            <Container>
              <div className='App'>Working</div>
            </Container>
          </Switch>
        </Router>
      </ReactReduxFirebaseProvider>
    </PersistGate>
  )
}

export default App

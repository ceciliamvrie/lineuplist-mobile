import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import React from 'react'
import { PersistGate } from 'redux-persist/es/integration/react'

import configureStore from './redux/configureStore'
const { persistor, store } = configureStore()


import App from './app/App'

const AppWithStore = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)

AppRegistry.registerComponent('redditMobile', () => AppWithStore)

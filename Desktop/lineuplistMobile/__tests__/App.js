import 'react-native'
import React from 'react'
// import App from '../app/App'
import { Root } from '../app/config/router'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <App />
  )
})

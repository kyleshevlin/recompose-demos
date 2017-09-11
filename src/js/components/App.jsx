import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import Header from './Header'

const App = () => (
  <Provider store={store}>
    <Header />
  </Provider>
)

export default App

import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import Header from './Header'
import Main from './Main'

const App = () => (
  <Provider store={store}>
    <div>
      <Header />
      <Main />
    </div>
  </Provider>
)

export default App

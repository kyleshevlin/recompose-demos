import React from 'react'
import WithState from './sections/WithState'
import WithHandlers from './sections/WithHandlers'
import WithReducer from './sections/WithReducer'

const Main = () => (
  <main className="main">
    <WithState />
    <WithHandlers />
    <WithReducer />
  </main>
)

export default Main

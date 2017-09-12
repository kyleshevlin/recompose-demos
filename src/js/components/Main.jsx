import React from 'react'
import WithState from './sections/WithState'
import WithHandlers from './sections/WithHandlers'
import WithReducer from './sections/WithReducer'
import Lifecycle from './sections/Lifecycle'
import Pure from './sections/Pure'
import MapAndWithProps from './sections/MapAndWithProps'

const Main = () => (
  <main className="main">
    <WithState />
    <WithHandlers />
    <WithReducer />
    <Lifecycle />
    <Pure />
    <MapAndWithProps />
  </main>
)

export default Main

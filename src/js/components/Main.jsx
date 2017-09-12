import React from 'react'
import WithState from './sections/WithState'
import WithHandlers from './sections/WithHandlers'
import WithReducer from './sections/WithReducer'
import Lifecycle from './sections/Lifecycle'
import Pure from './sections/Pure'
import MapAndWithProps from './sections/MapAndWithProps'
import BranchAndRenderComponent from './sections/BranchAndRenderComponent'
import WeWillDoItLive from './sections/WeWillDoItLive'

const Main = () => (
  <main className="main">
    <WithState />
    <WithHandlers />
    <WithReducer />
    <Lifecycle />
    <Pure />
    <MapAndWithProps />
    <BranchAndRenderComponent />
    <WeWillDoItLive />
  </main>
)

export default Main

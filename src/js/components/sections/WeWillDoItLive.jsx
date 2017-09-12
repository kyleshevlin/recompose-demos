import React from 'react'
import CollapsibleSection from '../CollapsibleSection'
import WeWillDoItLiveExample from '../examples/WeWillDoItLiveExample'

const WeWillDoItLive = () =>
  <CollapsibleSection heading={'We Will Do It Live'}>
    <div style={{ padding: 30 }}>
      <WeWillDoItLiveExample />
    </div>
  </CollapsibleSection>

export default WeWillDoItLive

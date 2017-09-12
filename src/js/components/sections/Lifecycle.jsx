import React from 'react'
import CollapsibleSection from '../CollapsibleSection'
import LifecycleExample from '../examples/LifecycleExample'

const Lifecycle = () => (
  <CollapsibleSection heading={'lifecycle()'}>
    <div>
      <p>
        The <code>lifecycle</code> higher order component allows you to handle state with a
        Redux-like reducer pattern. Our <code>stateUpdaterName</code> becomes a{' '}
        <code>dispatch</code>. Similar to <code>withHandlers</code>, <code>lifecycle</code> takes an
        initial state, but as a fourth parameter. The third parameter is a reducer.
      </p>

      <p>The function signature looks like the following:</p>

      <pre>
        <code>{`
// lifecycle(
//   spec: Object,
// ): HigherOrderComponent

const withData = lifecycle({
  componentDidMount () {
    fetch('data.json')
      .then(response => response.json())
      .then(data => this.setState({ data })
  }
})
        `}</code>
      </pre>

      <h3>Example</h3>
      <LifecycleExample />
    </div>
  </CollapsibleSection>
)

export default Lifecycle

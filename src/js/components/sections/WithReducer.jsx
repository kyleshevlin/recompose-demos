import React from 'react'
import CollapsibleSection from '../CollapsibleSection'
import WithReducerExample from '../examples/WithReducerExample'

const WithReducer = () => (
  <CollapsibleSection heading={'withReducer()'}>
    <div>
      <p>
        The <code>withReducer</code> higher order component allows you to handle state with a
        Redux-like reducer pattern. Our <code>stateUpdaterName</code> becomes a{' '}
        <code>dispatch</code>. Similar to <code>withHandlers</code>, <code>withReducer</code> takes
        an initial state, but as a fourth parameter. The third parameter is a reducer.
      </p>

      <p>The function signature looks like the following:</p>

      <pre>
        <code>{`
// withReducer<S, A>(
//   stateName: string,
//   dispatchName: string,
//   reducer: (state: S, action: A) => S,
//   initialState: S | (ownerProps: Object) => S
// ): HigherOrderComponent

const withToggleReducer = withReducer(
  'isToggled',
  'dispatch',
  (state, action) => {
    switch (action.type) {
      case 'SHOW':
        return true

      case 'HIDE':
        return false

      case 'TOGGLE'
        return !state

      default:
        return state
    }
  },
  false
)
        `}</code>
      </pre>

      <h3>Example</h3>
      <WithReducerExample />
    </div>
  </CollapsibleSection>
)

export default WithReducer

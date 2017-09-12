import React from 'react'
import CollapsibleSection from '../CollapsibleSection'
import WithStateExample from '../examples/WithStateExample'

const WithState = () => (
  <CollapsibleSection heading={'withState()'}>
    <div>
      <p>
        The <code>withState</code> higher order component allows you to add state to SFCs. The state
        managed in the HOC is passed as props to the base component.
      </p>

      <p>The function signature looks like the following:</p>

      <pre>
        <code>{`
// withState(
//   stateName: string,
//   stateUpdaterName: string,
//   initialState: any | (props: Object) => any
// ): HigherOrderComponent

const withToggle = withState('isToggled', 'setToggle', false)
        `}</code>
      </pre>

      <h3>Example</h3>
      <WithStateExample />
    </div>
  </CollapsibleSection>
)

export default WithState

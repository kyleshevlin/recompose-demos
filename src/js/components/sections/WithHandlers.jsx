import React from 'react'
import CollapsibleSection from '../CollapsibleSection'
import WithHandlersExample from '../examples/WithHandlersExample'

const WithHandlers = () => (
  <CollapsibleSection heading={'withHandlers()'}>
    <div>
      <p>
        The <code>withHandlers</code> higher order component allows you to add event handlers for
        managing state. The handlers, as you may have guessed by now, get passed down as props.
      </p>

      <p>The function signature looks like the following:</p>

      <pre>
        <code>{`
// withHandlers(
//   handlerCreators: {
//     [handlerName: string]: (props: Object) => Function
//   }
// ): HigherOrderComponent

const withToggleHandlers = withHandlers({
  show: ({ toggle }) => () => toggle(true),
  hide: ({ toggle }) => () => toggle(false),
  toggle: ({ toggle }) => () => toggle(x => !x)
})
        `}</code>
      </pre>

      <h3>Example</h3>
      <WithHandlersExample />
    </div>
  </CollapsibleSection>
)

export default WithHandlers

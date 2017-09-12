import React from 'react'
import CollapsibleSection from '../CollapsibleSection'
import MapAndWithPropsExample from '../examples/MapAndWithPropsExample'

const MapAndWithProps = () => (
  <CollapsibleSection heading={'mapProps() & withProps()'}>
    <div>
      <p>
        The <code>mapProps</code> and <code>withProps</code> higher order components allow you to
        manipulate the props being passed to your base component.
      </p>
      <p>
        They are very similar. The main difference is that <code>mapProps</code> throws away the
        original props, while <code>withProps</code> merges with the original props.
      </p>

      <p>The function signatures look like the following:</p>

      <pre>
        <code>{`
// mapProps(
//   propsMapper: (ownerProps: Object) => Object,
// ): HigherOrderComponent

const alwaysAndOnlySteve = mapProps(({ name }) => {
  name: 'Steve'
})

// withProps(
//   createProps: (ownerProps: Object) => Object | Object
// ): HigherOrderComponent

const alwaysSteveAndTheRestOfHim = withProps(() => {
  name: 'Steve'
})
        `}</code>
      </pre>

      <h3>Example</h3>
      <MapAndWithPropsExample />
    </div>
  </CollapsibleSection>
)

export default MapAndWithProps

import React from 'react'
import CollapsibleSection from '../CollapsibleSection'
import BranchAndRenderComponentExample from '../examples/BranchAndRenderComponentExample'

const BranchAndRenderComponent = () =>
  <CollapsibleSection heading={'branch() & renderComponent()'}>
    <div>
      <p>
        The <code>branch</code> and <code>renderComponent</code> higher order components go hand in hand. With <code>branch</code>, we are able to conditionally render components. With <code>renderComponent</code>, we are able to type lift our components from SFCs to HOCs so we might be able to compose it with other HOCs.
      </p>

      <p>The function signatures look like the following:</p>

      <pre>
        <code>{`
// renderComponent(
//   Component: ReactClass | ReactFunctionalComponent | string
// ): HigherOrderComponent

// branch(
//   test: (props: Object) => boolean,
//   left: HigherOrderComponent,
//   right: ?HigherOrderComponent
// ): HigherOrderComponent

const withLoading = branch(
  ({ isLoading }) => isLoading,
  renderComponent(LoadingSpinner),
  renderComponent(MyComponentWithData)
)
        `}</code>
      </pre>
    </div>
    <BranchAndRenderComponentExample />
  </CollapsibleSection>

export default BranchAndRenderComponent

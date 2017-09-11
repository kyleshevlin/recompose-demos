import { compose, withState, withHandlers } from 'recompose'

const withToggle = compose(
  withState('isToggled', 'handleToggle', false),
  withHandlers({
    toggle: ({ handleToggle }) => () => handleToggle(isToggled => !isToggled)
  })
)

export default withToggle

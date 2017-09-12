import React from 'react'
import { withState } from 'recompose'

const withToggle = withState('toggledOn', 'toggle', false)

const StatusList = () => (
  <div className="StatusList">
    <div>pending</div>
    <div>inactive</div>
    <div>active</div>
  </div>
)

const Status = withToggle(({ status, toggledOn, toggle }) => (
  <span onClick={() => toggle(x => !x)}>
    {status}
    {toggledOn && <StatusList />}
  </span>
))

const Tooltip = withToggle(({ text, children, toggledOn, toggle }) => (
  <span>
    {toggledOn && <div className="Tooltip">{text}</div>}
    <span onMouseEnter={() => toggle(true)} onMouseLeave={() => toggle(false)}>
      {children}
    </span>
  </span>
))

const User = ({ name, status }) => (
  <div className="User">
    <Tooltip text="Cool Dude!">{name}</Tooltip>
    {'—'}
    <Status status={status} style={{ cursor: 'pointer' }} />
  </div>
)

const WithStateExample = () => <User name="Kyle" status="active" />

export default WithStateExample

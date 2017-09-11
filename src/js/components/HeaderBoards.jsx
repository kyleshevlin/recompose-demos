import React from 'react'
import PropTypes from 'prop-types'
import withToggle from '../hocs/withToggle'

const fakeBoards = [{ id: 1, name: 'Board 1' }, { id: 2, name: 'Board 2' }]

const HeaderBoards = ({ isToggled, toggle }) => (
  <div className="header-boards">
    <button className="header-boards-toggle" onClick={toggle}>
      Boards
    </button>
    {isToggled && (
      <div className="header-boards-list-wrap">
        <ul className="header-boards-list">
          {fakeBoards.map(board => (
            <li className="header-boards-list-item" key={board.id}>
              {board.name}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
)

HeaderBoards.propTypes = {
  isToggled: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
}

export default withToggle(HeaderBoards)

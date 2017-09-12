import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Section = styled.section`
  padding: 15px 30px;
  border-top: 1px solid #ddd;
`

const Toggle = styled.button`
  display: inline-block;
  vertical-align: middle;
  width: 30px;
  height: 30px;
  background-color: transparent;
  font-size: 16px;
  text-align: center;
  padding: 0;
  border: none;
  margin-right: 10px;
  cursor: pointer;
`

const Heading = styled.h2`
  display: inline-block;
  vertical-align: middle;
  margin-top: 0;
  margin-bottom: 0;
`

const Main = styled.div`padding-bottom: 60px;`

class CollapsibleSection extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isCollapsed: props.isInitiallyCollapsed
    }
  }

  toggleCollapsed = () => {
    this.setState(prevState => ({
      isCollapsed: !prevState.isCollapsed
    }))
  }

  render() {
    const { children, heading } = this.props
    const { isCollapsed } = this.state

    return (
      <Section className="collapsible_section">
        <header className="collapsible_section-header">
          <Toggle className="collapsible_section-header-toggle" onClick={this.toggleCollapsed}>
            {isCollapsed ? '[+]' : '[-]'}
          </Toggle>
          <Heading className="collapsible_section-header-heading">{heading}</Heading>
        </header>

        {!isCollapsed && <Main className="collapsible_section-main">{children}</Main>}
      </Section>
    )
  }
}

CollapsibleSection.propTypes = {
  children: PropTypes.element.isRequired,
  heading: PropTypes.string.isRequired,
  isInitiallyCollapsed: PropTypes.bool
}

CollapsibleSection.defaultProps = {
  isInitiallyCollapsed: true
}

export default CollapsibleSection

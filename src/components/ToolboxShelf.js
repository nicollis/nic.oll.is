import React from 'react'
import { Col } from 'react-bootstrap'
import Logo from './Logo/Logo'
import PropTypes  from 'prop-types'

const ToolboxShelf = (props) => {
  const { title, tools } = props
  return (
    <div>
      <h3>{ title }</h3>
      <hr />
      <Col lg={11} lgOffset={1} smOffset={1} mdOffset={0} className="icons">
        { tools.map((tool) => {return <Logo key={tool.id} image={tool.image} alt={`#{tool.id} logo`}/>}) }
      </Col>
    </div>
  )
}

ToolboxShelf.propTypes = {
  title: PropTypes.string.isRequired,
  tools: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default ToolboxShelf
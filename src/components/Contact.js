import React from 'react'
import { Col } from 'react-bootstrap'
import FontAwesome from './FontAwesome'
import PropTypes from 'prop-types'

const Contact = (props) => {
  return (
    <Col xs={6} md={3} className="contact-wrapper">
      <a href={props.to} target="_blank" rel="noopener noreferrer">
        <FontAwesome icon={props.icon} size={3} class='color-coral' />
      </a>
    </Col>
  )
}

Contact.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

export default Contact
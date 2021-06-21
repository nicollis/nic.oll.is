import React from 'react'
import FontAwesome from './FontAwesome'
import PropTypes from 'prop-types'

const Contact = (props) => {
  return (
    <div className="contact-wrapper">
      <a href={props.to} target="_blank" rel="noopener noreferrer">
        <FontAwesome icon={props.icon} size={3} brand={props.brand} class='primary-color' />
      </a>
    </div>
  )
}

Contact.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  brand: PropTypes.string,
}

export default Contact

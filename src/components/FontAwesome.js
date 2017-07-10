import React from 'react'
import PropTypes from 'prop-types'

const FontAwesome = (props) => {
  return (
    <i className={`fa fa-${props.icon} fa-${props.size || 1}x ${props.class}`} />
  )
}

FontAwesome.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
  class: PropTypes.string,
}

export default FontAwesome
import React from 'react'
import PropTypes from 'prop-types'

const FontAwesome = (props) => {
  return (
    <i className={`fa fa-${props.icon}`} />
  )
}

FontAwesome.propTypes = {
  icon: PropTypes.string.isRequired
}

export default FontAwesome
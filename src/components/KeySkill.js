import React from 'react'
import { Badge } from 'react-bootstrap'
import PropTypes  from 'prop-types'

const KeySkill = (props) => {
  return (
      <div className="skill">
        <Badge variant={props.color}>{props.name}</Badge>
      </div>
  )
}

KeySkill.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string
}
KeySkill.defaultProps = {
    color: "ollis"
}

export default KeySkill

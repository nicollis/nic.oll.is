import React from 'react'
import { Row } from 'react-bootstrap'
import PropTypes from 'prop-types'

const Section = (props) => {
  return (
    <Row className="justify-content-md-center top-spacer">
      <h2 id={props.title.toLowerCase()} className='text-center'>{props.title}</h2>
      <hr />
      { props.children }
    </Row>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Section

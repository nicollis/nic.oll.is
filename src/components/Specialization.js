import React from 'react'
import { Col } from 'react-bootstrap'
import Logo from './Logo/Logo'
import PropTypes  from 'prop-types'

const Specialization = (props) => {
  const { title, classifications } = props.data
  return (
    <Col sm={12} className="specialization">
      <h3>{ title }</h3>
      <hr/>
      { classifications.map((classification) => {
        return <Col sm={4} md={6} key={title+classification.name}>
          <h4>{classification.name}:</h4> 
          { classification.icons.map((icon) => {
            return <Logo medium key={icon.id} image={icon.image} alt={icon.id}/>
          }) }
        </Col>
      }) }
    </Col>
  )
}

Specialization.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    classifications: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        icons: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
          })
        ).isRequired
      }).isRequired
    ).isRequired
  }).isRequired
}

export default Specialization

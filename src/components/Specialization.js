import React from 'react'
import { Col, Badge } from 'react-bootstrap'
import Logo from './Logo/Logo'
import PropTypes  from 'prop-types'

const Specialization = (props) => {
  const { title, classifications } = props.data
  return (
    <Col sm={{span: "auto"}} className="specialization">
      <h3>{ title }:</h3>
      { classifications.map((classification) => {
        return <Col sm={"auto"} className="spec-rows" key={title+classification.name}>
          <h4 className="inline">{classification.name}:</h4>
          { classification.icons.map((icon) => {
              if (icon.image !== undefined) {
                  return <Logo small key={icon.id} image={icon.image} alt={icon.id}/>
              } else {
                  return <Badge className="label" key={icon.id} variant="ollis">{icon.name}</Badge>
              }
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
              image: PropTypes.string,
              name: PropTypes.string
          })
        ).isRequired
      }).isRequired
    ).isRequired
  }).isRequired
}

export default Specialization

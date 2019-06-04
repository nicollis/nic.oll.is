import React from 'react'
import { Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className="container-fluid no-padding">
      <Col xs={12} className="no-padding">
        <div className="footer primary-background-color">
          <div className="container">
            <div className="footer-copyright header">Created by Ollis</div>
          </div>
        </div>
      </Col>
    </div>
  )
}

export default Footer

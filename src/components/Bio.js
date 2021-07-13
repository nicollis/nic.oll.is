import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Me from '../images/Memoji.png'

const Bio = () => {
  return (
    <Row id="bio">
      <div id="home" className="text-center">
        <div className="container">
          <Row className="justify-content-md-center">
            <Col md={{span: "auto"}} className="header-center-title header">
              <div className="first-name header-center-name">Nicholas&nbsp;</div>
              <div className="last-name header-center-name">Ollis</div>
              <div className="job-title primary-color">Solutions Architect<span style={{"color": "#434a54"}}>,</span></div>
              <div className="job-title-sub sub-color">Machine Learning</div>
            </Col>
            <Col md={{span: "auto"}} className="header-center-image">
              <div style={{"backgroundImage": `url(${Me})`}} className="profile-pic" alt="profile pic" />
            </Col>
          </Row>
        </div>
        <Row className="justify-content-md-center">
          <Col md={8} className="text-left">
            <div className="about"><i className="bi bi-chat-right-quote primary-color"/>&nbsp;
            Hi, I am Nic, a <code>Solutions Architect</code> located in "Chicago," Illinois,
              specializing in <code>Machine Learning</code>. With a history in <code>iOS</code> and <code>Full Stack Web</code>,
              in addition to taking models from concept to deployment; Looking for a new dev to join your team? <a href="#contact"><code>Let's chat</code></a>.</div>
          </Col>
        </Row>
      </div>
    </Row>
  )
}

export default Bio

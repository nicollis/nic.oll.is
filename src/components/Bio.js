import React from 'react'
import { Row, Col } from 'react-bootstrap'
import FontAwesome from './FontAwesome'
import Me from '../images/Me.jpg'

const Bio = () => {
  return (
    <Row>
      <div id="home" className="text-center">
        <div className="container">
          <Row>
            <Col sm={5} smOffset={2} className="header-center-image">
              <img src={Me} className="profile-pic" alt="profile pic" />
            </Col>
            <Col sm={5} className="header-center-title header">
              <div className="first-name header-center-name">Nic&nbsp;</div>
              <div className="last-name header-center-name">Ollis<span className='cursor' style={{position: 'absolute'}}></span></div>
              <div className="job-title color-coral">Software Eng</div>
            </Col>
          </Row>
        </div>
        <Col md={8} mdOffset={2} className="text-left">
          <div className="about"><FontAwesome icon='quote-left' size={3}/>&nbsp;&nbsp;&nbsp;
          Hi, I'm Nic. I'm a <code>Software Engineer</code> 
          located in Bloomington, Indiana that <code>specializes in making startups awesome</code>. 
          I focus primarily on creating amazing websites using <code>Ruby on Rails</code>. 
          As well, I also create apps for <code>iOS</code>. Looking for a new dev to join your team, 
          or wanting to launch a new site/app? <a href="#contact"><code>Let's chat</code></a>.</div>
        </Col>
      </div>
    </Row>
  )
}

export default Bio
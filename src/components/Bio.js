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
              <div className="last-name header-center-name">Ollis<span className='cursor blinking-cursor' style={{position: 'absolute'}}>_</span></div>
              <div className="job-title color-coral">Software Eng</div>
            </Col>
          </Row>
        </div>
        <Col md={8} mdOffset={2} className="text-left">
          <div className="about"><FontAwesome icon='quote-left' size={3}/>&nbsp;&nbsp;&nbsp;
          Hi, I'm Nic. I'm a <code>Software Engineer</code> located in Indianapolis, Indiana. 
          I focus primarily on creating amazing applications for <code>iOS using Swift.</code> 
          As a full stack mobile engineer, I have implemented solutions from not only the mobile side, 
          but <code>server side and web front ends.</code> I have a history of <code>fostering developer growth</code>, though mentorships,
          speaking at meet up groups, and online tutorials. Looking for a new dev to join your team, 
          or wanting to build a new app/launch a new site? <a href="#contact"><code>Let's chat</code></a>.</div>
        </Col>
      </div>
    </Row>
  )
}

export default Bio

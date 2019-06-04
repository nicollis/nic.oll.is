import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import Bio from './components/Bio'
import Section from './components/Section'
import Specialization from './components/Specialization'
import Logo from './components/Logo/Logo'
import Timeline from './components/Timeline'
import Job from './components/Job'
import Training from './components/Training'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'
import * as $ from './data'


class App extends Component {
  state = {
    specializations: $.Specializations,
    toolbox: $.Toolset,
    events: $.Events,
    career: $.Jobs,
    training: $.Training
  }

  render() {
    return (
      <div>
        <div className="container max">

          <Bio />

          <Section title="Specializations">
            <Col md={8} mdOffset={2} id="specializations">
              { Object.values(this.state.specializations).map((spec) => {
                return <Specialization data={spec}/>
              }) }
            </Col>
            <Col md={8} mdOffset={2} id="history">
              <hr/>
              <h3 class="h6">History with:</h3>
              { this.state.toolbox.history.map((icon) => {return <Logo small key={icon.id} image={icon.image} alt={icon.id}/>}) }
            </Col>
          </Section>

          <Section title="Career Development">
            { this.state.career.map((job) => {return(<Job details={job}/>)}) }
          </Section>

          <Section title="Training">
            { this.state.training.map((training) => {return(<Training details={training}/>)}) }
          </Section>

          <Section title='Timeline'>
            <Col xs={12}>
              <Timeline events={this.state.events}/>
            </Col>
          </Section>

          <Section title="Contact & Social">
            <Col xs={12} id="contact">
              <Col md={6} mdOffset={3} className="contact-icons text-center">
                <Contact to='mailto:nic@oll.is'  icon='at' brand='false' />
                <Contact to='http://twitter.com/nic_ollis' icon='twitter'  brand='true'/>
                <Contact to='https://www.kaggle.com/nicollis' icon='kaggle' brand='true'/>
                <Contact to='https://medium.com/program-practical' icon='medium' brand='true'/>
                <Contact to='https://www.youtube.com/c/programpracticaltv' icon='youtube' brand='true'/>
                <Contact to='https://www.linkedin.com/in/nicollis' icon='linkedin' brand='true'/>
                <Contact to='https://github.com/nicollis' icon='github'  brand='true'/>
                <Contact to='https://www.twitch.tv/programpractical' icon='twitch' brand='true'/>
              </Col>
            </Col>
          </Section>

        </div>

        <Footer />
      </div>
    );
  }
}

export default App;

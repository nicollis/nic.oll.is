import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import Header from './components/Header'
import Bio from './components/Bio'
import Section from './components/Section'
import ToolboxShelf from './components/ToolboxShelf'
import Timeline from './components/Timeline'
import Job from './components/Job'
import Training from './components/Training'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'
import * as $ from './data'


class App extends Component {
  state = {
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

          <Section title="Techinical Toolbox">
            <Col md={8} mdOffset={2} id="toolbox">
              <ToolboxShelf title='High Level' tools={this.state.toolbox.high} />
              <ToolboxShelf title='Mid Level' tools={this.state.toolbox.mid} />
              <ToolboxShelf title='Low Level' tools={this.state.toolbox.low} />
              <ToolboxShelf title='Deploy' tools={this.state.toolbox.deploy} />
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
                <Contact to='mailto:nic@oll.is'  icon='envelope' />
                <Contact to='http://twitter.com/nic_ollis' icon='twitter' />
                <Contact to='https://medium.com/program-practical' icon='medium' />
                <Contact to='https://www.youtube.com/c/programpracticaltv' icon='youtube' />
                <Contact to='https://www.linkedin.com/in/nicollis' icon='linkedin' />
                <Contact to='https://github.com/nicollis' icon='github' />
                <Contact to='https://stackoverflow.com/story/ollis' icon='stack-overflow' />
                <Contact to='https://calendly.com/nollis' icon='calendar' />
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

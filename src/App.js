import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import Bio from './components/Bio'
import Section from './components/Section'
import KeySkill from "./components/KeySkill";
import Specialization from './components/Specialization'
import Job from './components/Job'
import Training from './components/Training'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'
import * as $ from './data'


class App extends Component {
  state = {
    skills: $.Skills,
    specializations: $.Specializations,
    career: $.Career,
    training: $.Training
  }

  render() {
    return (
      <div>
        <div className="container max">

          <Bio />

          <Section title="Key ML Skills">
            <Col md={{span: 8}} id="skills">
              { this.state.skills.map((skill) => {return <KeySkill key={skill.name} name={skill.name} color={skill.color} />})}
            </Col>
          </Section>

          <Section title="Tech Toolbox" id="specializations">
            { Object.values(this.state.specializations).map((spec) => {
              return <Specialization data={spec} key={spec.title}/>
            }) }
          </Section>

          <Section title="Career Development">
            { Object.keys(this.state.career.Career).map((key) => {
              let job = this.state.career.Career[key];
              return(<Job details={job} key={key}/>)})
            }
          </Section>

          <Section title="Training">
            { this.state.training.map((training) => {return(<Training details={training} key={training.title}/>)}) }
          </Section>

          <Section title="Contact & Social">
            <Col md={6} className="text-center">
              <Contact to='mailto:nic@oll.is'  icon='at' brand='false' />
              <Contact to='http://twitter.com/nic_ollis' icon='twitter'  brand='true'/>
              <Contact to='https://www.kaggle.com/nicollis' icon='kaggle' brand='true'/>
              <Contact to='https://medium.com/program-practical' icon='medium' brand='true'/>
              <Contact to='https://www.youtube.com/c/programpracticaltv' icon='youtube' brand='true'/>
              <Contact to='https://www.linkedin.com/in/nicollis' icon='linkedin' brand='true'/>
              <Contact to='https://github.com/nicollis' icon='github'  brand='true'/>
              <Contact to='https://www.twitch.tv/programpractical' icon='twitch' brand='true'/>
            </Col>
          </Section>

        </div>

        <Footer />
      </div>
    );
  }
}

export default App;

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
import ClusterTruck from './images/ClusterTruck.png'
import Proposable from './images/Proposable.png'
import Udacity from './images/udacity.png'
import BigNerdRanch from './images/BigNerdRanch.png'

class App extends Component {
  state = {
    toolbox: [
      {id: 'swift', image: 'swift.svg', level: 'high'},
      {id: 'apple', image: 'apple.svg', level: 'high'},
      {id: 'ruby', image: 'ruby.svg', level: 'high'},
      {id: 'rails', image: 'rails-logo.svg', level: 'high'},
      {id: 'javascript', image: 'javascript.svg', level: 'high'},
      {id: 'react', image: 'react.svg', level: 'high'},
      {id: 'angular', image: 'angular-icon.svg', level: 'mid'},
      {id: 'c++', image: 'c++.svg', level: 'mid'},
      {id: 'postgresql', image: 'postgresql-wordmark.svg', level: 'mid'},
      {id: 'android', image: 'android-icon.svg', level: 'mid'},
      {id: 'java', image: 'java.svg', level: 'mid'},
      {id: 'kotlin', image: 'kotlin.svg', level: 'mid'},
      {id: 'elixir', image: 'elixir.png', level: 'low'},
      {id: 'python', image: 'python.svg', level: 'low'},
      {id: 'c', image: 'c.svg', level: 'low'},
      {id: 'php', image: 'php-flat.svg', level: 'low'},
      {id: 'nodejs', image: 'nodejs-icon.svg', level: 'low'},
      {id: 'c-sharp', image: 'c-sharp.svg', level: 'low'},
      {id: 'capistrano', image: 'capistrano.svg', level: 'deploy'},
      {id: 'heroku', image: 'heroku.svg', level: 'deploy'},
      {id: 'saltstack', image: 'saltstack.svg', level: 'deploy'},
      {id: 'google-cloud', image: 'google-cloud.svg', level: 'deploy'},
      {id: 'firebase', image: 'firebase.svg', level: 'deploy'},
      {id: 'aws', image: 'aws-ec2.svg', level: 'deploy'},
    ],
    events: [
      { // EXAMPLE EVENT
        title: '',
        details: '',
        completedYear: 'example',
        dateTag: '',
        link: '',
        dotColor: '',
        dateColor: '',
        tech: [
          { title: '', style: '', class: ''},
        ]
      },

      { 
        title: 'iOS Playgrounds',
        details: 'An group of playgrounds of small examples of experimenting with iOS development',
        completedYear: 'in-progress',
        dateTag: 'Jan \'18',
        link: 'https://github.com/nicollis/iOS-Playgrounds',
        dotColor: 'bg-swift',
        dateColor: 'color-swift',
        tech: [
          { title: 'Swift', style: 'normal', class: 'bg-swift'},
          { title: 'iOS', style: 'primary', class: ''},
          { title: 'CoreML', style: 'info', class: ''},
          { title: 'ARKit', style: 'info', class: ''},
        ]
      },
      {
        title: 'Grow with Google',
        details: 'A scholarship to learn Android Development from Google and Udacity',
        completedYear: 'in-progress',
        dateTag: 'Feb \'18',
        link: 'https://www.udacity.com/grow-with-google',
        dotColor: 'bg-java',
        dateColor: 'color-java',
        tech: [
          { title: 'Java', style: 'normal', class: 'bg-java' },
          { title: 'Android', style: 'primary' },        ]
      },
      { 
        title: 'Swift Playgrounds',
        details: 'A small collection of playgrounds broken into projects while experimenting with swift',
        completedYear: '2017',
        dateTag: 'Dec 17th',
        link: 'https://github.com/nicollis/Swift-Playgrounds',
        dotColor: 'bg-swift',
        dateColor: 'color-swift',
        tech: [
          { title: 'Swift', style: 'normal', class: 'bg-swift'},
          { title: 'iOS', style: 'primary', class: ''},
          { title: 'CoreData', style: 'info', class: ''},
        ]
      },
      {
        title: 'Mobile Flashcards',
        details: 'A small flashcard app written in React Native for the React Nanodegree Program',
        completedYear: '2017',
        dateTag: 'Oct 14th',
        link: 'https://github.com/nicollis/Cards',
        dotColor: 'bg-js',
        dateColor: 'color-js',
        tech: [
          { title: 'ES6', style: 'normal', class: 'bg-js' },
          { title: 'React', style: 'primary' },
          { title: 'Redux', style: 'primary' },
          { title: 'React Native', style: 'normal' },
        ]
      },
      {
        title: 'Readable',
        details: 'A Reddit clone built with React & Redux for Udacity\'s React Nano Degree Program',
        completedYear: '2017',
        dateTag: 'Sep 16th',
        link: 'https://github.com/nicollis/Readable',
        dotColor: 'bg-js',
        dateColor: 'color-js',
        tech: [
          { title: 'ES6', style: 'normal', class: 'bg-js' },
          { title: 'React', style: 'primary' },
          { title: 'Redux', style: 'primary' },
          { title: 'REST', style: 'success' },
          { title: 'Firebase', style: 'normal' },
        ]
      },
      {
        title: 'MyReads',
        details: 'GoodReads Clone made in React for Udacity\'s React Nano Degree Program',
        completedYear: '2017',
        dateTag: 'Jul 8th',
        link: 'https://github.com/nicollis/MyReads',
        dotColor: 'bg-js',
        dateColor: 'color-js',
        tech: [
          { title: 'ES6', style: 'normal', class: 'bg-js' },
          { title: 'React', style: 'primary' },
          { title: 'REST', style: 'success' },
          { title: 'Heroku', style: 'normal' },
        ]
      },
      {
        title: 'ClusterForecast',
        details: 'A small React project pulling in ClusterTruck\'s API and a Weather API to predict demand on their kitchen of any given day.',
        completedYear: '2017',
        dateTag: 'Jun 12th',
        link: 'https://github.com/nicollis/ClusterForecast',
        dotColor: 'bg-js',
        dateColor: 'color-js',
        tech: [
          { title: 'ES6', style: 'normal', class: 'bg-js' },
          { title: 'React', style: 'primary' },
          { title: 'REST', style: 'success' },
          { title: 'Heroku', style: 'normal' },
        ]
      },
      {
        title: 'Otter',
        details: 'A simple twitter clone created as a playground for Rails 5. Testing out webpack and slim. Enabled GraphQL API for testing its implementation in Rails.',
        completedYear: '2017',
        dateTag: 'May 19th',
        link: 'https://github.com/nicollis/otter',
        dotColor: 'bg-coral',
        dateColor: 'color-coral',
        tech: [
          { title: 'Rails 5', style: 'danger'},
          { title: 'Slim', style: 'primary'},
          { title: 'PostgreSQL', style: 'info'},
          { title: 'GraphQL', style: 'success'},
          { title: 'Heroku', style: 'normal'},
          { title: 'AWS S3', style: 'normal'},
        ]
      },
      {
        title: 'Pitch Perfect',
        details: 'App experimenting with controls avaliable for sound modulation via the AVAudioEngine in iOS.',
        completedYear: '2017',
        dateTag: 'May 1st',
        link: 'https://github.com/nicollis/pitch-perfect',
        dotColor: 'bg-swift',
        dateColor: 'color-swift',
        tech: [
          { title: 'Swift', style: 'warning', class: 'bg-swift'},
          { title: 'iOS 10', style: 'primary'},
          { title: 'AVAudioEngine', style: 'info'},
        ]
      },
      {
        title: 'rubocop-git',
        details: 'added in an --auto-correct flag that only runs rubocop and corrects changes based on your changes as seen by git.',
        completedYear: '2017',
        dateTag: 'Feb 18th',
        link: 'https://github.com/nicollis/rubocop-git',
        dotColor: 'bg-coral',
        dateColor: 'color-coral',
        tech: [
          { title: 'Ruby', style: 'danger'},
          { title: 'rubocop', style: 'danger'},
          { title: 'git', style: 'normal'},
        ]
      },
      {
        title: 'GoodAsOldPhones',
        details: 'A simple app while learning xcode, swift, and iOS 10',
        completedYear: '2016',
        dateTag: 'Nov 20th',
        link: 'https://github.com/nicollis/GoodAsOldPhones',
        dotColor: 'bg-swift',
        dateColor: 'color-swift',
        tech: [
          { title: 'Swift', style: 'warning', class: 'bg-swift'},
          { title: 'iOS 10', style: 'primary' },
        ]
      },
      {
        title: 'webfont-select',
        details: 'A jQuery UI Widget to provide a simple dropdown select menu of Google Font\'s avaliable fonts. Including a search input to narrow down selectable fonts. Easily implementable in Rails by using the webfont-select-rails gem.',
        completedYear: '2016',
        dateTag: 'Nov 9th',
        link: 'https://github.com/nicollis/webfont-select',
        dotColor: 'bg-js',
        dateColor: 'color-js',
        tech: [
          { title: 'CoffeeScript', style: 'primary'},
          { title: 'Webfont Loader', style: 'info'},
          { title: 'RubyGems', style: 'normal'},
        ]
      },
      {
        title: 'Pinteresting',
        details: 'Pinterest clone written on Ruby on Rails, using ImageMagic for image processing and S3 storage.',
        completedYear: '2016',
        dateTag: 'Mar 5th',
        link: 'https://github.com/nicollis/pinteresting',
        dotColor: 'bg-coral',
        dateColor: 'color-coral',
        tech: [
          { title: 'Rails 4', style: 'danger'},
          { title: 'CoffeeScript', style: 'primary'},
          { title: 'PostgreSQL', style: 'info'},
          { title: 'Heroku', style: 'normal'},
          { title: 'AWS S3', style: 'normal'},
        ]
      },
      {
        title: 'INCapitolHack',
        details: 'Trial by fire, assisted in front end development while learning the MEAN stack in 24 hours.',
        completedYear: '2016',
        dateTag: 'Mar 1st',
        link: 'https://github.com/nicollis/myigaservice',
        dotColor: 'bg-js',
        dateColor: 'color-js',
        tech: [
          { title: 'TypeScript', style: 'normal', class: 'bg-js'},
          { title: 'AngularJS', style: 'primary'},
          { title: 'NodeJS', style: 'primary'},
          { title: 'ExpressJS', style: 'primary'},
          { title: 'MongoDB', style: 'info'},
          { title: 'REST', style: 'success'},
        ]
      },
    ],
    career: [
      {
        logo: Udacity,
        title: "Mentor & Reviewer",
        dates: "10-2017 | ...",
        company: "Udacity",
        description: "Working 1-on-1 with students in the React program to help them make progress, keep on track, and reach graduation. I also review projects students submitted for their certification.",
        tech: [
          {id: 'react', image: 'react.svg'},
          {id: 'javascript', image: 'javascript.svg'}
        ]
      },
      {
        logo: ClusterTruck,
        title: "Software Engineer",
        dates: "07-2017 | 03-2018",
        company: "ClusterTruck",
        description: "Led development of the driver products. Build out managment system and dashboard. Refactored and Redesigned native mobile apps written in Swift and Java. Managed beta groups and communication with drivers to develop and address their needs.",
        tech: [
          {id: 'swift', image: 'swift.svg'},
          {id: 'ios', image: 'apple.svg'},
          {id: 'ruby', image: 'ruby.svg'},
          {id: 'rails', image: 'rails-logo.svg'},
          {id: 'javascript', image: 'javascript.svg'},
          {id: 'react', image: 'react.svg'},
          {id: 'java', image: 'java.svg'},
          {id: 'android', image: 'android-icon.svg'},
          {id: 'elixir', image: 'elixir.png'},
          {id: 'phoenix', image: 'phoenix.svg'},
          {id: 'postgres', image: 'postgresql.svg'},
          {id: 'redis', image: 'redis.svg'},
          {id: 'salt', image: 'saltstack.svg'},
        ]
      },
      {
        logo: Proposable,
        title: "Rails Developer",
        company: "Proposable",
        dates: "05-2016 | 07-2017",
        description: "Developing a web based Proposal creation, tracking, and sell analystics tools.",
        tech: [
          {id: 'ruby', image: 'ruby.svg'},
          {id: 'rails', image: 'rails-logo.svg'},
          {id: 'haml', image: 'haml.svg'},
          {id: 'CoffeeScript', image: 'coffeescript.svg'},
          {id: 'angular', image: 'angular-icon.svg'},
          {id: 'postgres', image: 'postgresql.svg'},
          {id: 'redis', image: 'redis.svg'},
          {id: 'capistrano', image: 'capistrano.svg'},
        ]
      }
    ],
    training: [
      {
        logo: BigNerdRanch,
        title: "Advanced iOS",
        link: "https://www.bignerdranch.com/bootcamps/courses/advanced-ios-bootcamp/",
        company: "Big Nerd Ranch",
        description: "Advance course from Big Nerd Ranch, teaching advanced topics in iOS development including debugging, maximizing performance, animations, and understanding iOS, Swift, and Obj-C under the hood, and more.",
        tech: [
          {id: 'swift', image: 'swift.svg'},
          {id: 'apple', image: 'apple.svg'},
          {id: 'objective-c', image: 'obj-c.png'},
          {id: 'c', image: 'c.svg'} 
        ]
      },
      {
        logo: Udacity,
        title: "Android Development",
        link: "https://www.udacity.com/grow-with-google",
        company: "Udacity",
        description: "Grow with Google is a scholarship program created and provided by Google through Udacity. As a recipient I was trained in Android Development and its best practices as set by Google.",
        tech: [
          {id: 'android', image: 'android-icon.svg'},
          {id: 'java', image: 'java.svg'} 
        ]
      },
      {
        logo: Udacity,
        title: "React Nanodegree",
        link: "https://www.udacity.com/course/react-nanodegree--nd019",
        company: "Udacity",
        description: "Extensive courses by React Training (React Fundamentals, React and Redux, and React Native), plus expert project reviews.",
        tech: [
          {id: 'react', image: 'react.svg'},
          {id: 'redux', image: 'redux.svg'},
          {id: 'react-router', image: 'react-router.svg'},
          {id: 'javascript', image: 'javascript.svg'} 
        ]
      },
    ] 
  }

  render() {
    return (
      <div>
        <div className="container max">

          <Header />

          <Bio />

          <Section title="Techinical Toolbox">
            <Col md={8} mdOffset={2} id="toolbox">
              <ToolboxShelf title='High Level' tools={this.state.toolbox.filter((tool) => { return tool.level === 'high' })} />
              <ToolboxShelf title='Mid Level' tools={this.state.toolbox.filter((tool) => { return tool.level === 'mid' })} />
              <ToolboxShelf title='Low Level' tools={this.state.toolbox.filter((tool) => { return tool.level === 'low' })} />
              <ToolboxShelf title='Deploy' tools={this.state.toolbox.filter((tool) => { return tool.level === 'deploy' })} />
            </Col>
          </Section>

          <Section title="Career Development">
            { this.state.career.map((job) => {return(<Job details={job}/>)}) }
          </Section>

          <Section title="Training">
            { this.state.training.map((training) => {return(<Training details={training}/>)}) }
          </Section>

          <Section title='Projects Roadmap'>
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

import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import Header from './components/Header'
import Bio from './components/Bio'
import Section from './components/Section'
import ToolboxShelf from './components/ToolboxShelf'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css';

class App extends Component {
  state = {
    toolbox: [
      {id: 'ruby', image: 'ruby-flat.svg', level: 'high'},
      {id: 'rails', image: 'rails-logo.svg', level: 'high'},
      {id: 'javascript', image: 'javascript.svg', level: 'high'},
      {id: 'html5', image: 'html-5.svg', level: 'high'},
      {id: 'sass', image: 'sass.svg', level: 'high'},
      {id: 'react', image: 'react.svg', level: 'high'},
      {id: 'angular', image: 'angular-icon.svg', level: 'mid'},
      {id: 'swift', image: 'swift.svg', level: 'mid'},
      {id: 'c++', image: 'c++.svg', level: 'mid'},
      {id: 'postgresql', image: 'postgresql-wordmark.svg', level: 'mid'},
      {id: 'redis', image: 'redis.svg', level: 'mid'},
      {id: 'ios', image: 'ios.svg', level: 'mid'},
      {id: 'elixir', image: 'elixir.png', level: 'low'},
      {id: 'python', image: 'python.svg', level: 'low'},
      {id: 'c', image: 'c.svg', level: 'low'},
      {id: 'php', image: 'php-flat.svg', level: 'low'},
      {id: 'nodejs', image: 'nodejs-icon.svg', level: 'low'},
      {id: 'c-sharp', image: 'c-sharp.svg', level: 'low'},
      {id: 'capistrano', image: 'capistrano.svg', level: 'deploy'},
      {id: 'heroku', image: 'heroku.svg', level: 'deploy'},
      {id: 'aws', image: 'aws-s3.svg', level: 'deploy'},
      {id: 'google-cloud', image: 'google-cloud.svg', level: 'deploy'},
      {id: 'firebase', image: 'firebase.svg', level: 'deploy'},
      {id: 'github', image: 'github-icon.svg', level: 'deploy'},
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
        title: 'Comfort Crib',
        details: 'AirBnB Clone being built along side a mentor to improve independence, and deeping my understanding of Rails.',
        completedYear: 'in-progress',
        dateTag: 'Feb \'17',
        link: 'https://github.com/nicollis/comfort_crib',
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

          <Section title='Projects Roadmap'>
            <Col xs={12}>
              <Timeline events={this.state.events}/>
            </Col>
          </Section>

          <Section title="Contact & Social">
            <Col xs={12} id="contact">
              <Col md={6} mdOffset={3} className="contact-icons text-center">
                <Contact to='mailto:nic@ollis.me'  icon='envelope' />
                <Contact to='http://twitter.com/nic_ollis' icon='twitter' />
                <Contact to='https://medium.com/program-practical' icon='medium' />
                <Contact to='https://www.youtube.com/c/programpracticaltv' icon='youtube' />
                <Contact to='https://www.linkedin.com/in/nicollis' icon='linkedin' />
                <Contact to='https://github.com/nicollis' icon='github' />
                <Contact to='http://codepen.io/nollis/' icon='codepen' />
                <Contact to='' icon='skype' />
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

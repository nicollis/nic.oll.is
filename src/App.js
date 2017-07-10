import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Header from './components/Header'
import Bio from './components/Bio'
import Section from './components/Section'
import ToolboxShelf from './components/ToolboxShelf'
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

          <Row>
            <h2 className="text-center">Projects | Jobs</h2>
            <hr />
            <div id="projects" className='col-xs-12'>
              <div className='timeline'>
                <dl>
                  <dt>In Progress</dt>
                  {/* Comfort Crib */}
                  <dd className="pos-left clearfix">
                    <div className="circ bg-coral"></div>
                    <div className="time color-coral">Feb '17</div>
                    <a className="events" href="https://github.com/nicollis/comfort_crib" target="_blank" rel="noopener noreferrer">
                      <div className="events-body">
                        <h4 className="events-heading">Comfort Crib</h4>
                        <p>
                          AirBnB Clone being built along side a mentor to improve independence, and deeping my understanding of Rails.
                        </p>
                        <p>
                          <span className="label label-danger">Rails 4</span>
                          <span className="label label-primary">CoffeeScript</span>
                          <span className="label label-info">PostgreSQL</span>
                          <span className="label label-normal">Heroku</span>
                          <span className="label label-normal">AWS S3</span>
                        </p>
                      </div>
                    </a>
                  </dd>
                  {/* Proposable */}
                  <dd className="pos-right clearfix">
                    <div className="circ bg-coral"></div>
                    <div className="time color-coral">May '16</div>
                    <a className="events" href="https://proposable.com" target="_blank" rel="noopener noreferrer">
                      <div className="events-body">
                        <h4 className="events-heading">Proposable</h4>
                        <p>
                          As a Rails contractor for Proposable, I have implemented many new features and bug fixes including: User Collaboration, 
                          Send from Gmail/Custom SMTP, Bulk CSV Uploads,CRM Integrations.
                        </p>
                        <p>
                          <span className="label label-danger">Rails 4</span>
                          <span className="label label-primary">AngularJS</span>
                          <span className="label label-info">PostgreSQL</span>
                          <span className="label label-info">Redis</span>
                          <span className="label label-success">REST</span>
                          <span className="label label-normal">Capistrano</span>
                        </p>
                      </div>
                    </a>
                  </dd>
                  <dt>2017</dt>
                  {/* ClusterForcast */}
                  <dd className="pos-left clearfix">
                    <div className="circ bg-js"></div>
                    <div className="time color-js">Jun 12th</div>
                    <a className="events" href="https://github.com/nicollis/ClusterForecast" target="_blank" rel="noopener noreferrer">
                      <div className="events-body">
                        <h4 className="events-heading">ClusterForecast</h4>
                        <p>
                          A small React project pulling in ClusterTruck's API and a Weather API to predict demand on their kitchen of any given day. 
                        </p>
                        <p>
                          <span className="label label-normal bg-js">ES6</span>
                          <span className="label label-primary">React</span>
                          <span className="label label-success">REST</span>
                          <span className="label label-normal">Heroku</span>
                        </p>
                      </div>
                    </a>
                  </dd>
                  {/* Otter */}
                  <dd className="pos-right clearfix">
                    <div className="circ bg-coral"></div>
                    <div className="time color-coral">May 19th</div>
                    <a className="events" href="https://github.com/nicollis/otter" target="_blank" rel="noopener noreferrer">
                      <div className="events-body">
                        <h4 className="events-heading">Otter</h4>
                        <p>
                          A simple twitter clone created as a playground for Rails 5. Testing out webpack and slim.
                          Enabled GraphQL API for testing its implementation in Rails.
                        </p>
                        <p>
                          <span className="label label-danger">Rails 5</span>
                          <span className="label label-primary">Slim</span>
                          <span className="label label-info">PostgreSQL</span>
                          <span className="label label-success">GraphQL</span>
                          <span className="label label-normal">Heroku</span>
                          <span className="label label-normal">AWS S3</span>
                        </p>
                      </div>
                    </a>
                  </dd>
                  {/* Pitch Perfect */}
                  <dd className="pos-left clearfix">
                    <div className="circ bg-swift"></div>
                    <div className="time color-swift">May 1st</div>
                    <a className="events" href="https://github.com/nicollis/pitch-perfect" target="_blank" rel="noopener noreferrer">
                      <div className="events-body">
                        <h4 className="events-heading">Pitch Perfect</h4>
                        <p>
                          App experimenting with controls avaliable for sound modulation via the AVAudioEngine in iOS.
                        </p>
                        <p>
                          <span className="label label-warning bg-swift">Swift</span>
                          <span className="label label-primary">iOS 10</span>
                          <span className="label label-info">AVAudioEngine</span>
                        </p>
                      </div>
                    </a>
                  </dd>
                  {/* Rubocop-git */}
                  <dd className="pos-right clearfix">
                    <div className="circ bg-coral"></div>
                    <div className="time color-coral">Feb 18th</div>
                    <a className="events" href="https://github.com/nicollis/rubocop-git" target="_blank" rel="noopener noreferrer">
                      <div className="events-body">
                        <h4 className="events-heading">rubocop-git</h4>
                        <p>
                          added in an --auto-correct flag that only runs rubocop and corrects changes based on your changes as seen by git.
                        </p>
                        <p>
                          <span className="label label-danger">Ruby</span>
                          <span className="label label-danger">rubocop</span>
                          <span className="label label-normal">git</span>
                        </p>
                      </div>
                    </a>
                  </dd>
                  <dt>2016</dt>
                  {/* GoodAsOldPhones */}
                  <dd className="pos-left clearfix">
                    <div className="circ bg-swift"></div>
                    <div className="time color-swift">Nov 20th</div>
                    <a className="events" href="https://github.com/nicollis/GoodAsOldPhones" target="_blank" rel="noopener noreferrer">
                      <div className="events-body">
                        <h4 className="events-heading">Good As Old Phones</h4>
                        <p>
                          A simple app while learning xcode, swift, and iOS 10
                        </p>
                        <p>
                          <span className="label label-warning bg-swift">Swift</span>
                          <span className="label label-primary">iOS 10</span>
                        </p>
                      </div>
                    </a>
                  </dd>
                  {/* webfont-select */}
                  <dd className="pos-right clearfix">
                    <div className="circ"></div>
                    <div className="time">Nov 9th</div>
                    <a className="events" href="https://github.com/nicollis/webfont-select" target="_blank" rel="noopener noreferrer">
                      <div className="events-body">
                        <h4 className="events-heading">WebFont-Select</h4>
                        <p>
                          A jQuery UI Widget to provide a simple dropdown select menu of Google Font's avaliable fonts. 
                          Including a search input to narrow down selectable fonts. Easily implementable in Rails by using the webfont-select-rails gem.
                        </p>
                        <p>
                          <span className="label label-primary">CoffeeScript</span>
                          <span className="label label-info">Webfont Loader</span>
                          <span className="label label-normal">RubyGems</span>
                        </p>
                      </div>
                    </a>
                  </dd>
                  {/* pentristing */}
                  <dd className="pos-left clearfix">
                    <div className="circ bg-coral"></div>
                    <div className="time color-coral">Mar 5th</div>
                    <a className="events" href="https://github.com/nicollis/pinteresting" target="_blank" rel="noopener noreferrer">
                      <div className="events-body">
                        <h4 className="events-heading">Pinteresting</h4>
                        <p>
                          Pinterest clone written on Ruby on Rails, using ImageMagic for image processing and S3 storage.
                        </p>
                        <p>
                          <span className="label label-danger">Rails 4</span>
                          <span className="label label-primary">CoffeeScript</span>
                          <span className="label label-info">PostgreSQL</span>
                          <span className="label label-normal">Heroku</span>
                          <span className="label label-normal">AWS S3</span>
                        </p>
                      </div>
                    </a>
                  </dd>
                  {/* INCapitolHack */}
                  <dd className="pos-right clearfix">
                    <div className="circ bg-js"></div>
                    <div className="time color-js">Mar 1st</div>
                    <a className="events" href="https://github.com/nicollis/myigaservice" target="_blank" rel="noopener noreferrer">
                      <div className="events-body">
                        <h4 className="events-heading">INCapitolHack</h4>
                        <p>
                          Trial by fire, assisted in front end development while learning the MEAN stack in 24 hours.
                        </p>
                        <p>
                          <span className="label label-normal bg-js">TypeScript</span>
                          <span className="label label-primary">AngularJS</span>
                          <span className="label label-primary">ExpressJS</span>
                          <span className="label label-info">MongoDB</span>
                          <span className="label label-success">REST</span>
                        </p>
                      </div>
                    </a>
                  </dd>
                  <dt>And More...</dt>
                </dl>
                {/* GitHub Info */}
                <a className="col-md-6 col-md-offset-3" href="https://github.com/nicollis?tab=repositories" target="_blank" rel="noopener noreferrer">
                  <div className="panel panel-default repo">
                    <div className="panel-heading bg-coral">
                      See more on GitHub
                    </div>
                    <div className="panel-body">
                      I have many other projects done in my past and have uploaded anything I'm allowed to share on GitHub!
                      Check out my page for more repo's including:
                      <ul className="top-padding">
                        <li>2D game engine written in C++</li>
                        <li>BASIC-like language with interpreter written in Java</li>
                        <li>C# script to import language templates for DrangonTN</li>
                        <li>Many frontend projects playing with Javascript and CSS</li>
                        <li>and more...</li>
                      </ul>
                      Between mentorships, self-projects, and pursuing Udacity's iOS Nanodegree there are constant updates happening on GitHub.
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </Row>

          <Row>
            <h2 className='text-center'>Contact & Social</h2>
            <hr />
            <div id="contact" className="">
              <div className="contact-icons text-center col-md-6 col-md-offset-3">
                <div className="col-xs-6 col-md-3 contact-wrapper">
                  <a href="mailto:nic@ollis.me" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-envelope fa-3x color-coral"></i>
                  </a>
                </div>
                <div className="col-xs-6 col-md-3 contact-wrapper">
                  <a href="http://twitter.com/nic_ollis" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-twitter fa-3x color-coral"></i>
                  </a>
                </div>
                <div className="col-xs-6 col-md-3 contact-wrapper">
                  <a href="https://medium.com/program-practical" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-medium fa-3x color-coral"></i>
                  </a>
                </div>
                <div className="col-xs-6 col-md-3 contact-wrapper">
                  <a href="https://www.youtube.com/c/programpracticaltv" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-youtube fa-3x color-coral"></i>
                  </a>
                </div>
                <div className="col-xs-6 col-md-3 contact-wrapper">
                  <a href="https://www.linkedin.com/in/nicollis" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin fa-3x color-coral"></i>
                  </a>
                </div>
                <div className="col-xs-6 col-md-3 contact-wrapper">
                  <a href="https://github.com/nicollis" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github fa-3x color-coral"></i>
                  </a>
                </div>
                <div className="col-xs-6 col-md-3 contact-wrapper">
                  <a href="http://codepen.io/nollis/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-codepen fa-3x color-coral"></i>
                  </a>
                </div>
                <div className="col-xs-6 col-md-3 contact-wrapper">
                  <div>
                    <i className="fa fa-skype fa-3x color-coral"></i>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </div>

        <div className="container-fluid no-padding">
          <div className="col-xs-12 no-padding">
            <div className="footer">
              <div className="container">
                <div className="footer-copyright header">Created by Ollis</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

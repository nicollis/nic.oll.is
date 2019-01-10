import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TimelineEvent from './TimelineEvent'

class TimeLine extends Component {

  static propTypes = {
    events: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        details: PropTypes.string.isRequired,
        completedYear: PropTypes.any.isRequired,
        dateTag: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        dotColor: PropTypes.string,
        dateColor: PropTypes.string,
        tech: PropTypes.arrayOf(
          PropTypes.shape({
            title: PropTypes.string.isRequired,
            style: PropTypes.string,
            class: PropTypes.string
          })
        )
      })
    ).isRequired,
  }

  pullLeft = true;

  getPull = () => {
    const pull = this.pullLeft ? 'pos-left' : 'pos-right';
    this.pullLeft = !this.pullLeft;
    return pull;
  }

  processYear = (year, year_events) => {
    return (<div>
      <dt>{year}</dt>
      { year_events.map((event) => {return (<TimelineEvent key={event.link} event={event} pull={this.getPull()} />)})}
    </div>)
  }

  render () {
    return (
      <div className='timeline'>
        <div className="text-right">
          <span className="badge project"><i className="fa fa-box-open fa-1x"/> Project</span>&nbsp;
          <span className="badge blog"><i className="fa fa-pencil-alt fa-1x"/> Blog</span>&nbsp;
          <span className="badge video"><i className="fa fa-video fa-1x"/> Video</span>
        </div>
        <dl>
          { this.processYear('In Progress', this.props.events.filter((event) => { return event.completedYear === 'in-progress' })) }
          { this.processYear(2019, this.props.events.filter((event) => { return event.completedYear === '2019' })) }
          { this.processYear(2018, this.props.events.filter((event) => { return event.completedYear === '2018' })) }
          { this.processYear(2017, this.props.events.filter((event) => { return event.completedYear === '2017' })) }
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
    )
  }
}

export default TimeLine

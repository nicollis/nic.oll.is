import React from 'react'
import { Label } from 'react-bootstrap'
import FontAwesome from './FontAwesome'

const TimelineEvent = (props) => {
  const { event, pull } = props
  return (
    <dd className={`${ pull } clearfix`}>
      <div className={`circ ${ event.dotColor || 'primary-background-color' }`}></div>
      <div className={`time ${ event.dateColor || 'primary-color' }`}>{event.dateTag}</div>
      <a className="events" href={event.link} target="_blank" rel="noopener noreferrer">
        <div className="events-body">
          <h4 className="events-heading">{event.title} <span className={`badge ${event.eventType}`}><FontAwesome icon={event.eventIcon}/></span></h4>
          <p>{event.details}</p>
          <p>
            {event.tech && event.tech.map((item) => { return(
              <Label key={event.link+item.title} bsStyle={item.style} className={item.class}>
                {item.title}
              </Label>
            ) })}
          </p>
        </div>
      </a>
    </dd>
  )
}

export default TimelineEvent

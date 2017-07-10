import React from 'react'
import { Label } from 'react-bootstrap'

const TimelineEvent = (props) => {
  const { event, pull } = props
  return (
    <dd className={`${ pull } clearfix`}>
      <div className={`circ ${ event.dotColor || 'bg-coral' }`}></div>
      <div className={`time ${ event.dateColor || 'color-coral' }`}>{event.dateTag}</div>
      <a className="events" href={event.link} target="_blank" rel="noopener noreferrer">
        <div className="events-body">
          <h4 className="events-heading">{event.title}</h4>
          <p>{event.details}</p>
          <p>
            {event.tech && event.tech.map((item) => { return(
              <Label bsStyle={item.style} className={item.class}>
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
import React from 'react'
import {Row, Col} from 'react-bootstrap'
import Logo from './Logo/Logo'

const Training = (props) => {
    const {logo, title, link, company, description, tech} = props.details
    return (
        <Col xs={6} md={"auto"}>
            <a className="training-link" href={link} target="_blank" rel="noopener noreferrer">
                <div><span className="h4 primary-color"> {title}</span></div>
                <Col className="medium career-job-title">{company}</Col>
            </a>
        </Col>
    )
}

export default Training

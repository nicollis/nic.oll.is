import React from 'react'
import {Row, Col} from 'react-bootstrap'
import Images from '../images'

const Job = (props) => {
    const {logo, titles, task} = props.details
    return (
        <Row>
            <Col>
                <Row className="justify-content-md-center">
                    <Col xs={12} sm={"auto"} className="career-logo-container">
                        <img className="career-logo" alt={logo} src={Images[logo]}/>
                    </Col>

                    <Col md={6}>
                        <Row className="no-padding">
                            <div><span className="h4 primary-color"> {props.key}</span></div>
                        </Row>
                        {Object.keys(titles).map((key) => {
                            return <Row className="no-padding medium">
                                <Col className="career-job-title">{key}</Col>
                                <Col className="career-job-title primary-color text-align-right">{titles[key]}</Col>
                            </Row>
                        })}
                    </Col>
                </Row>
                {Object.keys(task).map((key) => {
                    return <Row className="justify-content-md-center">
                        <Col md={8}>
                            <h5>{key}</h5>
                            {task[key].map((item) => {
                                return <p className="jobDetails">• {item}</p>
                            })}
                        </Col>
                    </Row>
                })}
            </Col>
            <Col xs={12} sm={{span: 10, offset: 1}}>
                <hr/>
            </Col>
        </Row>
    )
}

export default Job

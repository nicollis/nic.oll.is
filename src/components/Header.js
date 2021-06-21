import React from 'react'
import { Row, Button, ButtonGroup } from 'react-bootstrap'
import FontAwesome from './FontAwesome'

const Header = () => {
  return (
    <Row>
      <ButtonGroup className="pull-right top-padding">
        <Button variant='danger' href="#toolbox" className="primary-background-color" data-toggle="tooltip" data-placement="bottom" title='Toolbox'><FontAwesome icon='wrench'/></Button>
        <Button variant='danger' href="#projects" className="primary-background-color" data-toggle="tooltip" data-placement="bottom" title='Projects'><FontAwesome icon='code'/></Button>
        <Button variant='danger' href="#contact" className="primary-background-color" data-toggle="tooltip" data-placement="bottom" title='Contact'><FontAwesome icon='phone'/></Button>
        <Button variant='danger' href="https://medium.com/program-practical" className="primary-background-color" data-toggle="tooltip" data-placement="bottom" title='Blog'><FontAwesome icon='pencil'/></Button>
      </ButtonGroup>
    </Row>
  )
}

export default Header

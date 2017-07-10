import React from 'react'
import { Row, Button, ButtonGroup } from 'react-bootstrap'
import FontAwesome from './FontAwesome'

const Header = () => {
  return (
    <Row>
      <ButtonGroup className="pull-right top-padding">
        <Button bsStyle='danger' href="#toolbox" className="bg-coral" data-toggle="tooltip" data-placement="bottom" title='Toolbox'><FontAwesome icon='wrench'/></Button>
        <Button bsStyle='danger' href="#projects" className="bg-coral" data-toggle="tooltip" data-placement="bottom" title='Projects'><FontAwesome icon='code'/></Button>
        <Button bsStyle='danger' href="#contact" className="bg-coral" data-toggle="tooltip" data-placement="bottom" title='Contact'><FontAwesome icon='phone'/></Button>
        <Button bsStyle='danger' href="https://medium.com/program-practical" className="bg-coral" data-toggle="tooltip" data-placement="bottom" title='Blog'><FontAwesome icon='pencil'/></Button>
      </ButtonGroup>
    </Row>
  )
}

export default Header
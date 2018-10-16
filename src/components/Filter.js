import React, { Component } from 'react'
import { Modal, Button, Icon, Container } from 'semantic-ui-react'

export default class Filter extends Component {

    state = { undefined: ''}

  render () {
      
    
    return (
      <Modal trigger={<Button>Results</Button>} closeIcon>
        <Modal.Header >Area Detailed Breakdown</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            {console.log(this.props)}
          </Modal.Description>
          <Container style={{marginTop: '2em', marginBottom: '2em'}}>
            <Button color='blue'>Compare with other Borough</Button>
            <Button color='green' onClick={null}>
            Compare all Postcodes in Borough</Button>
            <Button icon floated='right'>
              <Icon name='print' /> Print
            </Button>
          </Container>
        </Modal.Content>
      </Modal>
    )
  }
}

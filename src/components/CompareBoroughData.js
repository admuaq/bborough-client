import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'

class CompareBoroughData extends Component {
  constructor (props) {
    super(props)
    this.state = { }
  }
  render () {
    return (
      <Modal trigger={<Button>Compare boroughs</Button>} closeIcon >
        <Modal.Header>Boroughs</Modal.Header>
        <Modal.Content>
          <Modal.Description />
        </Modal.Content>
      </Modal>
    )
  }
}

export default CompareBoroughData

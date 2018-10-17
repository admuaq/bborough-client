import React, { Component } from 'react'
import { Modal, Button, Icon, Container } from 'semantic-ui-react'

export default class Filter extends Component {

    state = { filterResult1: '',
              filterResult2: '',
              filterResult3: '' }

  render () {

    let salaryFilterOrder = (
    <div>
      <span><h1>#{this.props.returnedFilterResult[0].avgSalaryRank}</h1> in average salary (in comparison to other areas in this borough)</span>
      <span><h1>#{this.props.returnedFilterResult[0].avgCrimeRank}</h1> lowest in crime rate</span>
    </div>
    )

    let crimeFilterOrder = (
      <div>
        <span><h1>#{this.props.returnedFilterResult[0].avgCrimeRank}</h1> lowest in crime rate</span>
        <span><h1>#{this.props.returnedFilterResult[0].avgSalaryRank}</h1> in average salary (in comparison to other areas in this borough)</span>
      </div>
      )

    return (
      <Modal trigger={<Button>Load Results</Button>} closeIcon>
        <Modal.Header >Results</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <p>The best area in this borough for you is...<b>{this.props.returnedFilterResult[0].postcode}</b></p>
              { 
                <div>
                  {!!this.props.returnedFilterResult[0]
                    ? 
                    <div>
                      <span><h1>#{this.props.returnedFilterResult[0].avgSalaryRank}</h1> in average salary (in comparison to other areas in this borough)</span><br/>
                      <span><h1>#{this.props.returnedFilterResult[0].avgCrimeRank}</h1> lowest in crime rate</span><br/>
                    </div>
                    : ''}
                </div>
              }
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

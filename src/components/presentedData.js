import React, { Component } from 'react'
import { Modal, Button, Icon, Container } from 'semantic-ui-react'

export default class PresentedData extends Component {

    state = { undefined: ''}

  render () {
      
    const { outcode, averageSalaryPostedJob, crimeRate } = this.props.area
    const { averageIncomeBorough } = this.props.borough
    return (
      <Modal trigger={<Button>Results</Button>} closeIcon>
        <Modal.Header >{outcode} Area Detailed Breakdown</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <p>Average Salary of posted jobs in area: £{averageSalaryPostedJob}</p>
            <p>Average Salary earned in borough: £{averageIncomeBorough}</p>
            <p>Percentage: {Number.parseInt((averageSalaryPostedJob/averageIncomeBorough) * 100)}% </p>
            {/* <p>Economic Activity: {economicActivity}</p> */}
            {/* <p>Health: {health}</p> */}
            <p>Crime Rate: {crimeRate}</p>
          </Modal.Description>
          <Container style={{marginTop: '2em', marginBottom: '2em'}}>
            <Button color='blue'>Compare with other Borough</Button>
            <Button color='green'>Compare all Postcodes in Borough</Button>
            <Button icon floated='right'>
              <Icon name='print' /> Print
            </Button>
          </Container>
        </Modal.Content>
      </Modal>
    )
  }
}

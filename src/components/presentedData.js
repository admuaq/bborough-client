import React, { Component } from 'react'
import { Modal } from 'semantic-ui-react'

export default class PresentedData extends Component {

    state = { undefined: ''}

  render () {
      
    const { outcode, averageSalaryPostedJob, crimeRate } = this.props.area
    const { averageIncomeBorough } = this.props.borough
    return (
      <div>
          <h1>{outcode} Area Detailed Breakdown</h1>
          <p>Average Salary of posted jobs in area: £{averageSalaryPostedJob}</p>
          <p>Average Salary earned in borough: £{averageIncomeBorough}</p>
          <p>Percentage: {Number.parseInt((averageSalaryPostedJob/averageIncomeBorough) * 100)}% </p>
          {/* <p>Economic Activity: {economicActivity}</p> */}
          {/* <p>Health: {health}</p> */}
          <p>Crime Rate: {crimeRate}</p>
      </div>
    )
  }
}

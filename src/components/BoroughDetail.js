import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const BoroughDetail = (props) => {
  // City of London removed from ranking
  let array = props.boroughs.filter(borough => borough.name !== 'City of London')

  let healthRank = array.sort((a, b) => parseFloat(b.health) - parseFloat(a.health)).indexOf(props.boroughData) + 1
  let happinessRank = array.sort((a, b) => parseFloat(b.happiness) - parseFloat(a.happiness)).indexOf(props.boroughData) + 1
  let educationRank = array.sort((a, b) => parseFloat(b.education) - parseFloat(a.education)).indexOf(props.boroughData) + 1
  let populationRank = array.sort((a, b) => parseFloat(b.population) - parseFloat(a.population)).indexOf(props.boroughData) + 1
  let avgIncomeRank = array.sort((a, b) => parseFloat(b.averageIncomeBorough) - parseFloat(a.averageIncomeBorough)).indexOf(props.boroughData) + 1

  return (
    <div>
      {console.log(array.sort((a, b) => parseFloat(b.happiness) - parseFloat(a.happiness)))}
      {console.log(happinessRank, props.boroughData.name)}
      <Card fluid>
        <Image className='borough-logo' src={props.boroughData.logoLink} />
        <Card.Content>
          <Card.Header>{props.boroughData.name}</Card.Header>
          <Card.Meta>{props.boroughData.name === 'City of London' ? 'Business District' : `London Borough of ${props.boroughData.name}`}</Card.Meta>
          <Card.Description>
            {props.boroughData.name === 'City of London'
              ? <ul>
                <li>population: {props.boroughData.population}</li>
                <li>Average Salary earned in borough: {props.boroughData.averageIncomeBorough}</li>
              </ul>
              : <ul>
                <li>health: {props.boroughData.health} (#{healthRank})</li>
                <li>happiness: {props.boroughData.happiness} (#{happinessRank})</li>
                <li>Education (GCSE atainment of results between 9-5): {props.boroughData.education}% (#{educationRank})</li>
                <li>population: {props.boroughData.population} (#{populationRank})</li>
                <li>Average Salary earned in borough: {props.boroughData.averageIncomeBorough} (#{avgIncomeRank})</li>
              </ul>
            }
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          {/* <a>
            <Icon name='user' />
            10 Friends
        </a> */}
        </Card.Content>
      </Card>
    </div>
  )
}

export default BoroughDetail

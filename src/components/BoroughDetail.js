import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const BoroughDetail = (props) => {
    let healthRank = props.boroughs.sort((a,b) => b.health - a.health).indexOf(props.boroughData) + 1
    let happinessRank = props.boroughs.sort((a,b) => b.happiness - a.happiness).indexOf(props.boroughData) + 1
    let educationRank = props.boroughs.sort((a,b) => b.education - a.education).indexOf(props.boroughData) + 1
    let populationRank = props.boroughs.sort((a,b) => b.population - a.population).indexOf(props.boroughData) + 1
    let avgIncome = props.boroughs.sort((a,b) => b.averageIncomeBorough - a.averageIncomeBorough).indexOf(props.boroughData) + 1

  return (
      <div>
      {console.log(props.boroughs.sort((a,b) => b.health - a.health ))}
      {console.log(healthRank + 1, props.boroughData.name)}
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
                <li>health: {props.boroughData.health}</li>
                <li>happiness: {props.boroughData.happiness}</li>
                <li>Education (GCSE achievemnet): {props.boroughData.education}</li>
                <li>population: {props.boroughData.population}</li>
                <li>Average Salary earned in borough: {props.boroughData.averageIncomeBorough}
                </li>
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

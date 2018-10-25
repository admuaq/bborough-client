import React, { Component } from 'react'
import { Modal, Button, Grid, Statistic, 
        Container, Divider, Icon, Segment,
        Dimmer, Loader } from 'semantic-ui-react'

import '../Modals.css'

export default class ResultsComponent extends Component {

    state = { stats: {} }

    findRank = postcode => {
      let boroughPostcodes = this.props.borough.postcodes
  
      let sortByCrime = boroughPostcodes.slice().sort((a,b) => a.crimeRate - b.crimeRate)
      console.log('Crime Array:', sortByCrime)
      let sortByAvgSalary = boroughPostcodes.slice().sort((a,b) => b.averageSalaryPostedJob - a.averageSalaryPostedJob)
      console.log('Salary Array:', sortByAvgSalary)
      let sortByhouseListings = boroughPostcodes.slice().sort((a,b) => b.houseListings - a.houseListings)
      console.log('Listings Array:', sortByhouseListings)
  
      let crimeRank = sortByCrime.indexOf(postcode[0])
      let salaryRank = sortByAvgSalary.indexOf(postcode[0])
      let houseListingsRank = sortByhouseListings.indexOf(postcode[0])
  
      let stats = { postcode: postcode.outcode, crimeRank: crimeRank + 1, salaryRank: salaryRank + 1 , houseListingsRank: houseListingsRank + 1} 

      this.setState( {...this.state, stats })
    }

  render () {

    let result = this.props.filterResult([...this.props.borough.postcodes])
    let indexMedian = Math.ceil(((result.length + 1) / 2 ))
    let found = this.props.usedFilters.length > 1 
    ? result.slice(indexMedian -1,indexMedian)
    : result.slice(0,1)

    console.log('result:', result)
    console.log('indexMedian:', indexMedian)
    
    return (
      <Modal trigger={
        !this.props.loaded 
        ?<Button onClick={() => this.findRank(found) }>Load Results</Button>
        : <div><h1>Results loaded!</h1><Button>Show Me!!!</Button></div>} closeIcon onClose={() => this.props.clearFilterResult()}>
        <Modal.Header >Results</Modal.Header>
        <Modal.Content>
              {
                <Modal.Content>
                {
                found.map(postcode => { 
                  let percentage = Math.ceil(((postcode.averageSalaryPostedJob/this.props.borough.averageIncomeBorough) * 100))
                  return (
                    <div>
                    <p>The best area in this borough for you is probably...</p>
                    <Container className='statistics'>
                    <Grid centered columns={4} padded>
                      <Grid.Row>
                        <span class='chosen-postcode'>{postcode.outcode}</span>
                      </Grid.Row>
                      <Grid.Row centered >
                      <Grid.Column>
                        <Statistic>
                          <Statistic.Value>#{this.state.stats.salaryRank}</Statistic.Value>
                          <Statistic.Label >in average salary (compared to other areas in this borough)  </Statistic.Label>
                          <h6 align='center'>This is {percentage > 100 ?  `${percentage - 100}% higher than the borough average!!!` :`${percentage}% of the borough average.` } </h6>
                        </Statistic>
                      </Grid.Column>
                      </Grid.Row>
                      <Grid.Row >
                      <Grid.Column>
                        <Statistic>
                          <Statistic.Value>#{this.state.stats.crimeRank}</Statistic.Value>
                          <Statistic.Label>lowest in crime rate</Statistic.Label>
                          <h6 align='center'>This is {this.state.stats.crimeRank > 5 ? 'relatively high' : 'pretty low.' } </h6>
                        </Statistic>
                      </Grid.Column>
                      <Grid.Column>
                        <Statistic>
                          <Statistic.Value>#{this.state.stats.houseListingsRank}</Statistic.Value>
                          <Statistic.Label>by no. house listings</Statistic.Label>
                          <h6 align='center'>There are {this.state.stats.houseListingsRank < 5 ? 'many' : 'not many if any' } current house listings! </h6>
                        </Statistic>
                      </Grid.Column>
                      </Grid.Row>
                    </Grid>
                    </Container>
                    <Divider />
                    <Container style={{ marginTop: '1em', marginBottom: '2em'}}>
                    <span>There are currently {postcode.houseListings} home vacancies in this area</span>
                    </Container>
                    <a href={`https://www.streetcheck.co.uk/postcodedistrict/${postcode.outcode}#housing`} target="_blank" rel="nofollow noopener noreferrer"><Button floated='left' color='green'><Icon name='window restore outline' />More on housing</Button></a>
                    <a href={`https://www.streetcheck.co.uk/postcode/startingwith/${postcode.outcode}`}target="_blank" rel="nofollow noopener noreferrer"><Button color='pink'><Icon name='window restore outline' />Find your perfect street</Button></a>
                    <a href={`https://www.zoopla.co.uk/for-sale/property/${postcode.outcode}/?q=${postcode.outcode}&radius=0&results_sort=newest_listings&search_source=refine`} target="_blank" rel="nofollow noopener noreferrer"><Button floated='right' color='purple'><Icon name='window restore outline' />Search Zoopla</Button></a>
                    {/* https://www.zoopla.co.uk/for-sale/property/rm15/?q=Rm15&radius=0&results_sort=newest_listings&search_source=refine */}
                  </div>
                  )})
              }
              </Modal.Content>
              }
      </Modal.Content>
</Modal>

// https://www.streetcheck.co.uk/postcodedistrict/sw16#housing
    )}}
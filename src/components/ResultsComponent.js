import React, { Component } from 'react'
import { Modal, Button, Grid, Statistic, 
        Container, Divider, Icon, Segment,
        Dimmer, Loader } from 'semantic-ui-react'

export default class ResultsComponent extends Component {

    state = { stats: {} }

    findRank = postcode => {
      let boroughPostcodes = this.props.postcodes
  
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

    let result = this.props.filterResult([...this.props.postcodes])
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
        <Modal.Content style={{ paddingLeft: '5em', paddingRight: '5em', marginBottom: '2em', marginBottom: '2em' }}>
          <Modal.Description>
            <p>The best area in this borough for you is...</p>
          </Modal.Description>
              {
                <Modal.Content style={{ paddingLeft: '5em', paddingRight: '5em', marginBottom: '2em', marginBottom: '2em' }}>
                {
                found.map(postcode => { 
                  return (
                  <div>
                    <h1>{postcode.outcode}</h1>
                    <Grid centered columns={4} padded>
                      <Grid.Row centered >
                      <Grid.Column>
                        <Statistic>
                          <Statistic.Value>#{this.state.stats.salaryRank}</Statistic.Value>
                          <Statistic.Label>in average salary (compared to other areas in this borough)  </Statistic.Label>
                        </Statistic>
                      </Grid.Column>
                      </Grid.Row>
                      <Grid.Row >
                      <Grid.Column>
                        <Statistic>
                          <Statistic.Value>#{this.state.stats.crimeRank}</Statistic.Value>
                          <Statistic.Label>lowest in crime rate</Statistic.Label>
                        </Statistic>
                      </Grid.Column>
                      <Grid.Column>
                        <Statistic>
                          <Statistic.Value>#{this.state.stats.houseListingsRank}</Statistic.Value>
                          <Statistic.Label>by no. house listings</Statistic.Label>
                        </Statistic>
                      </Grid.Column>
                      </Grid.Row>
                    </Grid>
   
                    <Divider />
                    <Container style={{ marginTop: '1em', marginBottom: '2em'}}>
                    <span>There are currently {postcode.houseListings} home vacancies in this area</span>
                    </Container>
                    <a href={`https://www.streetcheck.co.uk/postcodedistrict/${postcode.outcode}#housing`} target="_blank"><Button floated='left' color='green'><Icon name='window restore outline' />More on housing</Button></a>
                    <a href={`https://www.streetcheck.co.uk/postcode/startingwith/${postcode.outcode}`}target="_blank"><Button color='pink'><Icon name='window restore outline' />Find your perfect street</Button></a>
                    <a href={`https://www.zoopla.co.uk/to-rent/property/london/${postcode.outcode}`} target="_blank"><Button floated='right' color='purple'><Icon name='window restore outline' />Search Zoopla</Button></a>         
                  </div>
                  )})
              }
              </Modal.Content>
              }
      </Modal.Content>
</Modal>

// https://www.streetcheck.co.uk/postcodedistrict/sw16#housing
    )}}
import React, { Component } from 'react'
import { Modal, Button, Grid, Statistic, Container, Divider, Icon } from 'semantic-ui-react'

export default class Filter extends Component {

    state = { filterResult1: '',
              filterResult2: '',
              filterResult3: '' }

  render () {

    // let salaryFilterOrder = (
    // <div>
    //   <span><h1>#{this.props.returnedFilterResult[0].avgSalaryRank}</h1> in average salary (in comparison to other areas in this borough)</span>
    //   <span><h1>#{this.props.returnedFilterResult[0].avgCrimeRank}</h1> lowest in crime rate</span>
    // </div>
    // )

    // let crimeFilterOrder = (
    //   <div>
    //     <span><h1>#{this.props.returnedFilterResult[0].avgCrimeRank}</h1> lowest in crime rate</span>
    //     <span><h1>#{this.props.returnedFilterResult[0].avgSalaryRank}</h1> in average salary (in comparison to other areas in this borough)</span>
    //   </div>
    //   )

    return (
      <Modal trigger={<Button>Load Results</Button>} closeIcon>
        <Modal.Header >Results</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <p>The best area in this borough for you is...<b>{this.props.returnedFilterResult[0].postcode}</b></p>
          </Modal.Description>
              { 
                <Modal.Content style={{ paddingLeft: '5em', paddingRight: '5em', marginBottom: '2em', marginBottom: '2em' }}>
                  {!!this.props.returnedFilterResult[0]
                    ? 
                    <div>
                      <Grid centered columns={4} padded>
                        <Grid.Row centered >
                        <Grid.Column>
                          <Statistic>
                            <Statistic.Value>#{this.props.returnedFilterResult[0].avgSalaryRank}</Statistic.Value>
                            <Statistic.Label>in average salary (compared to other areas in this borough)  </Statistic.Label>
                          </Statistic>
                        </Grid.Column>
                        </Grid.Row>
                        <Grid.Row >
                        <Grid.Column>
                          <Statistic>
                            <Statistic.Value>#{this.props.returnedFilterResult[0].avgCrimeRank}</Statistic.Value>
                            <Statistic.Label>lowest in crime rate</Statistic.Label>
                          </Statistic>
                        </Grid.Column>
                        <Grid.Column>
                          <Statistic>
                            <Statistic.Value>#{this.props.returnedFilterResult[0].avgRankTotal}</Statistic.Value>
                            <Statistic.Label>Average Rank Total</Statistic.Label>
                          </Statistic>
                        </Grid.Column>
                        </Grid.Row>
                      </Grid>
                      {/* <span><h1>#{this.props.returnedFilterResult[0].avgSalaryRank}</h1> in average salary (in comparison to other areas in this borough)</span><br/>
                      <span><h1>#{this.props.returnedFilterResult[0].avgCrimeRank}</h1> lowest in crime rate</span><br/>
                      <span><h1>#{this.props.returnedFilterResult[0].avgRankTotal}</h1> overall</span> */}
                      <Divider />
                      <Container style={{ marginTop: '1em', marginBottom: '2em'}}>
                      <span>There are currently {this.props.returnedFilterResult[0].houseListing} home vacancies in this area</span>
                      </Container>
                      <a href={`https://www.streetcheck.co.uk/postcodedistrict/${this.props.returnedFilterResult[0].postcode}#housing`} target="_blank"><Button floated='left' color='green'><Icon name='window restore outline' />More on housing</Button></a>
                      <Button color='pink'><Icon name='window restore outline' />Find your perfect street</Button>
                      <Button floated='right' color='purple'><Icon name='window restore outline' />Search Zoopla</Button>
                      
                    </div>
                    : ''}
                </Modal.Content>
              }
          {/* <Container style={{marginTop: '2em', marginBottom: '2em'}}>
            <Button color='blue' onClick={null}>Compare with other Borough</Button>
            <Button color='green' onClick={null}>Compare all Postcodes in Borough</Button>
            <Button color='purple' onClick={null}>Search Zoopla</Button><br />
            <Button color='blue' onClick={null}>Search Reed</Button><br />
          </Container> */}
        </Modal.Content>
      </Modal>
    )
  }
}

// https://www.streetcheck.co.uk/postcodedistrict/sw16#housing
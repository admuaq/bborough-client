import React, { Component } from 'react'
import { Modal, Button, Grid, Statistic, 
        Container, Divider, Icon, Segment,
        Dimmer, Loader } from 'semantic-ui-react'

export default class Filter extends Component {

    state = { }

    

  render () {

    return (
      <Modal trigger={
        !this.props.loaded 
        ?<Button onClick={ () => this.props.toggleLoader()}>Load Results</Button>
        : <div><h1>Results loaded!</h1><Button>Show Me!!!</Button></div>} closeIcon onClose={() => this.props.clearFilterResult()}>
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
                      <a href={`https://www.streetcheck.co.uk/postcode/startingwith/${this.props.returnedFilterResult[0].postcode}`}target="_blank"><Button color='pink'><Icon name='window restore outline' />Find your perfect street</Button></a>
                      <a href={`https://www.zoopla.co.uk/for-sale/property/london/${this.props.returnedFilterResult[0].postcode}`} target="_blank"><Button floated='right' color='purple'><Icon name='window restore outline' />Search Zoopla</Button></a>
                      
                    </div>
                    : ''}
                </Modal.Content>
              }
        </Modal.Content>
      </Modal>
    )
  }
}

// https://www.streetcheck.co.uk/postcodedistrict/sw16#housing
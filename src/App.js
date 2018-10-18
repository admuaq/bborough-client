import React, { Component } from 'react'
import './App.css'
import { Container, Checkbox, Icon, Dimmer, Header, Loader, Grid, 
  Menu, Segment, Button } from 'semantic-ui-react'

import CompareBoroughData from './components/CompareBoroughData'
import Filter from './components/Filter'
import LondonBoroughs from './components/londonBoroughs'

class App extends Component {

  state = { 
    data: [],
    selectedBorough: {},
    selectedArea: {},
    showCheckbox: false,
    showModal: false,
    loading: true,
    loaded: false,
    selectedFilter: '',
    filterResult: []
  }

  fetchData = () => {
    fetch('http://localhost:3000/boroughs')
    .then( resp => resp.json())
    .then( boroughData => 
      this.setState(
        { data: boroughData }, 
        () => this.setState( { ...this.state, loading: !this.state.loading})
        ) 
      )
  }

  handleBoroughClick = (boroughName) => {
    let borough = boroughName
  
    this.renderPostcodes(borough)
  }

  handlePostcodeClick = (e) => {
    let areacode = e.target.value
    this.renderResults(areacode)
  }

  renderPostcodes = (borough) => {
    console.log(borough)
    if (this.showModal === true){
      
    }
    else {
    let foundBorough = this.state.data.find( fb => fb.name === borough )
    this.setState({ ...this.state, 
      selectedBorough: foundBorough,
      showCheckbox: true})}
  }

  clearFilterResult = () => {
    this.setState( {...this.state, selectedBorough: {},
      selectedArea: {}, selectedFilter: '', showModal: false, showCheckbox: false} )
  }

  renderResults = (areacode) => {
    // console.log(areacode)
    let foundAreacode = this.state.selectedBorough.postcodes.find( fa => fa.outcode === areacode )
    // this.toggleShow(areacode)
    this.setState({ ...this.state, 
      selectedArea: foundAreacode,
      showCheckbox: true })
      
  }

  toggleLoader = () => {
    if (this.state.loaded === false ){
    this.setState( { ...this.state, loading: !this.state.loading})
    setTimeout(() => this.setState({ ...this.state, loaded: true, loading: !this.state.loading}), 500)

    } else {
      return 
    }
  }

  toggleShow = () => {
    // console.log(this.state)
    !this.state.showCheckbox 
    ? this.setState({...this.state, showCheckbox: true})
    : this.setState({...this.state, showCheckbox: false})
  }

  onSelectCheckbox = (filter,e) => {
    // this.setState( {...this.state, selectedFilter: filter, showModal: true})

    let postcodes
    let mainResult 
    let crimeResult
    let crimeRateIndex
    let stats
    let avgSalaryResult
    let avgSalaryIndex
    let avgRankTotal
    // let houseResult  Home quality?
    // let houseIndex

    if (filter === 'by average salary (of posted jobs)'){
      postcodes = this.state.selectedBorough.postcodes
      mainResult = postcodes.sort( (a,b) => b.averageSalaryPostedJob - a.averageSalaryPostedJob )[0]
      crimeResult = this.state.selectedBorough.postcodes.sort( (a,b) => a.crimeRate - b.crimeRate)

      crimeRateIndex = crimeResult.indexOf(mainResult)
      console.log('mainResult', mainResult)
      console.log('crimeResult', crimeResult)
      console.log('crimeRateIndex', crimeRateIndex)

      // add the ranks of each criteria up
      avgRankTotal = (1 + (crimeRateIndex + 1))/2

      stats = [{ postcode: mainResult.outcode, avgSalaryRank: 1, avgCrimeRank: crimeRateIndex + 1, houseListing: mainResult.houseListings, avgRankTotal}]

      this.setState( {...this.state, loaded: false, loading:false, selectedFilter: filter, showModal: true, filterResult: stats } )
     }
     else if (filter === 'by crime rate'){
      postcodes = this.state.selectedBorough.postcodes
      mainResult = postcodes.sort( (a,b) => a.crimeRate - b.crimeRate )[0]
      avgSalaryResult = this.state.selectedBorough.postcodes.sort( (a,b) => b.averageSalaryPostedJob - a.averageSalaryPostedJob)

      avgSalaryIndex = avgSalaryResult.indexOf(mainResult)
      
      // add the ranks of each criteria up
      avgRankTotal = 1 + (avgSalaryIndex + 1)

      stats = [{ postcode: mainResult.outcode, avgSalaryRank: avgSalaryIndex + 1, avgCrimeRank: 1 , houseListing: mainResult.houseListings, avgRankTotal}]

      this.setState( {...this.state, loaded: false, loading:false, selectedFilter: filter, showModal: true, filterResult: stats } )
     }
     else {
       return
     }
  }

  // chooseFilterConditionResult = () => {

  //   if (this.state.selectedFilter === 'by average salary (of posted jobs)'){
  //    let mainResult = this.state.selectedBorough.postcodes.sort( (a,b) => b.averageSalaryPostedJob - a.averageSalaryPostedJob)
  //    let crimeResult = this.state.selectedBorough.postcodes.sort( (a,b) => a.crimeRate - b.crimeRate)
  //    let crimeRateIndex = crimeResult.findIndex(this.state.selectedBorough)

  //    let stats = [{ avgSalaryRank: 1, avgCrimeRank: crimeRateIndex + 1 }]
  //     this.setState( { ...this.state, filterResult: stats } )
  //   }
  //   else {
  //     return
  //   }

  // }

  componentDidMount(){
    this.fetchData()
    // this.toggleLoader()
  }

  render () {

    return (
      this.state.loading
      ?
      <Dimmer active>
          <Loader indeterminate>Loading</Loader>
      </Dimmer>
      :
      <div className='App'>
        <Menu fixed='top'>
          <Container>
          </Container>
        </Menu>
        <Header style={{ marginTop: '4em', marginBottom: '2em'}}>Bborough - Helping you to find the perfect place to live</Header>
          <Container>
            <LondonBoroughs handleBoroughClick={this.handleBoroughClick}/>
          </Container>
          <Container style={{ marginTop: '2em', marginBottom: '2em'}}>
            {
              !!this.state.selectedBorough.name && `Borough: ${this.state.selectedBorough.name}`
            }
            <br/>
            <p/>
            { this.state.showCheckbox
            ? 
            <div>
            <span>Area by:</span><br/>
            <Checkbox key={1} label='by average salary (of posted jobs)' onChange={(e) => {
              this.onSelectCheckbox(e.target.innerText, e)}}/> 
            <Checkbox label='by crime rate' onChange={(e) => {
              this.onSelectCheckbox(e.target.innerText)}}/> 
            <Checkbox label='by best school results' onChange={(e) => {
              this.onSelectCheckbox(e.target.innerText)}}/> 
            <Checkbox label='by number of parks' onChange={(e) => {
              this.onSelectCheckbox(e.target.innerText)}}/>
            </div> 
            : <span>Pick a borough</span> }
            
            <Container text style={{marginTop: '2em', marginBottom: '2em'}}>
            {this.state.showModal 
            ? <Filter 
              onSelectedFilter={this.chooseFilterConditionResult}
              filterCondition={this.state.selectedFilter}
              returnedFilterResult={this.state.filterResult}
              toggleLoader = {this.toggleLoader}
              loaded={this.state.loaded}
              clearFilterResult={this.clearFilterResult}/>
              :
              <div></div>
            }
            </Container>
          </Container>
          <Container text style={{marginTop: '2em', marginBottom: '2em'}}>
            <CompareBoroughData />
          </Container>
      </div>
    )
  }
}

export default App

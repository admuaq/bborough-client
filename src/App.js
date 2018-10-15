import React, { Component } from 'react'
import './App.css'
import { Container, Modal, Dropdown, Grid, Header, Image, List, 
  Menu, Segment, Button } from 'semantic-ui-react'

import BoroughDropdown from './containers/BoroughDropdown'
import PostcodeDropdown from './containers/PostcodeDropdown'
import PresentedData from './components/presentedData'
import LondonBoroughs from './components/londonBoroughs'

class App extends Component {

  state = { 
    data: [],
    selectedBorough: {},
    selectedArea: {},
    showArea: false,
  }

  fetchData = () => {
    fetch('http://localhost:3000/boroughs')
    .then( resp => resp.json())
    .then( boroughData => this.setState({ data: boroughData }) )
  }

  handleBoroughClick = (e) => {
    let borough = e.target.value
    // clear up any classes that may exist
    // set the class of the selected borough to :hover
    this.renderPostcodes(borough) 
  }

  handlePostcodeClick = (e) => {
    let areacode = e.target.value
    this.renderResults(areacode)
  }

  renderPostcodes = (borough) => {
    // console.log(borough)
    let foundBorough = this.state.data.find( fb => fb.name === borough )
    this.setState({ ...this.state, 
      selectedBorough: foundBorough,
      showArea: false})
  }

  renderResults = (areacode) => {
    // console.log(areacode)
    let foundAreacode = this.state.selectedBorough.postcodes.find( fa => fa.outcode === areacode )
    // this.toggleShow(areacode)
    this.setState({ ...this.state, 
      selectedArea: foundAreacode,
      showArea: true })
      
  }

  toggleShow = (e) => {
    let trigger = e.target.value

    if (trigger === 'default-area'){
      console.log(trigger)
      this.setState({...this.state, 
        showArea: false,
        selectedArea: {} })}

    else if (trigger === 'default-borough'){
    console.log(trigger)
    this.setState({...this.state, 
      showArea: false,
      selectedBorough: {},
      selectedArea: {} })}
    else{
      return this.state}
  }

    

  componentDidMount(){
    this.fetchData()
  }

  render () {

    // const boroughMap = require('./images/londonBoroughsMap.svg')

    return (
      <div className='App'>
        <Menu fixed='top' inverted>
          <Container>
          </Container>
        </Menu>
        <Container style={{ marginTop: '7em', marginBottom: '2em'}}>
          <LondonBoroughs handleBoroughClick={this.handleBoroughClick}/>
        </Container>
        <Container style={{ marginTop: '2em', marginBottom: '2em'}}>
          <BoroughDropdown data={this.state.data} 
          handleBoroughClick={this.handleBoroughClick}
          toggleShow={this.toggleShow}/>
          { this.state.selectedBorough !== {}
          ?  <PostcodeDropdown 
          borough={this.state.selectedBorough}
          handlePostcodeClick={this.handlePostcodeClick}
          toggleShow={this.toggleShow}
          /> 
          : null }
          <Container text style={{marginTop: '2em', marginBottom: '2em'}}>
          { this.state.showArea !== false 
          ? 
            <PresentedData 
            area={this.state.selectedArea}
            borough={this.state.selectedBorough}/>
          : null}
          </Container>
        </Container>
      </div>
    )
  }
}

export default App

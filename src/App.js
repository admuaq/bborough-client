import React, { Component } from 'react'
import './App.css'
import { Container, Checkbox, Modal, Dropdown, Grid, Header, Image, List, 
  Menu, Segment, Button } from 'semantic-ui-react'

import BoroughDropdown from './containers/BoroughDropdown'
import PostcodeDropdown from './containers/PostcodeDropdown'
import PresentedData from './components/presentedData'
import Filter from './components/Filter'
import LondonBoroughs from './components/londonBoroughs'

class App extends Component {

  state = { 
    data: [],
    selectedBorough: {},
    selectedArea: {},
    showArea: false
  }

  fetchData = () => {
    fetch('http://localhost:3000/boroughs')
    .then( resp => resp.json())
    .then( boroughData => this.setState({ data: boroughData }) )
  }

  handleBoroughClick = (boroughName) => {
    let borough = boroughName
    // clear up any classes that may exist
    // set the class of the selected borough to :hover
    this.renderPostcodes(borough) 
  }

  handlePostcodeClick = (e) => {
    let areacode = e.target.value
    this.renderResults(areacode)
  }

  renderPostcodes = (borough) => {
    console.log(borough)
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

  toggleShow = () => {
    console.log(this.state)
    !this.state.showArea 
    ? this.setState({...this.state, showArea: true})
    : this.setState({...this.state, showArea: false})
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
          {
            !!this.state.selectedBorough.name && `Borough: ${this.state.selectedBorough.name}`
          }
          <br/>
          {/* { this.state.selectedBorough !== {}
          ?  <PostcodeDropdown 
          borough={this.state.selectedBorough}
          handlePostcodeClick={this.handlePostcodeClick}
          toggleShow={this.toggleShow}
          /> 
          : null } */}
          { !!this.state.selectedBorough.name && `Borough: ${this.state.selectedBorough.name}`
          ?  <Checkbox label='by average income' onChange={() => this.toggleShow()}/> 
          : '' }
          {/* <Container text style={{marginTop: '2em', marginBottom: '2em'}}>
          { this.state.showArea !== false 
          ? 
            <PresentedData 
            area={this.state.selectedArea}
            borough={this.state.selectedBorough}/>
          : null} */}
          <Container text style={{marginTop: '2em', marginBottom: '2em'}}>
          { this.state.showArea !== false 
          ? 
          <Filter 
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

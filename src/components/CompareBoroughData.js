import React, { Component } from 'react'
import { Button, Modal, Grid, Dropdown } from 'semantic-ui-react'

import BoroughDropdown from '../containers/BoroughDropdown'
import PostcodeDropdown from '../containers/PostcodeDropdown'
import BoroughDetail from './BoroughDetail'

import boroughNames from '../data/borough_names'

class CompareBoroughData extends Component {
  constructor (props) {
    super(props)
    this.state 
    = { selectedBoroughs: [],
        firstBoroughSelected: false,
        secondBoroughSelected: false,
        revealed: false
        }
  }
  // this.renderPostcodes(e.target.innerText)
  // renderPostcodes = (boroughName) => {
  //   let borough = this.props.boroughs.find( borough => borough.name === boroughName )

  //   let boroughPostcodes = []

  //   borough.postcodes.map( postcode => boroughPostcodes.push({ 'text': postcode.outcode, 'value':postcode.outcode }))
   
  //   this.setState({...this.state, selectedBorough: borough, postcodes: boroughPostcodes, boroughSelected: true })
  
  // }

  onSelect = (e, boroughs) => {
    let dropdownBox = e.target.parentElement.parentElement.className.split(" ")[6]
    let selectedItem = e.target.textContent
    
    if (dropdownBox === 'first-borough') {
      let foundBorough = boroughs.filter( borough => borough.name === selectedItem )
      this.setState({...this.state, selectedBoroughs: [...this.state.selectedBoroughs, foundBorough], firstBoroughSelected: true })
    }
    else if (dropdownBox === 'second-borough') {
      let foundBorough = boroughs.filter( borough => borough.name === selectedItem )
      this.setState({...this.state, selectedBoroughs: [...this.state.selectedBoroughs, foundBorough], secondBoroughSelected: true })
    }
    else
    {
      return 
    }
  }

  handleCompare = () => {

    if (this.state.firstBoroughSelected === false || this.state.secondBoroughSelected === false )
    {
      console.log('Please add another borough to compare') 
    }
    else if (this.state.firstBoroughSelected && this.state.secondBoroughSelected)
    {
      console.log(this.state.firstBorough) 
      console.log(this.state.secondBorough)
      this.setState({...this.state, revealed: true })
    }
    else
    {
      return
    }
  }

  clearFilterResult = () => {
    this.setState( { 
      selectedBoroughs: [],
      firstBoroughSelected: false,
      secondBoroughSelected: false,
      revealed: false } )
  }

  render () {
    // {text: 'Barking and Dagenham', value: 'Barking and Dagenham'}
    return (
      <Modal trigger={<Button >Compare boroughs</Button>} closeIcon onClose={()=> this.clearFilterResult()} >
        <Modal.Header>Compare Boroughs</Modal.Header>
        <Modal.Content>
          <Grid columns='equal'>
            <Grid.Row>
              <Grid.Column >
                <p>Borough: 1</p>
                <Dropdown closeOnChange placeholder='Select 1st Borough' className='first-borough' fluid selection options={boroughNames} onChange={(e) => this.onSelect(e, this.props.boroughs)}/>
              </Grid.Column>
              <Grid.Column >
                <p>Borough: 2</p>
                {/* {
                  this.state.boroughSelected
                  ? <Dropdown placeholder='Select Postcode' fluid selection options={this.state.postcodes} />
                  : <Dropdown placeholder='Select Postcode' fluid selection options={this.state.postcodes} disabled/>
                } */}
                <Dropdown closeOnChange placeholder='Select 2nd Borough' className='second-borough' fluid selection options={boroughNames} onChange={(e) => this.onSelect(e, this.props.boroughs)}/>
              </Grid.Column>
                <Button compact size='tiny' floated='right' onClick={() => this.handleCompare()}>Compare</Button>
            </Grid.Row>
          </Grid>
        </Modal.Content>
        <Modal.Content>
          {
            this.state.firstBoroughSelected && this.state.secondBoroughSelected && this.state.revealed
            ? 
            <div>
              <Grid columns='equal'>
                {this.state.selectedBoroughs.map( data=> 
                <Grid.Column >
                  <BoroughDetail key={data.id} boroughData={data}/>
                </Grid.Column>)
                }
              </Grid>
           </div>
            : null
          }
        </Modal.Content>
      </Modal>
    )
  }
}

export default CompareBoroughData

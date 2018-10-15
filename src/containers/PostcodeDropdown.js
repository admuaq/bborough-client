import React, { Component} from 'react'
import Data from '../components/presentedData'

export default class PostCodeDropdown extends Component {

  state = { selectedArea: {}, 
            hasSelected: false}

  // renderResults = (areacode) => {
  //   let foundAreacode = this.props.borough.postcodes.find( fa => fa.outcode === areacode )
  //   this.setState({ ...this.state, 
  //     selectedArea: foundAreacode,
  //     hasSelected: true })
  // }

  render () {
    // let results = <Data area={this.state.selectedArea} />

    // console.log(this.props.borough.postcodes)
    return (
      <div className='postcode-dropdown'>
      {/* {console.log(this.props.borough.postcodes)} */}
        <div>
          <select onChange={(e) =>{
            switch(e.target.value) {
              case 'default-area':
              return this.props.toggleShow(e)
              default:
              this.props.handlePostcodeClick(e)
            }}}>
            <option value='default-area'>Select Area</option>
            {this.props.borough.postcodes && this.props.borough.postcodes.map(code =>
              <option 
              key={code.id} 
              value={code.outcode}>
              {code.outcode}
              </option>)}
          </select>
          <div>
            {/* {this.state.hasSelected ? results : '' } */}
          </div>
        </div>
      </div>
    )
  }
}


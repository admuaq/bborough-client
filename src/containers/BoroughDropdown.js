import React, {Component} from 'react'
import PostCodeDropdown from './PostcodeDropdown'

export default class BoroughDropdown extends Component {
    state = { hasSelected: false,
        selectedBorough: {} }

    render() { 

      let postcodeComp = <PostCodeDropdown borough={this.state.selectedBorough}/>

      return ( 
        <div>
        <div className='borough-dropdown'>
          <div>
            <select onChange={(e) => {
              switch(e.target.value) {
                case 'default-borough':
                return this.props.toggleShow(e)
                default:
                this.props.handleBoroughClick(e)
              } 
              }}>
              <option value='default-borough'>Select Borough</option>
              {this.props.data.map(result =>
                <option 
                key={result.id} 
                value={result.name}>
                {result.name}
                </option>
              )}
            </select>
            <div>
            {/* { this.state.hasSelected ?  postcodeComp : <select disabled></select>  } */}
            </div>
          </div>
        </div>
      </div>
       );
    }
}

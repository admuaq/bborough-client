import React from 'react'
import {Modal, Button} from 'semantic-ui-react'

const Instructions = () => {
  return (
    <Modal trigger={<Button>Help</Button>} closeIcon>
      <Modal.Content>
        <h1>Welcome to Bborough!</h1>
        <h2>How it works?</h2>
        <span>Click on the <b><em>Compare Borough</em></b> button to compare boroughs and see overall rank for:
        <ul>
          <li>Health</li>
          <li>Happiness</li>
          <li>Education</li>
          <li>Population (Not accurate. For display purposes only)</li>
          <li>Average Salary Earned</li>
        </ul>
        </span>
        <span>
            Already know the borough you are interested in but not the area? Select a borough on the map and choose between multiple
            criteria:
          <ul>
            <li>Salary (Average proposed starting salary of locally posted jobs)</li>
            <li>Crime Rate (number of offences/incidents commited near to the area)</li>
            <li>House listings (Not accurate. For display purposes only)</li>
          </ul>
          Click on the newly displayed <b><em>Load Results</em></b> button to find the best area for you within the borough!
        </span>
        <p><span>
            Also you can check additional statistics such as housing and demographic breakdowns on the results page, or even look at houses in the area!
            (Both options redirect)
        </span></p>
        <p><span>
            For more info on the data used please refer to the github readme file for this project.
        </span></p>
        <p><span>Have fun!!!</span></p>
      </Modal.Content>
    </Modal>
  )
}

export default Instructions

import React from 'react'

const BoroughDetail = (props) => {
  return (
    <div>
      {console.log(props.boroughData.id)}
      <ul key={props.boroughData.id}>
        <li>id: {props.boroughData.id}</li>
        <li>name: {props.boroughData.name}</li>
        <li>avgInc: {props.boroughData.averageIncomeBorough}</li>
      </ul>
    </div>
  )
}

export default BoroughDetail

import React from 'react'

const BoroughDetail = (props) => {
  return (
    <div>
      {props.boroughData.map(data =>
        <ul key={data.id}>
          <li>id: {data.id}</li>
          <li>name: {data.name}</li>
          <li>avgInc: {data.averageIncomeBorough}</li>
        </ul>
      )}
      {console.log(props)}
    </div>
  )
}

export default BoroughDetail

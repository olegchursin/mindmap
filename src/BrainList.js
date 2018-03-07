import React from 'react'
import Brain from './Brain'

const BrainList = (props) => {
  return (
    <div className="ui text container">
      {props.brainAreas.map(b => {
        // console.log(b) // object
          return <div key={b.id}><Brain brainArea={b} handleSubmit={props.handleSubmit}/></div>
        })}
    </div>
  )
}

export default BrainList

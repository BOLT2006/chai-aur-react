import React from 'react'
import Village from './Village'

const Block = ({money}) => {
  return (
    <div>
      <h1>Block Gov Component</h1>
        <Village money = {money}/>
    </div>
  )
}

export default Block

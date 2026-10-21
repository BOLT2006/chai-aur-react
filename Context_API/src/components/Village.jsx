import React from 'react'
import People from './People'

const Village = ({money}) => {
  return (
    <div>
      <h1>Village Component</h1>
      <People money = {money}/>
    </div>
  )
}

export default Village

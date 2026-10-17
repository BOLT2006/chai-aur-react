import React from 'react'

const Product = ({name , price , color , obj = {}}) => {
  return (
    <div>
      <h1> Brand : {name}</h1>
      <h3>Price : {price}</h3>
      <h3>Color : {color}</h3>
      {obj.processor && <h3>Processor : {obj.processor}</h3>}
    </div>
  )
}

export default Product

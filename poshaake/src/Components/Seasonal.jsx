import React from 'react'

function Seasonal({image,name}) {
  return (
    <div>
   <img src={image}alt=""></img>
    <h3>{name}</h3>
    </div>
  )
}

export default Seasonal
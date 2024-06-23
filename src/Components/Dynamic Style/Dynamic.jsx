import React, { useState } from 'react'

function Dynamic() {
    const [erro , seterro]=useState(false);
    const changer=()=>{
        seterro(!erro)
    }
  return (
   <>
   <h1 style={{color:erro ? 'gray': 'red'}}>Welcome My Website</h1>
   <button onClick={changer}>Click Here!!</button>
   </>
  )
}

export default Dynamic
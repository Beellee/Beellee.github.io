//rfce
import React from 'react'
import "../styles/projectDisplay.css"
import imageUni from "../images/uniPage.png"

function Project({projectTitle}) {
  return (
    <div className='project'>
      <img className='image' src={imageUni}/>
      <h3>{projectTitle}</h3>

    </div>
  )
}

export default Project
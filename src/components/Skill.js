import React from 'react'
import '../styles/skillComponent.css'


function Skill({src, text}) {
  return (
    <div className='skillContainer'>
        <img
            src={src} // 'src'  for the image source
            alt=' '
        />
        <p>{text}</p>
    </div>
  )
}

export default Skill

import React from 'react'
import '../styles/skillComponent.css'


function Skill({src, text}) {
  return (
    <div className='skillContainer'>
        <img
            className='blur-image'
            src={src} // 'src'  for the image source
            alt='Image'
        />
        <p>{text}</p>
    </div>
  )
}

export default Skill

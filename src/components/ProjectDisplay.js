//rfce
import React from 'react'
import BlurImage from './BlurImage';
import "../styles/projectDisplay.css"


function Project({projectTitle, languages, projectDescription, image}) {
  return (
    <div className='project'>
      <BlurImage src={image} />
      <h3>{projectTitle}</h3>
      <div className='languages'>
        {languages.map((language, index) => (
          <button key={index} className='languageButton'>
            {language}
          </button>
        ))}
      </div>
      <p className='project-p'>{projectDescription}</p>
    </div>
  )
}

export default Project
//rfce
import React from 'react'
import BlurCircle from "../unused stuff/BlurCircle";
import "../styles/projectDisplay.css"


function Project({projectTitle, languages, projectDescription, image}) {
  return (
    <div className='project'>
      <img className='project-img' src={image}/>
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
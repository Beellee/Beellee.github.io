import React from 'react'
import '../styles/global.css'
import '../styles/home.css'

function Home() {
  return (
    <div className="pageContainer" >
      <h1>Hello world!</h1> 
      <div className='textContainer'>
        <p>Hi, I'm Paula! I am currently pursuing a degree in Data Science at UOC. While my primary focus is on Data Science, my curiosity extends beyond this field, and I have developed a keen interest in Frontend and Backend development.</p>
        <p className='linkMore'><a><u>Tell me more!</u></a></p>
      </div>
    </div>
  )
}

export default Home

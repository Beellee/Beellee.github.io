import React from 'react'
import '../styles/global.css'
import '../styles/home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div id="pageContainer" >
      <h1>Hello world!</h1> 
      <div className='textContainer'>
        <p>Hi, I'm Paula! I am currently pursuing a degree in Data Science at UOC. While my primary focus is on Data Science, my curiosity extends beyond this field, and I have developed a keen interest in Frontend and Backend development.</p>
        <p className='linkMore'><Link to="/AboutMe"><u>Tell me more!</u></Link></p>
      </div>
    </div>
  )
}

export default Home

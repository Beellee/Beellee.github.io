//rfce
import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import "./navbar.css"

function Navbar() {
  //const [click, setClick] = useState(false);
  //const handleClick = () => setClick(!click)

  return (
    <div className= "navbarBox">
        <ul className='navMenu'>
          <Link to="/aboutContact">
            <li>About me & contact</li>
          </Link>
          <Link to="/uniProjects">
            <li>University & Projects</li>
          </Link> 
          <Link to="/skills">
            <li>Skills</li>
          </Link>
        </ul>
    </div>
  )
}

export default Navbar
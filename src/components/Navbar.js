//rfce
import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import "../styles/navbar.css"

function Navbar() {
  //const [click, setClick] = useState(false);
  //const handleClick = () => setClick(!click)

  return (
    <div className= "navbarBox">
        <ul className='ul-navbar'>
          <Link to="/home" className="a-navbar" tabIndex={1}>
            <li className="li-navbar">Home</li>
          </Link>
          <Link to="/projects" className="a-navbar" tabIndex={2}>
            <li className="li-navbar">Projects</li>
          </Link> 
          <Link to="/skills" className="a-navbar" tabIndex={3}>
            <li className="li-navbar">Skills</li>
          </Link>
          <Link to="/contact" className="a-navbar" tabIndex={4}>
            <li className="li-navbar">Contact</li>
          </Link>
        </ul>
    </div>
  )
}

export default Navbar
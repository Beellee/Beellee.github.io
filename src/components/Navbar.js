//rfce
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click)

  return (
    <div class= "navbarBox">
        <ul className='navMenu'>
            <li className='navItem'>
              <Link to="/about-contact">About me & contact</Link>
            </li>
            <li className='navItem'>
              <Link to="/uni-projects">University & Projects</Link>
            </li>
            <li className='navItem'>
              <Link to="/skills">Skills</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar
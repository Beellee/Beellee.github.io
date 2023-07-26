import React from 'react'
import '../styles/contact.css'
import linkedinLogo from '../images/linkedin.png'

function Contact() {
  return (
    <div id="pageContainer" > 
      <div className='introContainer'>
        <h1>Contact me</h1>
        <p>If you wanna get to know me better or have any questions, feel free to hit me up using the contact info below!</p>
        <div className='contactContainer'>
          <div className='link-email'>
            <div>
              <p>Linkedin</p>
              <a href='https://www.linkedin.com/in/paula-%C3%A1lvarez-4a9474258/'>
                <img src={linkedinLogo} ></img>
              </a>
            </div>
            <div>
              <p>Email</p>
              <p>paulaalvarezc02@gmail.com</p>
            </div>
          </div>
          <button>Download CV</button>
          <p>Thank you for your interest! I'm excited to hear from you :D</p>
        </div>
      </div>
    </div>
  )
}

export default Contact

/*
<div className='contactContainer'>
        <div className='link-email'>
          <div><br>Linkedin</br></div>
        </div>
        <button>Download CV</button>
        <p>Thank you for your interest! I'm excited to hear from you :D</p>
      </div>
*/
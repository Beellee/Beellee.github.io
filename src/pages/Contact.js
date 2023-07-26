import React from 'react'
import '../styles/contact.css'

function Contact() {
  return (
    <div id="pageContainer" > 
      <div className='introContainer'>
        <h1>Contact me</h1>
        <p>If you wanna get to know me better or have any questions, feel free to hit me up using the contact info below!</p>
      </div>
      <div className='contactContainer'>
        <div className='link-email'>
          <div><br>Linkedin</br></div>
        </div>
        <button>Download CV</button>
        <p>Thank you for your interest! I'm excited to hear from you :D</p>
      </div>
    </div>
  )
}

export default Contact
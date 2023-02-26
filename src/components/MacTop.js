import React from 'react'
import "./macTop.css"
function MacTop() {
  return (
    <div class= "box">
      <img class="appleIcon" src={process.env.PUBLIC_URL + "/appleImages/apple.png"} alt=""/>  
    </div>
  )
}
export default MacTop
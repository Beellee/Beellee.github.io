import React from 'react'
import MacTop from '../single-use-elements/MacTop'
import Portal from "../components/Portal"; //this is for portal= 🧿
import { useState } from 'react' //🧿
import "./aboutContact.css"


function AboutContact() {
  const [isModalOpened, setIsModalOpened] = useState(false);
  console.log("isModalOpened", isModalOpened);
  return (
    <div className='pageContainer'>
      <MacTop/>
      AboutContact
      <button onClick={ () => setIsModalOpened(true)}>Change desktop background</button> 
      <Portal isOpened={isModalOpened} onClose={()=> setIsModalOpened(false)}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </Portal>
    </div>
  )
}

export default AboutContact
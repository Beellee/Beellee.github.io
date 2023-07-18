import React from 'react'
import MacTab from "../components/MacTab";
import '../styles/aboutMe.css'

function Contact() {
  return (
    <div  id="pageContainer">
    <h1>About me</h1> 
    <MacTab
      title="Education 🎓"
      text="I'm currently studying Data Science at UOC university, and I'm loving every minute of it! Being an aspiring Data Scientist, I'm super passionate about digging into complex datasets and using them to solve real-world problems. But that's not all—I've also been exploring other cool areas like Frontend and Backend development alongside my studies."
      className="MacTab1"
    />
    <MacTab
      title="Skills ⚙️"
      text="During my time at university, I've covered a wide range of data science concepts and tools. I've become pretty proficient in Python, which is like the superhero of data analysis and machine learning. I'm also familiar with SQL for managing databases and running queries, along with other essential data science libraries and frameworks. 
      Beyond data science, I've been taking the time to dive into frontend and backend development on my own. I've got a good grasp of languages like CSS, JavaScript, and React, and I love creating visually stunning and interactive user interfaces. While I don't have extensive experience in backend development just yet, I'm hungry to learn more about technologies like Node.js to build solid server-side applications."
      className="MacTab2"
    />
    </div>
  )
}

export default Contact
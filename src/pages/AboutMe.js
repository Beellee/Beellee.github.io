import React, {useEffect} from 'react'
import MacTab from "../components/MacTab";
import '../styles/aboutMe.css'


import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {

  useEffect(() => {
    AOS.init({
      duration: 800, // You can adjust the animation duration as per your preference
    });
  }, []);

  return (
    <div  id="pageContainerAbout" className="parentDivAbout">
    <h1>About me</h1> 
    
    <MacTab
      title="Education 🎓"
      text="I'm currently studying Data Science at UOC university, and I'm loving every minute of it! Being an aspiring Data Scientist, I'm super passionate about digging into complex datasets and using them to solve real-world problems. But that's not all—I've also been exploring other cool areas like Frontend and Backend development alongside my studies."
      className="MacTab1"
    />
    <MacTab
      title="Skills ⚙️"
      text={
        "During my time at university, I've covered a wide range of data science concepts and tools. I've become pretty proficient in Python, which is like the superhero of data analysis and machine learning. I'm also familiar with SQL for managing databases and running queries, along with other essential data science libraries and frameworks.\n\nBeyond data science, I've been taking the time to dive into frontend and backend development on my own. I've got a good grasp of languages like CSS, JavaScript, and React, and I love creating visually stunning and interactive user interfaces. While I don't have extensive experience in backend development just yet, I'm hungry to learn more about technologies like Node.js to build solid server-side applications."
      }
      className="MacTab2"
    />

    <MacTab
      title="Approach 🌱"
      text="I'm all about blending my growing data science knowledge with my interest in software development. By doing so, I can tackle projects from a well-rounded perspective. I strongly believe that combining analytical and technical skills allows me to offer comprehensive solutions that truly meet user needs."
      className="MacTab3"
    />
    <MacTab
      title="Passion & dedication 🔥"
      text="As I continue my academic journey, I'm dedicated to expanding my knowledge in both Data Science and software development. I'm always up for a challenge and thrive on collaborating with industry professionals. Together, we can make a real positive impact."
      className="MacTab4"
    />
    <h2 className="h2-about">What I like</h2>

    <div className="likeLayout">
      <div className="girdElement">
        <span>🏔️</span>
        <p className="girdElement-p">Hiking and exploring nature trails</p>
      </div>
      <div className="girdElement">
        <span>📚</span>
        <p className="girdElement-p">Reading</p>
      </div>
      <div className="girdElement">
        <span>♟️</span>
        <p className="girdElement-p">Playing board games and solving riddles</p>
      </div>
      <div className="girdElement">
        <span>🎮</span>
        <p className="girdElement-p">Coop games</p>
      </div>
      <div className="girdElement">
        <span>🐾</span>
        <p className="girdElement-p">Spending time with my pets and family</p>
      </div>
      <div className="girdElement">
        <span>🤼‍♀️</span>
        <p className="girdElement-p">Sports</p>
      </div>
    </div>
    </div>
  )
}

export default About
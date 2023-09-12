import React, { useEffect, useRef } from 'react';
import Project from "../components/ProjectDisplay";
import '../styles/projects.css';

//imagenes de los proyectos
import imageUni from "../images/uniPage.png"
import imageDataVisDash from "../images/dataVisDashboard.png"
import imageProjectsWebsite from "../images/projectsWebsite.png"


function UniProjects() {
  const scrollContainerRef = useRef(null);

  // Languages of the projects
  const projectUni = ['JavaScript', 'HTML', 'CSS'];
  const projectsWebsite =['React', 'JavaScript', 'HTML', 'CSS']
  const dataVisDashboard = ['Pyhton', 'JavaScript', 'HTML', 'CSS']

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleScroll = (evt) => {
      evt.preventDefault(); // Prevent the default scroll behavior
      scrollContainer.scrollLeft += evt.deltaY;
    };

    scrollContainer.addEventListener('wheel', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      scrollContainer.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    
    <div ref={scrollContainerRef} className='scrollableObject'>
      <div className='projectsTitle'>
        <h1>Projects</h1>
        <h3 className='projects-h3'>Exhibition this way ➔</h3>
      </div>
      <div className='projectsWrapper'>
      <Project 
        projectLink = "https://beellee.github.io/super-acorn-website/university"
        projectTitle="University page" 
        languages={projectUni}
        image = {imageUni}
        projectDescription = "This project serves as a digital repository for all my university projects. The website is built using CSS, HTML, and JavaScript, with each project utilizing different technologies depending on the subject it was created for."
      />
      <div className='comingSoon'>
        <h3>Coming Soon ...</h3>
      </div>
      <Project 
        projectTitle="Data visualization dashboard" 
        languages={dataVisDashboard}
        image = {imageDataVisDash}
        projectDescription = " Interactive Data Visualization Dashboard showcasing global energy access, renewable energy adoption, and sustainability insights from 2000 to 2020. This project will allow the user to explore trends, economic impact, and geographical patterns for informed decision-making"
      />
      <Project 
        projectTitle="Project library" 
        languages={projectsWebsite}
        image = {imageProjectsWebsite}
        projectDescription = "An organized online portfolio showcasing my university projects, sorted by technology for easy access and a seamless browsing experience."
      />
        
      </div>
    </div>
    
  );
}

export default UniProjects;

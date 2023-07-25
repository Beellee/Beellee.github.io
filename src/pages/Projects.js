import React, { useEffect, useRef } from 'react';
import Project from "../components/ProjectDisplay";
import '../styles/projects.css';

//imagenes de los proyectos
import imageUni from "../images/uniPage.png"

function UniProjects() {
  const scrollContainerRef = useRef(null);

  // Languages of the projects
  const projectUni = ['JavaScript', 'HTML', 'CSS'];

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
        projectTitle="University page" 
        languages={projectUni}
        image = {imageUni}
        projectDescription = "This project serves as a digital repository for all my university projects. The website is built using CSS, HTML, and JavaScript, with each project utilizing different technologies depending on the subject it was created for."
      />
      <Project 
        projectTitle="University page" 
        languages={projectUni}
        image = {imageUni}
        projectDescription = "This project is meant to be a 'folder' that contains all the projects that I've done along my university. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non turpis luctus, pretium nisl a, finibus erat. Aliquam vitae mattis massa, eu varius augue. Praesent nec condimentum dui. Phasellus vehicula sed nibh at suscipit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam tempor, leo a pulvinar finibus, nunc neque ultrices neque, quis congue felis felis eget risus. Mauris scelerisque magna ac tristique porttitor. Sed varius mattis eros, sed luctus nunc consequat eu."
      />
        
      </div>
    </div>
    
  );
}

export default UniProjects;

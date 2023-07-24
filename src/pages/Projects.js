import React, { useEffect, useRef } from 'react';
import Project from "../components/ProjectDisplay";
import '../styles/projects.css';

function UniProjects() {
  const scrollContainerRef = useRef(null);

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
      <div>
        <h1>Projects</h1>
        <h3>Exhibition this way ➔</h3>
      </div>
      <div className='projectsWrapper'>
        <Project
          projectTitle="A"
        />
        
      </div>
    </div>
    
  );
}

export default UniProjects;

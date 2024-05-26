import React, { useEffect, useRef } from 'react';
import Project from "../components/ProjectDisplay";
import '../styles/projects.css';

//imagenes de los proyectos
import imageCrypto from "../images/cryptoDM.jpeg"
import imageHawksClassification from "../images/hawksClassification.jpeg"
import imageProjectsWebsite from "../images/uniDB.jpeg"


function UniProjects() {
  const scrollContainerRef = useRef(null);

  // Languages of the projects
  const cryptocurrenciesDataMining = ['Python', 'ETL', 'APIs', 'Machine Learning'];
  const projectsWebsite =['React', 'JavaScript', 'HTML', 'CSS']
  const hawksClassification = ['R Software', 'Data Preparation', 'Data Analysis']

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
        projectLink = "https://github.com/Beellee/Data-Mining-project-on-Cryptocurrencies"
        projectTitle="Data Mining project on Cryptocurrencies" 
        languages={cryptocurrenciesDataMining}
        image = {imageCrypto}
        projectDescription = "In this data mining project, we analyze the historical price trends of Bitcoin, Ethereum, Solana, and BNB to gain insights into their price movements and patterns. The goal is also to predict whether a specific coin's price will rise or fall."
      />
      <Project 
        projectTitle="Hawks Classification Analysis"
        projectLink = "https://github.com/Beellee/hawks-classification-analysis" 
        languages={hawksClassification}
        image = {imageHawksClassification}
        projectDescription = " This project aims to classify different species of hawks based on various physical and behavioral attributes. The primary goal is to develop a robust classification model that accurately identifies hawk species."
      />
      <div className='comingSoon'>
        <h3>Coming Soon ...</h3>
      </div>
      <Project 
        projectTitle="Project library" 
        languages={projectsWebsite}
        image = {imageProjectsWebsite}
        projectDescription = "An organized online portfolio showcasing my university projects, sorted by technology for easy access and easy browsing experience."
      />
        
      </div>
    </div>
    
  );
}

export default UniProjects;

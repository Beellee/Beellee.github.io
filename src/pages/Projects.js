import React, { useEffect, useRef } from 'react';
import Project from "../components/ProjectDisplay";
import '../styles/projects.css';

//imagenes de los proyectos
import imageProjectsWebsite from "../images/projects/uniDB.jpeg"
import imageHawksClassification from "../images/projects/hawksClassification.png"
import imageDataton from "../images/projects/novartisDataton.png"
import imageCrypto from "../images/projects/cryptoDM.png"
import imageWomenStem from "../images/projects/womenInSTEM.png"
import imageTextMining from "../images/projects/textMining.png"
import imageSignLanguage from "../images/projects/signLanguage.png"


function UniProjects() {
  const scrollContainerRef = useRef(null);

  // Languages of the projects
  const projectsWebsite =['React', 'JavaScript', 'HTML', 'CSS']
  const hawksClassification = ['R Software', 'Data Preparation', 'Data Analysis']
  const dataton = ['Teamwork', 'Time Series', 'Decision Trees', 'Python', 'R', 'EDA', 'Feature Engineering']
  const cryptocurrenciesDataMining = ['Python', 'ETL', 'APIs', 'Machine Learning'];
  const womenStem = ['Data Visualization']
  const textMining = ['NLP', 'Text Classification', 'Topic Modeling', 'Sentiment Analysis']
  const singLanguage = ['Python', 'Computer Vision', 'Machine Learning']

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
        projectLink = "https://github.com/Beellee/asl-gesture-recognition"
        projectTitle="ASL recognition with Computer Vision" 
        languages={singLanguage}
        image = {imageSignLanguage}
        projectDescription = "Machine learning project focused on translating American Sign Language gestures into English using computer vision and sequence modeling."
      />
      <Project 
        projectLink = "https://github.com/Beellee/text_mining"
        projectTitle="Natural Language Processing" 
        languages={textMining}
        image = {imageTextMining}
        projectDescription = "Applied NLP techniques to analyze review texts through topic modeling and sentiment classification using machine learning."
      />
      <Project 
        projectLink = "https://github.com/Beellee/WomenInSTEMVisualization"
        projectTitle="Women in STEM visualization" 
        languages={womenStem}
        image = {imageWomenStem}
        projectDescription = "Explored gender disparities in STEM through interactive data visualizations, highlighting trends in education, employment, and professional pathways across Europe."
      />
      <Project 
        projectLink = "https://github.com/Beellee/Data-Mining-project-on-Cryptocurrencies"
        projectTitle="Data Mining project on Cryptocurrencies" 
        languages={cryptocurrenciesDataMining}
        image = {imageCrypto}
        projectDescription = "In this data mining project, we analyze the historical price trends of Bitcoin, Ethereum, Solana, and BNB to gain insights into their price movements and patterns. The goal is also to predict whether a specific coin's price will rise or fall."
      />
      <Project 
        projectTitle="Novartis Dataton"
        projectLink = "https://github.com/Beellee/datathon-2023" 
        languages={dataton}
        image = {imageDataton}
        projectDescription = "Predicted daily sales patterns using SARIMA and Decision Tree models, analyzing multi-country brand data to improve forecasting accuracy."
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

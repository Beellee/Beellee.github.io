import React from 'react'
import "../styles/macTab.css"


function MacTab({ title, text, className }) {
  const paragraphs = text.split(/\n+/);
    return (
        <div className= {`element ${className}`}>
          <div className="topPart">
            <div className="colors">
              <div className="red"></div>
              <div className="yellow"></div>
              <div className="green"></div>
            </div>
            <p className="elementTitle">{title}</p>
          </div>
          <div className="customText">
            {/* Render each paragraph with separate lines */}
            {paragraphs.map((paragraph, index) => (
              <React.Fragment key={index}>
                {index > 0 && <br />} {/* Add <br /> element for line breaks */}
                {paragraph}
              </React.Fragment>
            ))}
          </div>
        </div>
    
    );
}
  
export default MacTab;


import React from 'react'
import "../styles/macTab.css"


function MacTab({ title, text, className }) {
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
            {text}
          </div>
        </div>
    
    );
}
  
export default MacTab;


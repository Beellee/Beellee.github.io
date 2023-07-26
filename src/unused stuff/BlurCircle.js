import React, { useState, useEffect } from 'react';
import './blurCircle.css'; 
// Creates a blurred circle around the mouse
// HOW TO USE
//to use this just import and add the component <BlurCircle /> in whatever page you want it to be

function BlurCircle() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(event) {
      setMousePosition({ x: event.clientX, y: event.clientY });
    }

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div className="blur-circle" style={{ left: mousePosition.x, top: mousePosition.y }} />;
}

export default BlurCircle;

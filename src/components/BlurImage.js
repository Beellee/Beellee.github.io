import React, { useRef } from 'react';
import '../styles/blurImage.css'; 

function BlurImage({ src }) {
  const imageRef = useRef(null);

  function handleMouseMove(event) {
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const mouseX = event.clientX - left;
    const mouseY = event.clientY - top;

    // Calculate the distance from the center of the image
    const distanceX = Math.abs(mouseX - width / 2);
    const distanceY = Math.abs(mouseY - height / 2);
    const maxDistance = Math.max(width / 2, height / 2);

    // Calculate the blur amount based on the distance from the center
    const blurAmount = (Math.sqrt(distanceX ** 2 + distanceY ** 2) / maxDistance) * 20; // Adjust the blur factor as needed

    // Apply the blur effect to the image
    imageRef.current.style.filter = `blur(${blurAmount}px)`;
  }

  function handleMouseOut() {
    // Reset the blur when the mouse leaves the image
    imageRef.current.style.filter = 'blur(0)';
  }

  return (
    <img
        ref={imageRef}
        className='blur-image'
        src={src} // 'src'  for the image source
        alt='Image'
        onMouseMove={handleMouseMove}
        onMouseOut={handleMouseOut}
    />
  );
}

export default BlurImage;

import React, { useState, useEffect } from 'react';

const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayText(text.substring(0, currentIndex));
      currentIndex++;
      if (currentIndex > text.length) {
        clearInterval(interval);
      }
    }, 100); // Adjust the speed of typing here (milliseconds)
    
    return () => clearInterval(interval);
  }, [text]);
  
  return <p className='[font-size:10px] text-cyan font-bold sm:text-lg '>{displayText}</p>;
}

export default Typewriter;

import React, { useState, useEffect } from 'react';

const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [speed, setSpeed] = useState(200); // Typing speed in milliseconds

  useEffect(() => {
    const handleTyping = () => {
      if (isDeleting) {
        setDisplayText(text.substring(0, textIndex));
        setTextIndex(prevIndex => prevIndex - 1);
        if (textIndex === 0) {
          setIsDeleting(false);
          setSpeed(100); // Reset speed after deleting
        }
      } else {
        setDisplayText(text.substring(0, textIndex));
        setTextIndex(prevIndex => prevIndex + 1);
        if (textIndex === text.length) {
          setTimeout(() => {
            setIsDeleting(true);
            setSpeed(10);
          }, 1000);
          
         
        }
      }
    };

    const timer = setInterval(handleTyping, speed);

    return () => clearInterval(timer);
  }, [text, isDeleting, textIndex, speed]);

  return (
    <p className='[font-size:10px] text-cyan font-bold sm:text-xl'>
      {displayText}
      <span className="blinking-cursor  text-custom11">|</span>
    </p>
  );
};

export default Typewriter;
import { useState, useEffect } from 'react';

export function useTypewriter(text, speed = 50, startDelay = 0) {
  const [displayedText, setDisplayedText] = useState('');
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    let delayTimer;
    if (startDelay > 0) {
      delayTimer = setTimeout(() => setIsStarted(true), startDelay);
    } else {
      setIsStarted(true);
    }
    return () => clearTimeout(delayTimer);
  }, [startDelay]);

  useEffect(() => {
    if (!isStarted) return;
    
    let i = 0;
    setDisplayedText('');
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    
    return () => clearInterval(timer);
  }, [text, speed, isStarted]);

  return displayedText;
}

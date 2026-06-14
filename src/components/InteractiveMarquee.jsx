import React, { useRef, useEffect } from 'react';
import './InteractiveMarquee.css';

export default function InteractiveMarquee({ items }) {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const scrollPosition = useRef(0);
  const velocity = useRef(1.5); // Default slow left scroll
  const animationRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      // Get container boundaries
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const mouseX = e.clientX;
      
      // Calculate distance from center
      const distance = mouseX - centerX;
      
      // Normalize distance (-1 to 1) and apply multiplier for speed
      const maxVelocity = 6; 
      const normalized = distance / (rect.width / 2);
      
      // If cursor is on right, distance is positive, so velocity is positive (scroll left)
      // If cursor is on left, distance is negative, so velocity is negative (scroll right)
      velocity.current = normalized * maxVelocity;
    };

    const handleMouseLeave = () => {
      // Gently return to default slow scroll
      velocity.current = 1.5;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  useEffect(() => {
    const scroll = () => {
      if (scrollerRef.current) {
        // Total scrollable width is half of the duplicated content width
        const itemWidth = scrollerRef.current.scrollWidth / 2;
        
        // Subtracting velocity. A positive velocity scrolls left.
        scrollPosition.current -= velocity.current;

        // Infinite loop bounds
        if (scrollPosition.current <= -itemWidth) {
          scrollPosition.current += itemWidth;
        } else if (scrollPosition.current > 0) {
          scrollPosition.current -= itemWidth;
        }

        scrollerRef.current.style.transform = `translateX(${scrollPosition.current}px)`;
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <div className="interactive-marquee-container" ref={containerRef}>
      <div className="interactive-marquee-scroller" ref={scrollerRef}>
        {[...items, ...items].map((tech, index) => (
          <div className="interactive-marquee-item" key={index}>
            <div className="interactive-marquee-icon">{tech.icon}</div>
            <span className="interactive-marquee-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

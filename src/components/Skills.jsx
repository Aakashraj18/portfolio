import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import InteractiveMarquee from './InteractiveMarquee';
import codingVideo from '../assets/codingperson.webm';
import './Skills.css';

const techIcons = [
  { name: 'C++', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt="C++" className="tech-logo" /> },
  { name: 'C', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" alt="C" className="tech-logo" /> },
  { name: 'JavaScript', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" className="tech-logo" /> },
  { name: 'TypeScript', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" className="tech-logo" /> },
  { name: 'HTML5', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" className="tech-logo" /> },
  { name: 'CSS3', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3" className="tech-logo" /> },
  { name: 'React', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="tech-logo" /> },
  { name: 'Node.js', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" className="tech-logo" /> },
  { name: 'Express', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt="Express" className="tech-logo invert-logo" /> },
  { name: 'MongoDB', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="tech-logo" /> },
  { name: 'SQL', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="SQL" className="tech-logo" /> },
  { name: 'Git', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" className="tech-logo" /> },
  { name: 'GitHub', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" className="tech-logo invert-logo" /> },
  { name: 'Vite', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" alt="Vite" className="tech-logo" /> },
];

const bullets = [
  '⚡ Build full-stack web applications using the MERN Stack',
  '⚡ Develop scalable REST APIs with Node.js and Express',
  '⚡ Strong problem-solving skills with 1000+ DSA problems solved',
  '⚡ Experienced with real-time applications using Socket.IO',
];

// Framer motion variants for the bullet list
const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger effect for items
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Skills() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="skills section" id="skills" ref={ref}>
      <div className="skills__hero-container">
        
        {/* Left Side: Video container */}
        <div className="skills__video-wrapper">
          <div className="skills__video-glow"></div>
          <div className="skills__video-container">
            <video 
              src={codingVideo} 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="skills__video"
            />
          </div>
        </div>

        {/* Right Side: Content & Text Animations */}
        <div className="skills__info">
          <h2 className="skills__heading">What I do</h2>
          <h3 className="skills__subheading">FULL STACK DEVELOPER WHO LOVES TO BUILD AND SOLVE</h3>

          <motion.ul 
            className="skills__bullets-list"
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {bullets.map((bullet, i) => (
              <motion.li key={i} variants={itemVariants} className="skills__bullet-item">
                <span className="skills__bullet-icon">⚡</span>
                <span className="skills__bullet-text">{bullet.replace('⚡ ', '')}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>

      {/* Marquee spanning full width */}
      <div className={`skills__marquee-section ${isVisible ? 'skills__content--visible' : ''}`}>
        <h3 className="skills__stack-heading center-heading">Tech Stack</h3>
        <InteractiveMarquee items={techIcons} />
      </div>
    </section>
  );
}

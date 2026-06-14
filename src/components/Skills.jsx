import { useScrollReveal } from '../hooks/useScrollReveal';
import { useTypewriter } from '../hooks/useTypewriter';
import InteractiveMarquee from './InteractiveMarquee';
import developerImg from '../assets/developer_hero.jpg';
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

export default function Skills() {
  const [ref, isVisible] = useScrollReveal();
  
  // Subtitle typing effect
  const subtitleText = useTypewriter('FULL STACK DEVELOPER WHO LOVES TO BUILD AND SOLVE', 40, isVisible ? 300 : 0);

  return (
    <section className="skills section" id="skills" ref={ref}>
      <div className={`skills__content ${isVisible ? 'skills__content--visible' : ''}`}>
        
        {/* Original Developer Illustration */}
        <div className="skills__illustration">
          <img src={developerImg} alt="Developer illustration" className="skills__lottie" />
        </div>

        <div className="skills__info">
          <h2 className="skills__heading">What I do</h2>
          <p className="skills__subtitle">
            {subtitleText}
            <span className="cursor blink">|</span>
          </p>

          <div className="skills__bullets">
            {bullets.map((bullet, i) => (
              <p className="skills__bullet" key={i}>{bullet}</p>
            ))}
          </div>
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

import { useScrollReveal } from '../hooks/useScrollReveal';
import { useTypewriter } from '../hooks/useTypewriter';
import developerImg from '../assets/developer_hero.jpg';
import './Skills.css';

const techStack = [
  'C++', 'C', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3',
  'React', 'Node.js', 'Express', 'MongoDB', 'SQL',
  'Git', 'GitHub', 'Linux', 'VSCode', 'Vite'
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

          <div className="skills__tech-grid">
            {techStack.map((tech, index) => (
              <span
                className="skills__tech-badge"
                key={tech}
                style={{ '--badge-delay': `${index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="skills__bullets">
            {bullets.map((bullet, i) => (
              <p className="skills__bullet" key={i}>{bullet}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

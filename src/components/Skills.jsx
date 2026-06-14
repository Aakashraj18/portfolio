import { useScrollReveal } from '../hooks/useScrollReveal';
import skillsImg from '../assets/skills_illustration.png';
import './Skills.css';

const techIcons = [
  { name: 'C++', icon: '⚡', color: '#00599C' },
  { name: 'C', icon: '🔧', color: '#A8B9CC' },
  { name: 'JavaScript', icon: '🟨', color: '#f7df1e' },
  { name: 'TypeScript', icon: '🔷', color: '#3178c6' },
  { name: 'HTML5', icon: '🌐', color: '#e34f26' },
  { name: 'CSS3', icon: '🎨', color: '#1572b6' },
  { name: 'React', icon: '⚛️', color: '#61dafb' },
  { name: 'Node.js', icon: '🟩', color: '#339933' },
  { name: 'Express', icon: '🚂', color: '#000000' },
  { name: 'MongoDB', icon: '🍃', color: '#47a248' },
  { name: 'SQL', icon: '🗄️', color: '#4479a1' },
  { name: 'Git', icon: '📦', color: '#f05032' },
  { name: 'GitHub', icon: '🐙', color: '#6e5494' },
  { name: 'Linux', icon: '🐧', color: '#fcc624' },
  { name: 'VSCode', icon: '💻', color: '#007acc' },
  { name: 'Vite', icon: '⚡', color: '#646cff' },
];

const bullets = [
  '⚡ Build full-stack web applications using the MERN Stack',
  '⚡ Develop scalable REST APIs with Node.js and Express',
  '⚡ Strong problem-solving skills with 1000+ DSA problems solved',
  '⚡ Experienced with real-time applications using Socket.IO',
];

export default function Skills() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="skills section" id="skills" ref={ref}>
      <div className={`skills__content ${isVisible ? 'skills__content--visible' : ''}`}>
        <div className="skills__illustration">
          <img src={skillsImg} alt="Skills illustration" />
        </div>

        <div className="skills__info">
          <h2 className="skills__heading">What I do</h2>
          <p className="skills__subtitle">
            FULL STACK DEVELOPER WHO LOVES TO BUILD AND SOLVE
          </p>

          <div className="skills__icons-grid">
            {techIcons.map((tech, index) => (
              <div
                className="skills__icon-box"
                key={tech.name}
                style={{ '--icon-delay': `${index * 0.05}s`, '--icon-color': tech.color }}
                title={tech.name}
              >
                <span className="skills__icon-emoji">{tech.icon}</span>
                <span className="skills__icon-name">{tech.name}</span>
              </div>
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

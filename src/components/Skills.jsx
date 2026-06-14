import { useScrollReveal } from '../hooks/useScrollReveal';
import { useTypewriter } from '../hooks/useTypewriter';
import developerImg from '../assets/developer_hero.jpg';
import './Skills.css';

const techIcons = [
  { name: 'C++', icon: '⚡' },
  { name: 'C', icon: '🔧' },
  { name: 'JavaScript', icon: '🟨' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'HTML5', icon: '🌐' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟩' },
  { name: 'Express', icon: '🚂' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'SQL', icon: '🗄️' },
  { name: 'Git', icon: '📦' },
  { name: 'GitHub', icon: '🐙' },
  { name: 'Vite', icon: '⚡' },
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

          <div className="skills__marquee-wrapper">
            <div className="skills__marquee">
              {[...techIcons, ...techIcons].map((tech, index) => (
                <div className="skills__squircle" key={index}>
                  <div className="skills__squircle-icon">{tech.icon}</div>
                  <span className="skills__squircle-name">{tech.name}</span>
                </div>
              ))}
            </div>
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

import { useScrollReveal } from '../hooks/useScrollReveal';
import './Education.css';

const educationData = [
  {
    institution: 'National Institute of Technology, Silchar',
    degree: 'B.Tech in Computer Science and Engineering',
    period: '2023 - 2027',
    logo: '🎓',
    details: [
      'Pursuing core CS subjects including DSA, OOP, OS, and Database Systems.',
      'Active participant in competitive programming and technical clubs.',
    ],
  },
  {
    institution: 'Kendriya Vidyalaya Narangi, Guwahati',
    degree: 'Senior Secondary Education (Class XII)',
    period: 'Graduated 2022',
    logo: '🏫',
    details: [
      'Passed with 91.2%',
      'Focused on Science stream with Mathematics and Computer Science.',
    ],
  },
  {
    institution: 'Kendriya Vidyalaya Narangi, Guwahati',
    degree: 'Secondary Education (Class X)',
    period: 'Graduated 2020',
    logo: '🏫',
    details: [
      'Passed with 91.8%',
      'Active participant in regional science exhibitions and quizzes.',
    ],
  },
];

export default function Education() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="education section" id="education" ref={ref}>
      <div className={`education__header ${isVisible ? 'reveal--visible' : 'reveal--hidden'}`}>
        <h2 className="section__title">Education</h2>
        <p className="section__subtitle">
          My academic qualifications and institutional background.
        </p>
      </div>

      <div className="education__timeline">
        {educationData.map((item, index) => (
          <div 
            className={`education__item ${isVisible ? 'reveal--visible' : 'reveal--hidden'}`} 
            key={item.institution + item.degree}
            style={{ '--reveal-delay': `${index * 0.2}s` }}
          >
            <div className="education__logo-container">
              <span className="education__logo">{item.logo}</span>
            </div>
            <div className="education__content card">
              <h3 className="education__inst">{item.institution}</h3>
              <div className="education__meta">
                <span className="education__degree">{item.degree}</span>
                <span className="education__period">{item.period}</span>
              </div>
              <ul className="education__details">
                {item.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

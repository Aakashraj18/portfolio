import { useScrollReveal } from '../hooks/useScrollReveal';
import './Education.css';

const educationData = [
  {
    institution: 'National Institute of Technology, Silchar',
    degree: 'Bachelor of Technology - Computer Science and Engineering',
    period: 'July 2023 - June 2027',
    grade: 'CGPA: 8.11',
    logo: '🎓',
    details: [
      'Pursuing core CS subjects including DSA, OOP, OS, and Database Systems.',
      'Active participant in competitive programming and technical clubs.',
    ],
  },
  {
    institution: 'Kendriya Vidyalaya Narangi, Guwahati',
    degree: 'Higher Secondary Certificate (HSC)',
    period: 'July 2020 - June 2022',
    grade: 'Percentage: 86.8%',
    logo: '🏫',
    details: [
      'Focused on Science stream with Mathematics and Computer Science.',
    ],
  },
  {
    institution: 'Kendriya Vidyalaya Narangi, Guwahati',
    degree: 'Secondary School Certificate (SSC)',
    period: 'July 2010 - June 2020',
    grade: 'Percentage: 86%',
    logo: '🏫',
    details: [
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

      <div className="education__list">
        {educationData.map((item, index) => (
          <div 
            className={`education__card card ${isVisible ? 'reveal--visible' : 'reveal--hidden'}`} 
            key={item.institution + item.degree}
            style={{ '--reveal-delay': `${index * 0.15}s` }}
          >
            <div className="education__card-header">
              <div className="education__logo-box">
                <span className="education__logo">{item.logo}</span>
              </div>
              <div className="education__title-box">
                <h3 className="education__inst">{item.institution}</h3>
                <h4 className="education__degree">{item.degree}</h4>
              </div>
            </div>
            
            <div className="education__card-body">
              <div className="education__meta">
                <span className="education__period">{item.period}</span>
                <span className="education__grade">{item.grade}</span>
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

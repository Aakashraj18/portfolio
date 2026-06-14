import './Education.css';

const educationData = [
  {
    institution: 'National Institute of Technology, Silchar',
    degree: 'Bachelor of Technology - Computer Science and Engineering',
    grade: 'CGPA: 8.11',
    period: 'July 2023 — June 2027',
    location: 'Assam, India',
    icon: '🎓',
    current: true,
  },
  {
    institution: 'Kendriya Vidyalaya Narangi, Guwahati',
    degree: 'Higher Secondary Certificate (HSC)',
    grade: 'Percentage: 86.8',
    period: 'July 2020 — June 2022',
    location: 'Assam, India',
    icon: '📖',
    current: false,
  },
  {
    institution: 'Kendriya Vidyalaya Narangi, Guwahati',
    degree: 'Secondary School Certificate (SSC)',
    grade: 'Percentage: 86',
    period: 'July 2010 — June 2020',
    location: 'Assam, India',
    icon: '📚',
    current: false,
  },
];

export default function Education() {
  return (
    <section className="education section" id="education">
      <h2 className="section__title">Education</h2>
      <p className="section__subtitle">
        My academic journey so far.
      </p>
      <div className="education__timeline">
        {educationData.map((edu, index) => (
          <div
            className={`education__item ${edu.current ? 'education__item--current' : ''}`}
            key={index}
          >
            <div className="education__marker">
              <div className="education__dot"></div>
              {index < educationData.length - 1 && <div className="education__line"></div>}
            </div>
            <div className="education__card card">
              <div className="education__card-header">
                <span className="education__icon">{edu.icon}</span>
                <div>
                  <h3 className="education__institution">{edu.institution}</h3>
                  <p className="education__degree">{edu.degree}</p>
                </div>
              </div>
              <div className="education__meta">
                <span className="education__grade">{edu.grade}</span>
                <span className="education__separator">•</span>
                <span className="education__period">{edu.period}</span>
                <span className="education__separator">•</span>
                <span className="education__location">{edu.location}</span>
              </div>
              {edu.current && (
                <span className="education__badge">Currently Pursuing</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

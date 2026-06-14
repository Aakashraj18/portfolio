import './Skills.css';

const skillCategories = [
  {
    title: 'Languages',
    icon: '💻',
    skills: ['C++', 'C', 'SQL', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    title: 'Development',
    icon: '🚀',
    skills: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Socket.IO'],
  },
  {
    title: 'Tools & Platforms',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'VSCode', 'Linux', 'Windows', 'Vite'],
  },
  {
    title: 'CS Fundamentals',
    icon: '📚',
    skills: ['Data Structures & Algorithms', 'DBMS', 'Operating Systems', 'Computer Networks'],
  },
];

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Technical Skills</h2>
      <p className="section__subtitle">
        Technologies and tools I work with to bring ideas to life.
      </p>
      <div className="skills__grid">
        {skillCategories.map((category) => (
          <div className="skills__card card" key={category.title}>
            <div className="skills__card-header">
              <span className="skills__card-icon">{category.icon}</span>
              <h3 className="skills__card-title">{category.title}</h3>
            </div>
            <div className="skills__tags">
              {category.skills.map((skill) => (
                <span className="tag" key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import { useScrollReveal } from '../hooks/useScrollReveal';
import './Projects.css';

const projects = [
  {
    title: 'AI-Resume-Analyzer',
    period: 'December - April, 2026',
    tech: ['React', 'Express', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    highlights: [
      'Integrated Gemini API to analyze resumes and generate ATS compatibility feedback in real time.',
      'Engineered scalable REST API capable of handling 500+ concurrent users and 26K+ requests/sec.',
      'Secured user data utilizing JWT authentication and robust password hashing.',
      'Optimized backend performance to achieve sub-20 ms average API latency.',
    ],
    github: 'https://github.com/Aakashraj18',
    live: '#',
    accent: 'var(--accent-primary)',
  },
  {
    title: 'Expense Tracker',
    period: 'January - May, 2026',
    tech: ['React', 'Express.js', 'Node.js', 'MongoDB', 'Socket.IO', 'Tailwind CSS'],
    highlights: [
      'Developed a secure backend using Node.js and MongoDB to keep separate user wallets isolated.',
      'Sustained 12K+ requests/sec and 100+ concurrent users during performance testing.',
      'Implemented user login security using JWT authentication and password hashing.',
      'Mitigated 120K+ excessive requests through rate limiting.',
    ],
    github: 'https://github.com/Aakashraj18',
    live: '#',
    accent: 'var(--accent-secondary)',
  },
  {
    title: 'Password Management System',
    period: 'April, 2025',
    tech: ['C++', 'OOP'],
    highlights: [
      'Implemented account creation, login, and password change functionality.',
      'Applied OOP principles including encapsulation, inheritance, and polymorphism.',
      'Enabled password validation, encrypted storage, and retrieval of credentials.',
      'Worked collaboratively to optimize structure and improve maintainability.',
    ],
    github: 'https://github.com/Aakashraj18',
    live: null,
    accent: 'var(--accent-tertiary)',
  },
];

export default function Projects() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="projects section" id="projects" ref={ref}>
      <div className={`projects__header ${isVisible ? 'reveal--visible' : 'reveal--hidden'}`}>
        <h2 className="section__title">Projects</h2>
        <p className="section__subtitle">
          Some of the things I've built to solve real problems.
        </p>
      </div>
      <div className="projects__grid">
        {projects.map((project, index) => (
          <div
            className={`projects__card card ${isVisible ? 'reveal--visible' : 'reveal--hidden'}`}
            key={project.title}
            style={{ '--card-accent': project.accent, '--reveal-delay': `${index * 0.15}s` }}
          >
            <div className="projects__card-top">
              <div className="projects__card-folder">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <div className="projects__card-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="projects__card-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live link" className="projects__card-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>

            <h3 className="projects__card-title">{project.title}</h3>
            <p className="projects__card-period">{project.period}</p>

            <ul className="projects__card-highlights">
              {project.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>

            <div className="projects__card-tech">
              {project.tech.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

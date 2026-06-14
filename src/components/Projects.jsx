import { useScrollReveal } from '../hooks/useScrollReveal';
import './Projects.css';

const projects = [
  {
    title: 'AI-Resume-Analyzer',
    description: 'A platform that uses Gemini API to analyze resumes and generate ATS compatibility feedback in real time.',
    tech: ['React', 'Express', 'Node.js', 'MongoDB', 'Tailwind'],
    github: 'https://github.com/Aakashraj18',
    live: 'https://github.com/Aakashraj18', // Assuming live link for now
  },
  {
    title: 'Expense Tracker',
    description: 'A real-time expense tracking application with isolated user wallets, rate limiting, and Socket.IO integrations.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.IO'],
    github: 'https://github.com/Aakashraj18',
    live: 'https://github.com/Aakashraj18',
  },
  {
    title: 'Password Management System',
    description: 'An OOP-based C++ console application for secure account creation, encrypted password storage, and retrieval.',
    tech: ['C++', 'OOP'],
    github: 'https://github.com/Aakashraj18',
    live: null,
  },
];

export default function Projects() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="projects section" id="projects" ref={ref}>
      <div className={`projects__header ${isVisible ? 'reveal--visible' : 'reveal--hidden'}`}>
        <h2 className="section__title">Open Source Projects</h2>
        <p className="section__subtitle">
          Some of the things I've built to solve real problems.
        </p>
      </div>
      <div className="projects__grid">
        {projects.map((project, index) => (
          <div
            className={`projects__card card ${isVisible ? 'reveal--visible' : 'reveal--hidden'}`}
            key={project.title}
            style={{ '--reveal-delay': `${index * 0.15}s` }}
          >
            <div className="projects__card-content">
              <div className="projects__card-title">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="projects__repo-icon">
                  <path d="M2 19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
                  <path d="M2 10h20"/>
                </svg>
                <h3>{project.title}</h3>
              </div>
              
              <p className="projects__card-description">{project.description}</p>
              
              <div className="projects__card-tech">
                {project.tech.map((t) => (
                  <span className="projects__tech-item" key={t}>
                    <span className="projects__tech-dot"></span>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="projects__card-footer">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn--outline projects__btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub Link
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn--primary projects__btn">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

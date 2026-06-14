import { useScrollReveal } from '../hooks/useScrollReveal';
import './Projects.css';

const projects = [
  {
    title: 'AI-Resume-Analyzer',
    description: 'A platform that uses Gemini API to analyze resumes and generate ATS compatibility feedback in real time.',
    tech: [
      { name: 'React', color: '#61dafb' },
      { name: 'Express', color: '#000000' },
      { name: 'Node.js', color: '#339933' },
      { name: 'MongoDB', color: '#47a248' }
    ],
    github: 'https://github.com/Aakashraj18',
    live: 'https://github.com/Aakashraj18',
    size: '1.2 MB'
  },
  {
    title: 'Expense Tracker',
    description: 'A real-time expense tracking application with isolated user wallets, rate limiting, and Socket.IO integrations.',
    tech: [
      { name: 'React', color: '#61dafb' },
      { name: 'Node.js', color: '#339933' },
      { name: 'MongoDB', color: '#47a248' },
      { name: 'Socket.IO', color: '#010101' }
    ],
    github: 'https://github.com/Aakashraj18',
    live: 'https://github.com/Aakashraj18',
    size: '850 KB'
  },
  {
    title: 'Password Management System',
    description: 'An OOP-based C++ console application for secure account creation, encrypted password storage, and retrieval.',
    tech: [
      { name: 'C++', color: '#f34b7d' }
    ],
    github: 'https://github.com/Aakashraj18',
    live: null,
    size: '240 KB'
  },
];

export default function Projects() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="projects section" id="projects" ref={ref}>
      <div className={`projects__header ${isVisible ? 'reveal--visible' : 'reveal--hidden'}`}>
        <h2 className="section__title">Open Source Projects</h2>
      </div>
      <div className="projects__grid">
        {projects.map((project, index) => (
          <div
            className={`projects__card card ${isVisible ? 'reveal--visible' : 'reveal--hidden'}`}
            key={project.title}
            style={{ '--reveal-delay': `${index * 0.1}s` }}
          >
            <div className="projects__card-top">
              <div className="projects__card-title">
                <svg className="projects__repo-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
                <h3>{project.title}</h3>
              </div>
              
              <p className="projects__card-desc">{project.description}</p>
            </div>

            <div className="projects__card-bottom">
              <div className="projects__card-stats">
                {project.tech.map((t) => (
                  <span className="projects__stat-item" key={t.name}>
                    <span className="projects__lang-color" style={{ backgroundColor: t.color }}></span>
                    {t.name}
                  </span>
                ))}
                <span className="projects__stat-item">
                  <svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path></svg>
                  {project.size}
                </span>
              </div>
              
              <div className="projects__card-actions">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="projects__link-btn">
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="projects__link-btn">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import { useScrollReveal } from '../hooks/useScrollReveal';
import atsImage from '../assets/ai-resume.png';
import expenseImage from '../assets/project-expense.png';
import './Projects.css';

const projects = [
  {
    title: 'AI Resume Analyzer',
    description: 'A platform that uses Gemini API to analyze resumes and generate ATS compatibility feedback in real time.',
    tech: [
      { name: 'React', color: '#61dafb' },
      { name: 'Express', color: '#000000' },
      { name: 'Node.js', color: '#339933' },
      { name: 'MongoDB', color: '#47a248' }
    ],
    github: 'https://github.com/Aakashraj18/ai-resume-analyzer',
    live: 'https://ai-resume-analyzer-82lg.onrender.com',
    image: atsImage,
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
    github: 'https://github.com/Aakashraj18/Expense-tracker',
    live: 'https://expense-tracker-six-sage-47.vercel.app/login',
    image: expenseImage,
  },
  {
    title: 'Password Management System',
    description: 'An OOP-based C++ console application for secure account creation, encrypted password storage, and retrieval.',
    tech: [
      { name: 'C++', color: '#f34b7d' }
    ],
    github: 'https://github.com/Aakashraj18/Password-Management-System',
    live: null,
    image: null,
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
      <div className="projects__list">
        {projects.map((project, index) => (
          <div
            className={`projects__horizontal-card card ${isVisible ? 'reveal--visible' : 'reveal--hidden'}`}
            key={project.title}
            style={{ '--reveal-delay': `${index * 0.15}s` }}
          >
            {project.image && (
              <div className="projects__image-container">
                <img src={project.image} alt={`${project.title} screenshot`} className="projects__image" />
              </div>
            )}

            <div className={`projects__content ${!project.image ? 'projects__content--full' : ''}`}>
              <div className="projects__content-header">
                <h3>{project.title}</h3>
                <div className="projects__tech-tags">
                  {project.tech.map((t) => (
                    <span className="projects__tech-tag" key={t.name}>
                      <span className="projects__lang-color" style={{ backgroundColor: t.color }}></span>
                      {t.name}
                    </span>
                  ))}
                </div>
              </div>

              <p className="projects__desc">{project.description}</p>

              <div className="projects__actions">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
                    <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
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

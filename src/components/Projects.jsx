import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import atsImage from '../assets/ai-resume.png';
import expenseImage from '../assets/project-expense.png';
import './Projects.css';

const projects = [
  {
    title: 'AI Resume Analyzer',
    description: 'A platform that uses Gemini API to analyze resumes and generate ATS compatibility feedback in real time.',
    tech: ['React', 'Express', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Aakashraj18/ai-resume-analyzer',
    live: 'https://ai-resume-analyzer-82lg.onrender.com',
    image: atsImage,
  },
  {
    title: 'Expense Tracker',
    description: 'A real-time expense tracking application with isolated user wallets, rate limiting, and Socket.IO integrations.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.IO'],
    github: 'https://github.com/Aakashraj18/Expense-tracker',
    live: 'https://expense-tracker-six-sage-47.vercel.app/login',
    image: expenseImage,
  },
  {
    title: 'Password Management System',
    description: 'An OOP-based C++ console application for secure account creation, encrypted password storage, and retrieval.',
    tech: ['C++'],
    github: 'https://github.com/Aakashraj18/Password-Management-System',
    live: null,
    image: null,
  },
];

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <motion.div 
        className="projects__header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section__title">Open Source Projects</h2>
        <p className="section__subtitle">
          Some of the things I've built to solve real problems.
        </p>
      </motion.div>

      <div className="projects__list">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <motion.div
              className={`projects__card ${isEven ? 'row-normal' : 'row-reverse'}`}
              key={project.title}
              initial={{ opacity: 0, x: isEven ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {project.image ? (
                <div className="projects__image-wrapper">
                  <div className="projects__image-glow"></div>
                  <div className="projects__image-container">
                    <img src={project.image} alt={`${project.title} screenshot`} className="projects__image" />
                  </div>
                </div>
              ) : (
                <div className="projects__image-wrapper empty"></div>
              )}

              <div className={`projects__content ${!project.image ? 'full-width' : ''}`}>
                <h3 className="projects__title">{project.title}</h3>
                
                <p className="projects__desc">{project.description}</p>
                
                <div className="projects__tech-pills">
                  {project.tech.map((t) => (
                    <span className="projects__pill" key={t}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="projects__actions">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-modern btn-outline">
                      <Github size={20} />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-modern btn-gradient">
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

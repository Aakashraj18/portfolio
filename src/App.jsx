import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CompetitiveProgramming from './components/CompetitiveProgramming';
import Achievements from './components/Achievements';
import Education from './components/Education';
import GithubStats from './components/GithubStats';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';
import { motion } from 'framer-motion';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <AnimatedBackground />
      <Header />
      <motion.main
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <About />
        <Skills />
        <Projects />
        <CompetitiveProgramming />
        <Achievements />
        <Education />
        <GithubStats />
        <Contact />
      </motion.main>
    </div>
  );
}

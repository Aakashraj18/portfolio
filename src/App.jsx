import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CompetitiveProgramming from './components/CompetitiveProgramming';
import Achievements from './components/Achievements';
import Education from './components/Education';
import GithubStats from './components/GithubStats';
import Contact from './components/Contact';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <CompetitiveProgramming />
        <Achievements />
        <Education />
        <GithubStats />
        <Contact />
      </main>
    </div>
  );
}

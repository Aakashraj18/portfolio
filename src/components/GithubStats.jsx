import { useScrollReveal } from '../hooks/useScrollReveal';
import './GithubStats.css';

export default function GithubStats() {
  const [ref, isVisible] = useScrollReveal();
  const githubUsername = 'Aakashraj18';

  return (
    <section className="github-stats section" id="github-stats" ref={ref}>
      <div className={`github-stats__header ${isVisible ? 'reveal--visible' : 'reveal--hidden'}`}>
        <h2 className="section__title">GitHub Stats</h2>
        <p className="section__subtitle">
          My open-source contributions and activity.
        </p>
      </div>

      <div className="github-stats__container">
        <div 
          className={`github-stats__chart card ${isVisible ? 'reveal--visible' : 'reveal--hidden'}`}
          style={{ '--reveal-delay': '0.1s' }}
        >
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=radical&hide_border=true&bg_color=161623&title_color=6c63ff&text_color=a0a0b8&icon_color=00d4aa`}
            alt={`${githubUsername}'s GitHub Stats`}
          />
        </div>
        
        <div 
          className={`github-stats__chart card ${isVisible ? 'reveal--visible' : 'reveal--hidden'}`}
          style={{ '--reveal-delay': '0.3s' }}
        >
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=radical&hide_border=true&bg_color=161623&title_color=6c63ff&text_color=a0a0b8`}
            alt={`${githubUsername}'s Top Languages`}
          />
        </div>

        <div 
          className={`github-stats__chart github-stats__chart--full card ${isVisible ? 'reveal--visible' : 'reveal--hidden'}`}
          style={{ '--reveal-delay': '0.5s' }}
        >
          <img
            src={`https://github-readme-activity-graph.vercel.app/graph?username=${githubUsername}&theme=radical&bg_color=161623&hide_border=true&color=6c63ff`}
            alt={`${githubUsername}'s GitHub Activity Graph`}
          />
        </div>
      </div>

    </section>
  );
}

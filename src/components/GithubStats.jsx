import './GithubStats.css';

const GITHUB_USERNAME = 'Aakashraj18';

export default function GithubStats() {
  return (
    <section className="github section" id="github-stats">
      <h2 className="section__title">GitHub Stats</h2>
      <p className="section__subtitle">
        A snapshot of my open source activity and contributions.
      </p>
      <div className="github__grid">
        <div className="github__card card">
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=midnight-purple&hide_border=true&bg_color=00000000&title_color=6c63ff&icon_color=00d4aa&text_color=a0a0b8&ring_color=6c63ff`}
            alt="GitHub Stats"
            className="github__img"
            loading="lazy"
          />
        </div>
        <div className="github__card card">
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=midnight-purple&hide_border=true&bg_color=00000000&title_color=6c63ff&text_color=a0a0b8`}
            alt="Top Languages"
            className="github__img"
            loading="lazy"
          />
        </div>
        <div className="github__card github__card--wide card">
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=midnight-purple&hide_border=true&background=00000000&ring=6c63ff&fire=00d4aa&currStreakLabel=6c63ff&sideLabels=a0a0b8&dates=6b6b82&currStreakNum=e8e8f0&sideNums=e8e8f0`}
            alt="GitHub Streak"
            className="github__img"
            loading="lazy"
          />
        </div>
      </div>
      <div className="github__profile-link">
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--outline"
          id="github-profile-btn"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          View Full Profile
        </a>
      </div>
    </section>
  );
}

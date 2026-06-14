import { useScrollReveal } from '../hooks/useScrollReveal';
import './CompetitiveProgramming.css';

const profiles = [
  {
    platform: 'LeetCode',
    username: 'Aakashraj_12',
    rank: '520+ Problems Solved',
    color: '#ffa116',
    description: 'Consistently solving data structures and algorithm problems to improve problem-solving skills.',
    stats: [
      { label: 'Total Solved', value: '520+' },
      { label: 'Focus', value: 'DSA & Algo' },
      { label: 'Language', value: 'C++' },
    ],
    link: 'https://leetcode.com/u/Aakashraj_12/',
  },
  {
    platform: 'Codeforces',
    username: 'Aakashraj18',
    rank: 'Pupil',
    color: '#08a652',
    description: 'Regular participant in Div. 2 and Div. 3 contests with strong problem-solving abilities under time pressure.',
    stats: [
      { label: 'Total Solved', value: '350+' },
      { label: 'Max Rating', value: '1278 (Pupil)' },
      { label: 'Contests', value: 'Active' },
    ],
    link: 'https://codeforces.com/profile/Aakashraj18',
  },
  {
    platform: 'CodeChef',
    username: 'Aakashraj18',
    rank: '2 Star',
    color: '#5b4438ff',
    description: 'Participating in rated contests and improving logic building skills.',
    stats: [
      { label: 'Max Rating', value: '2 Star' },
      { label: 'Contests', value: 'Active' },
    ],
    link: 'https://www.codechef.com/',
  }
];

export default function CompetitiveProgramming() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="cp section" id="competitive-programming" ref={ref}>
      <div className={`cp__header ${isVisible ? 'reveal--visible' : 'reveal--hidden'}`}>
        <h2 className="section__title">Competitive Programming</h2>
        <p className="section__subtitle">
          My coding profiles across various platforms.
        </p>
      </div>
      <div className="cp__list">
        {profiles.map((profile, index) => (
          <a
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`cp__profile-card card ${isVisible ? 'reveal--visible' : 'reveal--hidden'}`}
            key={profile.platform}
            style={{ '--cp-accent': profile.color, '--reveal-delay': `${index * 0.15}s` }}
          >
            <div className="cp__profile-info">
              <h3 className="cp__profile-platform">{profile.platform}</h3>
              <p className="cp__profile-desc">{profile.description}</p>
              <span className="cp__profile-rank" style={{ color: profile.color }}>
                {profile.rank}
              </span>
            </div>

            <div className="cp__profile-stats">
              {profile.stats.map((stat) => (
                <div className="cp__stat" key={stat.label}>
                  <span className="cp__stat-value">{stat.value}</span>
                  <span className="cp__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

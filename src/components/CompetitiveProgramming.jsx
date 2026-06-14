import { useScrollReveal } from '../hooks/useScrollReveal';
import './CompetitiveProgramming.css';

const profiles = [
  {
    platform: 'Codeforces',
    rank: 'Pupil',
    color: '#08a652',
    stats: [
      { label: 'Best Contest Rank', value: '3028 / 29,000+' },
      { label: 'Best Contest', value: 'Round 1031 (Div. 2)' },
    ],
    link: 'https://codeforces.com/',
  },
  {
    platform: 'CodeChef',
    rank: '2 Star',
    color: '#ffcc00',
    stats: [
      { label: 'Rating', value: '2 Star' },
      { label: 'Focus', value: 'Rated Contests' },
    ],
    link: 'https://www.codechef.com/',
  },
  {
    platform: 'LeetCode',
    rank: '1000+ Problems',
    color: '#ffa116',
    stats: [
      { label: 'Problems Solved', value: '1000+' },
      { label: 'Focus', value: 'DSA & Algorithms' },
    ],
    link: 'https://leetcode.com/',
  },
];

export default function CompetitiveProgramming() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="cp section" id="competitive-programming" ref={ref}>
      <div className={`cp__header ${isVisible ? 'reveal--visible' : 'reveal--hidden'}`}>
        <h2 className="section__title">Competitive Programming</h2>
        <p className="section__subtitle">
          Consistent participation in rated contests and problem-solving across platforms.
        </p>
      </div>
      <div className="cp__grid">
        {profiles.map((profile, index) => (
          <a
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`cp__card card ${isVisible ? 'reveal--visible' : 'reveal--hidden'}`}
            key={profile.platform}
            style={{ '--cp-accent': profile.color, '--reveal-delay': `${index * 0.15}s` }}
          >
            <h3 className="cp__card-platform">{profile.platform}</h3>
            <span className="cp__card-rank">{profile.rank}</span>
            <div className="cp__card-stats">
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

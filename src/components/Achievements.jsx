import { useScrollReveal } from '../hooks/useScrollReveal';
import './Achievements.css';

const achievements = [
  {
    icon: '🏆',
    title: 'Codeforces Round 1031 (Div. 2)',
    description: 'Secured a global rank of 3028 out of 29,000+ participants.',
    date: 'June 2025',
    accent: 'var(--accent-primary)',
  },
  {
    icon: '⭐',
    title: 'Pupil on Codeforces',
    description: 'Achieved Pupil rank through consistent participation in rated contests and problem-solving.',
    date: 'Ongoing',
    accent: 'var(--accent-secondary)',
  },
  {
    icon: '🌟',
    title: '2 Star on CodeChef',
    description: 'Earned 2 Star rating on CodeChef through regular competitive programming practice.',
    date: 'Ongoing',
    accent: 'var(--accent-warm)',
  },
  {
    icon: '🧠',
    title: '1000+ DSA Problems Solved',
    description: 'Solved across LeetCode, GeeksforGeeks, CodeChef, and Codeforces — strengthening algorithmic thinking.',
    date: 'Cumulative',
    accent: 'var(--accent-tertiary)',
  },
];

export default function Achievements() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="achievements section" id="achievements" ref={ref}>
      <div className={`achievements__header ${isVisible ? 'reveal--visible' : 'reveal--hidden'}`}>
        <h2 className="section__title">Achievements</h2>
        <p className="section__subtitle">
          Milestones and accomplishments in competitive programming.
        </p>
      </div>
      <div className="achievements__grid">
        {achievements.map((achievement, index) => (
          <div
            className={`achievements__card card ${isVisible ? 'reveal--visible' : 'reveal--hidden'}`}
            key={achievement.title}
            style={{ '--ach-accent': achievement.accent, '--reveal-delay': `${index * 0.12}s` }}
          >
            <div className="achievements__icon">{achievement.icon}</div>
            <div className="achievements__info">
              <h3 className="achievements__title">{achievement.title}</h3>
              <p className="achievements__desc">{achievement.description}</p>
              <span className="achievements__date">{achievement.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

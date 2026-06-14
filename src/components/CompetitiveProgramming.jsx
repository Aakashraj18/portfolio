import React from 'react';
import { motion } from 'framer-motion';
import './CompetitiveProgramming.css';

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

const profiles = [
  {
    platform: 'LeetCode',
    username: 'Aakashraj_12',
    color: '#FFA116',
    stats: [
      { label: 'RATING', value: '1644' },
      { label: 'TOTAL SOLVED', value: '520+' },
      { label: 'FOCUS', value: 'DSA & Algo' },
      { label: 'LANGUAGE', value: 'C++' },
    ],
    link: 'https://leetcode.com/u/Aakashraj_12/',
  },
  {
    platform: 'Codeforces',
    username: 'Aakashraj18',
    color: '#318CE7',
    stats: [
      { label: 'RANK', value: 'Pupil' },
      { label: 'MAX RATING', value: '1278' },
      { label: 'TOTAL SOLVED', value: '350+' },
      { label: 'STATUS', value: 'Active Contests' },
    ],
    link: 'https://codeforces.com/profile/Aakashraj18',
  },
  {
    platform: 'CodeChef',
    username: 'Aakashraj18',
    color: '#5B4638',
    stats: [
      { label: 'RATING', value: '2 Star' },
      { label: 'STATUS', value: 'Active Contests' },
    ],
    link: 'https://www.codechef.com/',
  }
];

export default function CompetitiveProgramming() {
  return (
    <section className="cp section" id="competitive-programming">
      <motion.div
        className="cp__header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section__title">Competitive Programming</h2>
        <p className="section__subtitle">
          My coding profiles across various platforms.
        </p>
      </motion.div>

      <div className="cp__grid">
        {profiles.map((profile, index) => (
          <motion.div
            key={profile.platform}
            className="cp__glass-card"
            style={{ '--theme-color': profile.color }}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <div className="cp__card-header">
              <h3 className="cp__platform-title">{profile.platform}</h3>
              <a
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cp__icon-link"
                style={{ color: profile.color }}
              >
                <ExternalIcon />
              </a>
            </div>

            <div className="cp__stats-grid">
              {profile.stats.map((stat, i) => (
                <div className="cp__stat-item" key={i}>
                  <span className="cp__stat-value" style={{ color: profile.color }}>
                    {stat.value}
                  </span>
                  <span className="cp__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

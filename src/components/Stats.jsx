import React from 'react';

const Stats = () => {
  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '100+', label: 'Happy Clients' },
    { number: '25+', label: 'Students Mentored' },
    { number: '5+', label: 'Years Experience' }
  ];

  return (
    <section className="stats">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats; 
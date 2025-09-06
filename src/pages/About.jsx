import React from 'react';
import { useAbout } from '../hooks/useApi';

const About = () => {
  const { data, loading, error } = useAbout();
  

  // Use API data only
  const aboutData = data?.about || {};
  const valuesList = data?.about?.values || [];
  const teamList = data?.about?.team || [];
  const visionText = data?.about?.vision || '';

  // Debug: Log the data being used (only in development)
  if (process.env.NODE_ENV === 'development') {
    console.log('About API Data:', data);
    console.log('Using team from:', data?.about?.team ? 'database' : 'fallback');
    console.log('Team list:', teamList);
  }

  // Helper: make initials for avatar placeholders
  const getInitials = (name = '') => name.trim().split(/\s+/).map(w => w[0]?.toUpperCase() || '').slice(0,2).join('');

  // Styles for Team section enhancement
  const teamGridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20 };
  const teamCardStyle = { background: '#0f172a', border: '1px solid #334155', borderRadius: 12, padding: 16, display: 'grid', gap: 12, alignContent: 'start' };
  const memberTopStyle = { display: 'flex', alignItems: 'center', gap: 12 };
  const avatarWrapperStyle = { width: 72, height: 72, borderRadius: '50%', overflow: 'hidden', border: '1px solid #334155', background: '#0b1220', flexShrink: 0 };
  const avatarImgStyle = { width: '100%', height: '100%', objectFit: 'cover' };
  const initialsStyle = { width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0b1220', color: '#93c5fd', fontWeight: 700, fontSize: '1.1rem' };
  const nameRoleStyle = { display: 'grid', gap: 4 };
  const nameStyle = { margin: 0 };
  const roleBadgeStyle = { margin: 0, fontSize: 12, color: '#93c5fd' };
  const bioStyle = { margin: 0, color: '#cbd5e1', minHeight: 40 };
  const socialRowStyle = { display: 'flex', gap: 10 };
  const socialBtnStyle = { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: 8, border: '1px solid #334155', color: '#e5e7eb' };

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>About {aboutData.companyName}</h1>
          <p className="hero-subtitle">{aboutData.tagline}</p>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>{aboutData.mainDescription}</p>
              <p>{aboutData.mission}</p>
            </div>
            <div className="mission-visual">
              <div className="mission-stats">
                <div className="stat">
                  <span className="stat-number">{aboutData.stats.yearsExperience}+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">{aboutData.stats.projectsCompleted}+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat">
                  <span className="stat-number">{aboutData.stats.clientsServed}+</span>
                  <span className="stat-label">Happy Clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision section */}
      <section className="vision-section">
        <div className="container">
          <h2>Our Vision</h2>
          <p>{visionText || 'To be the leading technology partner for innovative businesses worldwide, recognized for our technical excellence, creative solutions, and unwavering commitment to client success.'}</p>
        </div>
      </section>

      {loading && (
        <div className="loading-state">
          <p>Loading company information...</p>
        </div>
      )}
      
      {error && (
        <div className="error-state">
          <p>❌ Failed to load about information. Please try again later.</p>
        </div>
      )}

      <section className="values-section">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            {valuesList.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <i className={value.icon || 'fas fa-star'}></i>
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2>Our Team</h2>
          <div className="team-grid" style={teamGridStyle}>
            {teamList.map((member, index) => (
              <div key={index} className="team-member-card" style={teamCardStyle}>
                <div style={memberTopStyle}>
                  <div style={avatarWrapperStyle}>
                    {member.image ? (
                      <img src={member.image} alt={`${member.name} photo`} style={avatarImgStyle} />
                    ) : (
                      <div style={initialsStyle}>{getInitials(member.name)}</div>
                    )}
                  </div>
                  <div style={nameRoleStyle}>
                    <h3 style={nameStyle}>{member.name}</h3>
                    <p className="member-role" style={roleBadgeStyle}>{member.role}</p>
                  </div>
                </div>
                <p className="member-bio" style={bioStyle}>{member.bio}</p>
                <div className="member-social" style={socialRowStyle}>
                  {member.socialLinks?.linkedin && (
                    <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={socialBtnStyle}>
                      <i className="fab fa-linkedin"></i>
                    </a>
                  )}
                  {member.socialLinks?.github && (
                    <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={socialBtnStyle}>
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                  {member.socialLinks?.email && (
                    <a href={`mailto:${member.socialLinks.email}`} aria-label="Email" style={socialBtnStyle}>
                      <i className="fas fa-envelope"></i>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Work Together?</h2>
          <p>Whether you're running a business, developing a new product, or working on your final-year project, we're here to support your journey.</p>
          <div className="cta-buttons">
            <a href="/Contact" className="btn btn-primary">Get In Touch</a>
            <a href="/Services" className="btn btn-secondary">Our Services</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
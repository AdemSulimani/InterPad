import './style/Stats.css';

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stat-item">
          <div className="stat-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#44b492" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="#44b492" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="#44b492" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="stat-text">
            <span className="stat-number highlighted">290</span> <span className="stat-label highlighted">Plugins</span>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 5H21M7 3V7M17 3V7M5 8H19M6 12H8M10 12H12M14 12H16M6 16H8M10 16H12M14 16H16M5 20H19C19.5304 20 20.0391 19.7893 20.4142 19.4142C20.7893 19.0391 21 18.5304 21 18V8C21 7.46957 20.7893 6.96086 20.4142 6.58579C20.0391 6.21071 19.5304 6 19 6H5C4.46957 6 3.96086 6.21071 3.58579 6.58579C3.21071 6.96086 3 7.46957 3 8V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20Z" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="stat-text">
            <span className="stat-number">105</span> <span className="stat-label">Languages</span>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="3" width="20" height="4" rx="1" stroke="#333" strokeWidth="2"/>
              <rect x="2" y="8" width="20" height="4" rx="1" stroke="#333" strokeWidth="2"/>
              <rect x="2" y="13" width="20" height="4" rx="1" stroke="#333" strokeWidth="2"/>
              <rect x="2" y="18" width="20" height="4" rx="1" stroke="#333" strokeWidth="2"/>
            </svg>
          </div>
          <div className="stat-text">
            <span className="stat-number">Thousands</span> <span className="stat-label">of Instances</span>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="stat-text">
            <span className="stat-number">Millions</span> <span className="stat-label">of users</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;


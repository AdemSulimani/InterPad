import './style/About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-heading">
            <span className="heading-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 14H9C8.46957 14 7.96086 14.2107 7.58579 14.5858C7.21071 14.9609 7 15.4696 7 16V20H11V14Z" stroke="#44b492" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13 14H15C15.5304 14 16.0391 14.2107 16.4142 14.5858C16.7893 14.9609 17 15.4696 17 16V20H13V14Z" stroke="#44b492" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 12C10.6569 12 12 10.6569 12 9C12 7.34315 10.6569 6 9 6C7.34315 6 6 7.34315 6 9C6 10.6569 7.34315 12 9 12Z" stroke="#44b492" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 12C16.6569 12 18 10.6569 18 9C18 7.34315 16.6569 6 15 6C13.3431 6 12 7.34315 12 9C12 10.6569 13.3431 12 15 12Z" stroke="#44b492" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.5 14.5L14.5 14.5" stroke="#44b492" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            Collaborating in really real-time
          </h2>
          
          <p className="about-subheading">
            No more sending your stuff back and forth via email, just set up a pad, share the link and start collaborating!
          </p>
          
          <div className="about-paragraphs">
            <p className="about-paragraph">
              Interpad allows you to collaboratively edit documents in real-time in your browser. Write articles, press releases, to-do lists and more with your friends, students, or colleagues, all working on the same document at the same time.
            </p>
            
            <p className="about-paragraph">
              Instances provide API access, support import/export for various data formats, and offer numerous plugins for customization.
            </p>
            
            <p className="about-paragraph">
              You don't need to set up a server. Just <span className="highlighted-text">pick</span> one of the publicly available instances or follow an <span className="highlighted-text">installation guide</span> to set up your own.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


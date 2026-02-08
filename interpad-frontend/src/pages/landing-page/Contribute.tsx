import './style/Contribute.css';

const Contribute = () => {
  return (
    <section className="contribute-section">
      <div className="contribute-container">
        <div className="contribute-content">
          <h2 className="contribute-heading">
            <span className="heading-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.7 6.3C14.5 6.1 14.3 6 14 6C13.7 6 13.5 6.1 13.3 6.3L12 7.6L10.7 6.3C10.5 6.1 10.3 6 10 6C9.7 6 9.5 6.1 9.3 6.3C9.1 6.5 9 6.7 9 7C9 7.3 9.1 7.5 9.3 7.7L10.6 9L9.3 10.3C9.1 10.5 9 10.7 9 11C9 11.3 9.1 11.5 9.3 11.7C9.5 11.9 9.7 12 10 12C10.3 12 10.5 11.9 10.7 11.7L12 10.4L13.3 11.7C13.5 11.9 13.7 12 14 12C14.3 12 14.5 11.9 14.7 11.7C14.9 11.5 15 11.3 15 11C15 10.7 14.9 10.5 14.7 10.3L13.4 9L14.7 7.7C14.9 7.5 15 7.3 15 7C15 6.7 14.9 6.5 14.7 6.3Z" fill="#44b492"/>
                <path d="M19.43 12.97C19.47 12.65 19.5 12.33 19.5 12C19.5 11.67 19.47 11.35 19.43 11.03L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.96 19.05 5.05L16.56 6.05C16.04 5.65 15.5 5.32 14.87 5.07L14.5 2.42C14.46 2.18 14.25 2 14 2H10C9.75 2 9.54 2.18 9.5 2.42L9.13 5.07C8.5 5.32 7.96 5.66 7.44 6.05L4.95 5.05C4.73 4.96 4.46 5.05 4.34 5.27L2.34 8.73C2.21 8.95 2.27 9.22 2.46 9.37L4.57 11.03C4.53 11.35 4.5 11.67 4.5 12C4.5 12.33 4.53 12.65 4.57 12.97L2.46 14.63C2.27 14.78 2.21 15.05 2.34 15.27L4.34 18.73C4.46 18.95 4.73 19.03 4.95 18.95L7.44 17.94C7.96 18.35 8.5 18.68 9.13 18.93L9.5 21.58C9.54 21.82 9.75 22 10 22H14C14.25 22 14.46 21.82 14.5 21.58L14.87 18.93C15.5 18.68 16.04 18.34 16.56 17.94L19.05 18.95C19.27 19.03 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.97ZM12 15.5C10.07 15.5 8.5 13.93 8.5 12C8.5 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" fill="#44b492"/>
              </svg>
            </span>
            Contribute
          </h2>
          
          <div className="contribute-paragraphs">
            <p className="contribute-paragraph">
              Interpad is an open-source project. Many people have contributed to it, from the website to the core application. You don't need to be familiar with real-time applications or Node.js programming to contribute. There are plenty of ways to be helpful!
            </p>
            
            <p className="contribute-paragraph">
              Use Interpad, read about it, evangelize it, engage with the community, translate the user interface, or learn to write plugins. Be creative!
            </p>
            
            <p className="contribute-paragraph">
              If you'd like to help, <span className="highlighted-link">get in touch!</span> The <span className="highlighted-link">wiki</span> is always a valuable resource.
            </p>
          </div>
          
          <div className="workflow-section">
            <h3 className="workflow-heading">Development workflow</h3>
            
            <div className="workflow-paragraphs">
              <p className="workflow-paragraph">
                Development happens on <span className="highlighted-link">GitHub</span>. To contribute, <span className="highlighted-link">fork the main repo</span>. Then, branch off a feature branch from <code className="code-highlight">develop</code>. Make your changes and <span className="highlighted-link">commit</span> them. Push to your fork and submit a <span className="highlighted-link">pull request</span> for <code className="code-highlight">ether/develop</code>.
              </p>
              
              <p className="workflow-paragraph">
                Once in a while we merge <code className="code-highlight">develop</code> into <code className="code-highlight">master</code>. This results in a new release. The latest stable version will always be found in the <code className="code-highlight">master</code> branch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contribute;


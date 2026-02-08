import './style/Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <h2 className="contact-heading">
            <span className="heading-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="#44b492" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 7L12 13L21 7" stroke="#44b492" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            Get in touch
          </h2>
          
          <div className="contact-buttons">
            <a href="#" className="contact-button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.317 4.37C19.791 4.13 19.11 4 18.5 4C15.5 4 13 7 13 10C13 11.5 13.5 12.5 14.5 13.5C15.5 14.5 16.5 15 18 15C21 15 24 12.5 24 9.5C24 6.5 21 4 18 4C17.39 4 16.71 4.13 16.18 4.37C15.67 4.6 15.25 4.9 14.9 5.25C14.55 5.6 14.25 6.02 14.02 6.53C13.78 7.04 13.65 7.72 13.65 8.33C13.65 11.33 16.65 13.83 19.65 13.83C20.26 13.83 20.94 13.7 21.45 13.46C21.96 13.22 22.38 12.92 22.73 12.57C23.08 12.22 23.38 11.8 23.62 11.29C23.86 10.78 24 10.1 24 9.49C24 6.49 21 4 18 4Z" fill="white"/>
                <path d="M5.69 5.69C6.22 5.45 6.9 5.32 7.5 5.32C10.5 5.32 13 8.32 13 11.32C13 12.82 12.5 13.82 11.5 14.82C10.5 15.82 9.5 16.32 8 16.32C5 16.32 2 13.82 2 10.82C2 7.82 5 5.32 8 5.32C8.61 5.32 9.29 5.45 9.8 5.69C10.31 5.93 10.73 6.23 11.08 6.58C11.43 6.93 11.73 7.35 11.97 7.86C12.21 8.37 12.34 9.05 12.34 9.66C12.34 12.66 9.34 15.16 6.34 15.16C5.73 15.16 5.05 15.03 4.54 14.79C4.03 14.55 3.61 14.25 3.26 13.9C2.91 13.55 2.61 13.13 2.37 12.62C2.13 12.11 2 11.43 2 10.82C2 7.82 5 5.32 8 5.32Z" fill="white"/>
              </svg>
              Discord
            </a>
            <a href="#" className="contact-button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90117 15.7395 2.95718 14.8821 3.28446C14.0247 3.61174 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.931 7.39545C5.36073 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3Z" fill="white"/>
              </svg>
              @InterpadOrg
            </a>
            <a href="#" className="contact-button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="L22 6L12 13L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              contact@interpad.org
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


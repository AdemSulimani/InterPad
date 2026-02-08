import './style/Thanks.css';

const Thanks = () => {
  return (
    <section className="thanks-section">
      <div className="thanks-container">
        <div className="thanks-content">
          <h2 className="thanks-heading">
            <span className="heading-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7564 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.0621 22.0329 6.39464C21.7564 5.72718 21.351 5.12075 20.84 4.61Z" fill="#44b492"/>
              </svg>
            </span>
            Thanks
          </h2>
          
          <div className="thanks-paragraphs">
            <p className="thanks-paragraph">
              Many individuals, companies and organizations have contributed to Interpad. We'd like to thank them all!
            </p>
            
            <p className="thanks-paragraph">
              Additionally, our thanks go out to the tens of thousands of developers and organizations who have created all the modules we depend on or contributed in some way to our ability to provide Interpad as open source.
            </p>
            
            <p className="thanks-paragraph">
              We'd also like to thank you. You, who've been making Interpad what it is, if you've been developing awesome features or plugins, whether you're running an instance or you're just one of our diligent users.
            </p>
          </div>
          
          <p className="thanks-closing">Thank you!</p>
        </div>
      </div>
    </section>
  );
};

export default Thanks;


import './style/Home.css';

const Home = () => {
  return (
    <section className="home-section">
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading">
            <strong className="brand-name">Interpad</strong> is a highly customizable{' '}
            <strong>open source</strong> online editor providing{' '}
            <strong>collaborative editing</strong> in really{' '}
            <strong>real-time</strong>.
          </h1>
          <div className="home-editor-preview">
            <img 
              src="/foto1.png" 
              alt="Interpad Editor Preview" 
              className="editor-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;


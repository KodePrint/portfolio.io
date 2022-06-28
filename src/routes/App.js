import Navbar from '../containers/Navbar/Navbar';
import '../App.css';
import './test.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id='home' className="home-container container">
        
        <div className="info">
          <h3>Buiding a solutions with tecnology..!</h3>
          <h1>
            Kevin Palma
          </h1>
          <h4>
            web developer, software engineer, and a full stack developer.
          </h4>
        </div>
        
        {/* <button className='slider-btn left'>L</button>
        <button className='slider-btn rigth'>R</button> */}
        <div className="slider-container">
          
          <div className="proyects">

            <div className="card">
              <h3>Proyecto</h3>
            </div>
            <div className="card">
              <h3>Proyecto</h3>
            </div>
            <div className="card">
              <h3>Proyecto</h3>
            </div>
            <div className="card">
              <h3>Proyecto</h3>
            </div>
            <div className="card">
              <h3>Proyecto</h3>
            </div>

          </div>

        </div>

      </section>
      <section id='about' className="about-container container">
        <h1>About</h1>
      </section>
      <section id='portfolio' className="porfolio-container container">
        <h1>Portfolio</h1>
      </section>
      <section id='contact' className="concat-container container">
        <h1>Contact</h1>
      </section>
    </div>
  );
}

export default App;

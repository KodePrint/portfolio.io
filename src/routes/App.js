import Navbar from '../containers/Navbar/Navbar';
import '../App.css';
import './test.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="home-container container">
        <h1>Buiding a solutions for the future..!</h1>
      </div>
      <div className="about-container container">
        <h1>About</h1>
      </div>
      <div className="porfolio-container container">
        <h1>Portfolio</h1>
      </div>
      <div className="concat-container container">
        <h1>Contact</h1>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
// Import Components
import MobileNav from '../containers/Navbar/MobileNav';
import Layout from '../containers/Layout/Layout';
import Home from '../containers/Home/Home';
import About from '../containers/About/About';
import Portfolio from '../containers/Portfolio/Portfolio';
import Contact from '../containers/Contact/Contact';
import Footer from '../containers/Footer/Footer';
// Import Custom Hooks
import { useObserver } from '../hooks/useObserver';
import { useTheme } from '../hooks/useTheme';
// Import Providers
// Import Styles
import '../App.css';
import './test.scss';

function App() {

  const { theme } = useTheme()

  const { isVisible, fromRef } = useObserver({distance: '-50%'})

  return (
    <div className={`${theme} App`}>
      <MobileNav />
      <Layout >
        <Home />
        <About />
        <Portfolio />
      </Layout>
      <Footer />
    </div>
  );
}

export default App;

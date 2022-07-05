import React, {useEffect} from 'react';
// Import Custom Hooks
import { useObserver } from '../../hooks/useObserver';
import { useSection } from '../../hooks/useSection';
// Import Styles
import './Portfolio.scss'

const Portfolio = () => {
  const {setSection} = useSection();
  const {isVisible, fromRef} = useObserver({distance: '-50%'});
  
  useEffect(() => {
    if (isVisible) {
      setSection('portfolio');
    }
  }, [isVisible, setSection]);

  return (
    <section id='portfolio' ref={fromRef} className="Portfolio">
      <h3 className='titleSection'>Portfolio</h3>
    </section>
  );
}

export default React.memo(Portfolio);
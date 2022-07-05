import React, {useEffect} from 'react';
// Import Custom Hooks
import { useObserver } from '../../hooks/useObserver';
import { useSection } from '../../hooks/useSection';
// Import Styles
import './About.scss';

const About = () => {
  const { setSection } = useSection();
  const {isVisible, fromRef} = useObserver({distance: '-50%'});

  useEffect(() => {
    if (isVisible) {
      setSection('about');
    }
  }, [isVisible, setSection]);

  return (
    <section id='about' ref={fromRef} className="About">
      <h3 className='titleSection'>About Me</h3>
    </section>
  );
}

export default React.memo(About);
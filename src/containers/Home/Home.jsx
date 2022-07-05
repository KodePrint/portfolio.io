import React, {useEffect} from 'react';
// Import Custom Hooks
import { useObserver } from '../../hooks/useObserver';
import { useSection } from '../../hooks/useSection';
// Import Icons
import {
  RiLinkedinFill,
  RiYoutubeFill,
} from 'react-icons/ri';
import {FaGithubAlt} from 'react-icons/fa';
// Import Styles
import './Home.scss'

const Home = () => {
  const { setSection } = useSection();
  const {isVisible, fromRef} = useObserver({distance: '-50%'});

  useEffect(() => {
    if (isVisible) {
      setSection('home');
    }
  }, [isVisible, setSection]);
  
  return (  
    <section ref={fromRef} id="home" className="Home">
      <div className="info">
          <h1 className='text-deg'>
            Kevin Palma
          </h1>
          <h3>Building a solutions with tecnology..!</h3>
          <h4 className='Home__description'>
            <div className="key">
              <span></span>
            </div>
            web developer, software engineer, and a full stack developer.
          </h4>
          <div className="Home__social">
            <a 
              className='linkedin'
              target="_blank"
              rel="noreferrer"
              href='https://www.linkedin.com/in/kpalmaralda/'
            >
              <RiLinkedinFill />
            </a>
            <a 
              className='github'
              target="_blank"
              rel="noreferrer"
              href='https://github.com/KodePrint'
            >
              <FaGithubAlt />
            </a>
            <a
              className='youtube' 
              target="_blank"
              rel="noreferrer"
              href='https://www.youtube.com/channel/UChLJHiLwbRrdCEsZhU6bMvA'
            >
              <RiYoutubeFill />
            </a>
          </div>
        </div>
        <picture className='img-contianer'>
          <img src="" alt="Kevin Palma" />
        </picture>
    </section>
  );
}

export default React.memo(Home);
// Import Icons
import {
  RiLinkedinFill,
  RiYoutubeFill,
} from 'react-icons/ri';
import {FaGithubAlt, FaReact} from 'react-icons/fa';
// Import Styles
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer__container">
        <div className="Footer__social">
          <a 
            className='social_link linkedin'
            rel="noreferrer"
            target="_blank"
            href='https://www.linkedin.com/in/kpalmaralda/'
          >
            <RiLinkedinFill />
            <span className="social_link__title">Linkedin</span>
          </a>
          <a 
            className='social_link github'
            target="_blank"
            rel="noreferrer"
            href='https://github.com/KodePrint' 
          >
            <FaGithubAlt />
            <span className="social_link__title">Github</span>
          </a>
          <a
            className='social_link youtube' 
            target="_blank"
            rel="noreferrer"
            href='https://www.youtube.com/channel/UChLJHiLwbRrdCEsZhU6bMvA' 
          >
            <RiYoutubeFill />
            <span className="social_link__title">Yotube</span>
          </a>
          <a
            className='social_link youtube' 
            target="_blank"
            rel="noreferrer"
            href='https://www.youtube.com/channel/UChLJHiLwbRrdCEsZhU6bMvA' 
          >
            <RiYoutubeFill />
            <span className="social_link__title">Yotube</span>
          </a>
        </div>
      </div>
      <div className='Footer__copy'>
        <p>Kevin Palma © 2022</p>
        <p>Created with <b> ❤ </b> React <FaReact /></p>
      </div>
    </footer>
  );
}

export default Footer;
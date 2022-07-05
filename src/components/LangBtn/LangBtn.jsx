import { useState, useRef } from 'react';
// Import Images
import Spain from '../../assets/logos/spain.png';
import Uk from '../../assets/logos/uk.png';
// Import Styles
import Styles from './lanBtn.module.scss';
import './LangBtn.scss';

const LangBtn = () => {
  const [lang, setLang] = useState('es');
  const [viewOptions, setViewOptions] = useState(false);

  const handleSetLanguajeSpanish = () => {
    setLang('es');
    setViewOptions(false);
  }
  const handleSetLanguajeEnglish = () => {
    setLang('eng');
    setViewOptions(false);
  }
  

  const handleViewOptions = () => {
    setViewOptions(!viewOptions);
  }

  return (
    <button 
      className='LangBtn'
      onClick={handleViewOptions}
    >
      <img 
        className='LangBtn__img'
        src={`${lang === 'es' ? (Spain) : (Uk)}`} 
        alt={`${lang === 'es' ? (Spain) : (Uk)}`} 
      />
      <div 
        className={
          `LangBtn__options 
            ${viewOptions && 'show'}
          `
        }
      >
        <ul className='LangBtn__list'>
          <li className='LangBtn__element'>
            <button
              onClick={handleSetLanguajeSpanish} 
              className='LangBtn_option'
            >
              <span>Esp</span>
              <img
                alt={Spain}
                src={Spain} 
              />
            </button>
          </li>
          <li className='LangBtn__element'>
            <button 
              onClick={handleSetLanguajeEnglish}
              className='LangBtn_option'
            >
              <span>Eng</span>
              <img
                src={Uk}
                alt={Uk}
              />
            </button>
          </li>
        </ul>
      </div>
    </button>
  );
}

export default LangBtn;
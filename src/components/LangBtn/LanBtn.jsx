import { useState, useEffect } from 'react';
// Import Images
import Spain from '../../assets/logos/spain.png';
import Uk from '../../assets/logos/uk.png';
// Import Styles
import Styles from './lanBtn.module.scss';

const LanBtn = () => {

  const [lang, setLang] = useState('es');

  const handleChangeLanguage = () => {
    setLang(lang === 'es' ? 'uk' : 'es');
  }

  return (
    <button 
      className={Styles.base}
      onClick={handleChangeLanguage}
    >
      <img 
        src={`${lang === 'es' ? (Spain) : (Uk)}`} 
        alt={`${lang === 'es' ? (Spain) : (Uk)}`} 
      />
    </button>
  );
}

export default LanBtn;
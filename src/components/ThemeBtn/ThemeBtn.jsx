import { useState } from 'react';
// Import Components
// Import Custom Hooks
import { useTheme } from '../../hooks/useTheme';
// Import Icons
import { BsSunFill, BsMoonFill  } from 'react-icons/bs';
// Import Styles
import style from './themeBtn.module.scss'

const {base, light} = style;

const ThemeBtn = () => {

  const {theme, setTheme} = useTheme();

  const handleChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  
  return (
    <button
      onClick={handleChangeTheme}
      className={
        `${theme === 'light' 
        ? (base + ' ' +  light) 
        : (base)}`
      }
    >
      <BsSunFill />
      <BsMoonFill />
    </button>
  );
}

export default ThemeBtn;
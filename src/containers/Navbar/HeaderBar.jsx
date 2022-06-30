// Import Components
import ThemeBtn from "../../components/ThemeBtn/ThemeBtn";
import LanBtn from "../../components/LangBtn/LanBtn";
// Import Custom Hooks
import { useTheme } from "../../hooks/useTheme";
// Import Images
import Logo from '../../assets/logos/KP-Logo.png';
// Import Styles
import Styles from './headerBar.module.scss'

const HeaderBar = (rops) => {
  const {base, light} = Styles;

  const {theme} = useTheme();

  return (
    <div className={
      `${theme === 'light' 
        ? (base + ' ' + light) 
        : (base)}`
    }>
      <a href="#home">
        <img src={Logo} alt={Logo} />
      </a>

      <div className='options'
      >
        <ul>
          <li>
            <ThemeBtn />
          </li>
          <li>
            <LanBtn />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderBar;
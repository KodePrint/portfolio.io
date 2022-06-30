// Import Components
import HeaderBar from "./HeaderBar";
// Import Icons
import {
  RiHomeFill, RiHomeLine,
  RiFolder3Line, RiFolder3Fill,
  RiAccountPinCircleLine, RiAccountPinCircleFill,
  RiSendPlaneLine, RiSendPlaneFill
} from "react-icons/ri";
// Import Images
import Logo from '../../assets/logos/KP-Logo.png';
import Spain from '../../assets/logos/spain.png';
import Uk from '../../assets/logos/uk.png';
// Import Custom Hooks
import { useTheme } from "../../hooks/useTheme";
// import Styles Module
import Styles from './styles.module.scss'

const Navbar = () => {
  const {theme} = useTheme();
  return (
    <nav className={
      `${theme === 'light'
        ? (Styles.base + ' ' + Styles.light)
        : (Styles.base)}`
    }>
      
      <div className="div">
        <HeaderBar theme={theme} />
      </div>

      {/* <div className={
        `${Styles.baseTop}
        ${ theme === 'light' && Styles.topLight }`
      }>
        <a href="#home">
          <img src={Logo} alt="Logo" />
        </a>
        <ul>
          <li>
            <ThemeBtn />
          </li>
          <li>
            <LanBtn />
          </li>
        </ul>
      </div> */}

      <ul className={
        `${Styles.baseMenu}
        ${ theme === 'light' && Styles.menuLight }`
      }>
        <li>
          <a href='#home'>
            <RiHomeLine />
          </a>
        </li>
        <li>
          <a href="#about">
            <RiAccountPinCircleLine />
          </a>
        </li>
        <li>
          <a href="#portfolio">
            <RiFolder3Line />
          </a>
        </li>
        <li>
          <a href="#contact">
            <RiSendPlaneLine />
          </a>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;
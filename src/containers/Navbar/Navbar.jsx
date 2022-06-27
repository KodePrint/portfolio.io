import {
  RiHomeFill, RiHomeLine,
  RiFolder3Line, RiFolder3Fill,
  RiAccountPinCircleLine, RiAccountPinCircleFill,
  RiSendPlaneLine, RiSendPlaneFill
} from "react-icons/ri";


// import Styles Module
import Styles from './styles.module.scss'
const Navbar = () => {
  return (
    <nav className="">
      <div className={Styles.baseTop}>
        <img src="" alt="Logo" />
      </div>
      <ul className={Styles.baseMenu}>
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
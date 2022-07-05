// Import Components
import Options from "./Options";
// Import Images
import Logo from '../../../assets/logos/KP-Logo.png';
// Import Stules
import './NavHeader.scss';

const NavHeader = () => {
  return (
    <div className="NavHeader">
      <div className="NavHeader__logo">
        <img src={Logo} alt={Logo} />
        <span>KevinPalma</span>
      </div>
      <Options />
    </div>
  );
}

export default NavHeader;
// Import Components
import ElementMenu from "../../../components/ElementMenu/ElementMenu";
// Import Custom Hooks
import { useObserver } from "../../../hooks/useObserver";
import { useSection } from "../../../hooks/useSection";
// Import Icons
import {
  RiHomeFill, RiHomeLine,
  RiFolder3Line, RiFolder3Fill,
  RiAccountPinCircleLine, RiAccountPinCircleFill,
} from "react-icons/ri";
// Import Styles
import './NavMenu.scss';

const NavMenu = () => {
  const { section } = useSection();

  console.log('Section: ', section);

  return (
    <div className="NavMenu">
      <ul className="NavMenu__menuList">
        <li className="NavMenu__menuItem">
          <ElementMenu title="Home" to='#home'>
            {
              section === 'home' 
                ? (<RiHomeFill/>)
                : (<RiHomeLine/>)
            }
          </ElementMenu>
        </li>
        <li className="NavMenu__menuItem">
          <ElementMenu title="About Me" to='#about'>
            {
              section === 'about' 
                ? (<RiAccountPinCircleFill />)
                : (<RiAccountPinCircleLine />)
            }
          </ElementMenu>
        </li>
        <li className="NavMenu__menuItem">
          <ElementMenu title="Portfolio" to='#portfolio'>
            {
              section === 'portfolio' 
                ? (<RiFolder3Fill />)
                : (<RiFolder3Line />)
            }
          </ElementMenu>
        </li>
      </ul>
    </div>
  );
}

export default NavMenu;
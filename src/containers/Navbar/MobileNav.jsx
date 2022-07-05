// Import Components
import NavHeader from "./NavHeader/NavHeader";
import NavMenu from "./NavMenu/NavMenu";
// Import Styles
import "./NavBar.scss";

const MobileNav = () => {
  return (
    <nav className="MobileNav">
      <div className="navContainer">
        <NavHeader />
        <NavMenu />
      </div>
    </nav>
  );
}

export default MobileNav;
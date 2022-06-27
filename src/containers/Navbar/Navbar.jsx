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
          <a href="#">H</a>
        </li>
        <li>
          <a href="#">A</a>
        </li>
        <li>
          <a href="#">P</a>
        </li>
        <li>
          <a href="#">C</a>
        </li>
        <li className={Styles.selector}></li>
      </ul>
    </nav>
  );
}

export default Navbar;
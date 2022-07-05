// Import Styles
import './ElementMenu.scss';

const ElementMenu = ({children, title, to}) => {

  return (
    <a href={to} className="ElementMenu">
      <i className='ElementMenu__icon'>
        {children}
      </i>
      <span className="ElementMenu__title">
        {title}
      </span>
    </a>
  );
}

export default ElementMenu;
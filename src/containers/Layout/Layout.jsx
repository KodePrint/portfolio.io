import { useEffect, useState } from 'react';
// Import Components
import MobileNav from '../Navbar/MobileNav';
// Import Styles
import './Layout.scss'
const Layout = ({children}) => {

  return (
    <div className="Layout">
      {children}
    </div>
  );
}

export default Layout;
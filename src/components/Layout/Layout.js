import { useState } from 'react';
import Drawer from '../Drawer/Drawer';
import Footer from '../Footer/Footer';
import Toolbar from '../Toolbar/Toolbar';
import './Layout.css'

const Layout = ({ children }) => {

  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }

  return ( <main className="Layout">
    <Toolbar toggleDrawer={toggleDrawer}/>
    <Drawer open={drawerOpen} toggle={toggleDrawer}/>
    <div>
      {children}
    </div>
    <Footer />
  </main> );
}

export default Layout;
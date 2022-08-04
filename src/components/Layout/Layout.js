import Drawer from '../Drawer/Drawer';
import Footer from '../Footer/Footer';
import Toolbar from '../Toolbar/Toolbar';
import './Layout.css'

const Layout = ({ children }) => {
  return ( <main className="Layout">
    <div>
      {children}
    </div>
    <Footer />
  </main> );
}

export default Layout;
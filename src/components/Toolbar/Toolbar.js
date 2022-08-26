import Logo from "../Nav/Logo/Logo";
import Menu from "../Nav/Menu/Menu";
import Nav from "../Nav/Nav";
import logo from '../../assets/logo.png';
import './Toolbar.css';

const Toolbar = ({ toggleDrawer }) => {
  return (
    <nav className='Toolbar'>
        <Logo logo={logo} />
        <Nav />
        <Menu callback={toggleDrawer}/>
    </nav>
  );
}

export default Toolbar;
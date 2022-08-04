import Logo from "../Nav/Logo/Logo";
import Menu from "../Nav/Menu/Menu";
import Nav from "../Nav/Nav";
import logo from '../../assets/logo.png';
import './Toolbar.css';

const Toolbar = () => {
  return (
    <nav className='Toolbar'>
        <Logo logo={logo} />
        <Nav />
        <Menu />
    </nav>
  );
}

export default Toolbar;
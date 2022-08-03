import Logo from '../Nav/Logo/Logo';
import NavItem from '../Nav/NavItem/NavItem';
import './Footer.css';
import logo from '../../assets/logo-dark.png';

const Footer = () => {
  return ( <div className='Footer'>
    <Logo logo={logo}/>
    <NavItem />
    <hr />
  </div> );
}

export default Footer;
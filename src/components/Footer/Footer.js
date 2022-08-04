import Logo from '../Nav/Logo/Logo';
import NavItem from '../Nav/NavItem/NavItem';
import './Footer.css';
import logo from '../../assets/logo-dark.png';
import Nav from '../Nav/Nav';

const Footer = () => {
  return ( <div className='Footer'>
    <Nav />
    <hr />
    <div>Copyright 2022</div>
  </div> );
}

export default Footer;
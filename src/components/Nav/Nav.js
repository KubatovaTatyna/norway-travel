import classes from "./Nav.module.css";
import Logo from "./Logo/Logo";
import NavItem from "./NavItem/NavItem";
import logo from '../../assets/logo.png';
import Menu from "./Menu/Menu";

const Nav = () => {
  return (
    <div className={classes.Nav}>
      <Logo logo={logo}/>
      <NavItem />
      <Menu />
    </div>
  );
}

export default Nav;
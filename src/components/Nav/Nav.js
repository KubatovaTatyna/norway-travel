import classes from "./Nav.module.css";
import Logo from "./Logo/Logo";
import NavItem from "./NavItem/NavItem";

const Nav = () => {
  return (
    <ul className={classes.Nav}>
      <NavItem>Destinations</NavItem>
      <NavItem>Activities</NavItem>
      <NavItem>About Us</NavItem>
      <NavItem>Contact</NavItem>
    </ul>
  );
}

export default Nav;
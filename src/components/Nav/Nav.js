import classes from "./Nav.module.css";
import Logo from "./Logo/Logo";
import NavItem from "./NavItem/NavItem";

const Nav = () => {
  return (
    <div className={classes.Nav}>
      <Logo />
      <NavItem />
      {/* <Menu /> */}
    </div>
  );
}

export default Nav;
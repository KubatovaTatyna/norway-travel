import classes from "./Nav.module.css";
import Logo from "./Logo/Logo";
import NavItem from "./NavItem/NavItem";

const Nav = () => {
  return (<div className={classes.Nav}>
    <div className={classes.Container}>
      <Logo />
      <NavItem />
      {/* <Menu /> */}
    </div>
  </div>);
}

export default Nav;
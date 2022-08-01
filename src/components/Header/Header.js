import Nav from "../Nav/Nav";
import classes from "./Header.module.css"

const Header = () => {
  return ( <div className={classes.Header}>
    <Nav />
  </div> );
}

export default Header;
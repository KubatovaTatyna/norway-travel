import classes from './NavItem.module.css';

const NavItem = () => {
  return (<div className={classes.NavItem}>
    <ul>
      <li>Destinations</li>
      <li>Activities</li>
      <li>About Us</li>
      <li>Contact</li>
    </ul>
  </div>)
}
  export default NavItem;
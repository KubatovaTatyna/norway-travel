import classes from './Logo.module.css';
import logo from '../../../assets/logo.png'

const Logo = () => {
  return (<div className={classes.Logo}>
    <img src={logo} />
    <span>TRAVELx</span>
  </div>);
}

export default Logo;
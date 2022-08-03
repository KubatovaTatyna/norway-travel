import './Logo.css';

const Logo = ({ logo }) => {
  return (<div className='Logo'>
    <img src={logo} />
    <span>TRAVELx</span>
  </div>);
}

export default Logo;
import './Logo.css';

const Logo = ({ logo }) => {
  return (<div className='Logo'>
    <img src={logo}  alt='alt'/>
    <span>TRAVELx</span>
  </div>);
}

export default Logo;
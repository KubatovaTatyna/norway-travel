import './Logo.css';

const Logo = ({ logo }) => {
  return (<div className='Logo'>
    <img src={logo}  alt='image'/>
    <span>TRAVELx</span>
  </div>);
}

export default Logo;
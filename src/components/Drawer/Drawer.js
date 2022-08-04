import Logo from '../Nav/Logo/Logo';
import Nav from '../Nav/Nav';
import './Drawer.css';

const Drawer = () => {
  return ( <div className="Drawer">
    <div className='backdrop'></div>
    <div className='content'>
      <Nav />
    </div>
  </div> );
}

export default Drawer;
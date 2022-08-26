import Nav from '../Nav/Nav';
import './Drawer.css';

const Drawer = ({ open,toggle }) => {
  const classNames = ['Drawer'];
  if(open) {
    classNames.push('open');
  }
  return ( <div className={classNames.join(" ")}>
    <div className='backdrop' onClick={toggle}></div>
    <div className='content'>
      <Nav />
    </div>
  </div> );
}

export default Drawer;
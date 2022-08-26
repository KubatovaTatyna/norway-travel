import './Menu.css';
import menu from '../../../assets/menu.png';

const Menu = ({ callback }) => {
  return ( <div onChange={console.log(callback)} className="Menu">
    <img src={menu}  alt='image'/>
  </div> );
}

export default Menu;
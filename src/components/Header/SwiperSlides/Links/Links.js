import facebook from '../../../../assets/facebook.png'
import instagram from '../../../../assets/instagram.png'
import twitter from '../../../../assets/twitter.png';
import './Links.css';

const Links = () => {
  return (
    <div className="links">
      <a href="#"><img src={facebook} className='facebook'  alt='image'/></a>
      <a href="#"><img src={twitter} alt='image' /></a>
      <a href="#"><img src={instagram}  alt='image'/></a>
    </div> );
}

export default Links;
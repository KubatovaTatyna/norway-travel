import facebook from '../../../../assets/facebook.png'
import instagram from '../../../../assets/instagram.png'
import twitter from '../../../../assets/twitter.png';
import './Links.css';

const Links = () => {
  return (
    <div className="links">
      <a href="#facebook"><img src={facebook} className='facebook'  alt='alt'/></a>
      <a href="#twitter"><img src={twitter} alt='alt' /></a>
      <a href="#instagram"><img src={instagram}  alt='alt'/></a>
    </div> );
}

export default Links;
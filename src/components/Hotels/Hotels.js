import hotel1 from '../../assets/hotel1.png';
import hotel2 from '../../assets/hotel2.png';
import hotel3 from '../../assets/hotel3.png';
import yellowStar from '../../assets/yellowStar.png';
import Hotel from './Hotel/Hotel';

import './Hotels.css';

const Hotels = () => {
  return (<div className="Hotels">
    <div className="hotelsHeader">
      <span>BEAUTIES</span>
      <h1>Hotels and Appartements</h1>
    </div>
    <div className='HotelsCards'>
      <Hotel hotel={hotel1} star={yellowStar} />
      <Hotel hotel={hotel2} star={yellowStar} />
      <Hotel hotel={hotel3} star={yellowStar} />
    </div>
  </div>);
}

export default Hotels;
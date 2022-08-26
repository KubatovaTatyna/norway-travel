
import Links from './Links/Links';
import './SwiperSlides.css';

const SwiperSlides = ({ slide }) => {
  return (
    <>
      <img src={slide}  alt='image'/>
      <div className="headerText">
        <span>EXPLORE</span>
        <h1>Norway</h1>
      </div>
      <Links />
    </>);
}

export default SwiperSlides;
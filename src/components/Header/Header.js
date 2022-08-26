
import slide1 from '../../assets/slide1.png';
import slide2 from '../../assets/slide2.jpg';
import slide3 from '../../assets/slide3.jpg';
import slide4 from '../../assets/slide4.jpg';
import slide5 from '../../assets/slide5.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";

import "./Header.css";
import SwiperSlides from "./SwiperSlides/SwiperSlides";
import Toolbar from "../Toolbar/Toolbar";
import Drawer from "../Drawer/Drawer";


const Header = () => {
  return (<div className='Header'>
    <Toolbar />
    <Drawer />
    <>
      <Swiper
        direction={"vertical"}
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><SwiperSlides slide={slide1} /></SwiperSlide>
        <SwiperSlide><SwiperSlides slide={slide2} /></SwiperSlide>
        <SwiperSlide><SwiperSlides slide={slide3} /></SwiperSlide>
        <SwiperSlide><SwiperSlides slide={slide4} /></SwiperSlide>
        <SwiperSlide><SwiperSlides slide={slide5} /></SwiperSlide>
      </Swiper>
    </>
  </div>);
}

export default Header;
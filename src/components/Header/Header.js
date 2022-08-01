import Nav from "../Nav/Nav";
import slide1 from '../../assets/slide1.png';
import slide2 from '../../assets/slide2.jpg';
import slide3 from '../../assets/slide3.jpg';
import slide4 from '../../assets/slide4.jpg';
import slide5 from '../../assets/slide5.jpg';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";

import "./Header.css";


const Header = () => {
  return (<div className='Header'>
    <Nav />
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
        <SwiperSlide>
          <img src={slide1} />
          <div className="headerText">
            <span>EXPLORE</span>
            <h1>Norway</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} />
          <div className="headerText">
            <span>EXPLORE</span>
            <h1>Norway</h1>
          </div></SwiperSlide>
        <SwiperSlide>
          <img src={slide3} />
          <div className="headerText">
            <span>EXPLORE</span>
            <h1>Norway</h1>
          </div></SwiperSlide>
        <SwiperSlide>
          <img src={slide4} />
          <div className="headerText">
            <span>EXPLORE</span>
            <h1>Norway</h1>
          </div></SwiperSlide>
        <SwiperSlide>
          <img src={slide5} />
          <div className="headerText">
            <span>EXPLORE</span>
            <h1>Norway</h1>
          </div></SwiperSlide>
      </Swiper>
    </>
  </div>);
}

export default Header;
import './Activities.css';
import slide1 from '../../assets/actSlide1.png';
import slide2 from '../../assets/actSlide2.png';
import slide3 from '../../assets/actSlide3.png';
import slide4 from '../../assets/actSlide4.png';
import slide5 from '../../assets/actSlide5.png';
import slide6 from '../../assets/actSlide6.png';
import slide7 from '../../assets/actSlide7.png';
import slide8 from '../../assets/actSlide8.png';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";

const Activities = () => {
  return (<div className="Activities">
    <>
      <div className='activitiesHeader'>
        <span>HUNDREDS OF</span>
        <h1>Activities for Everyoune</h1>
      </div>
      <div className='slideContainer'>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          slidesPerGroup={2}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slide1} />
            <div className='slideText'>
              <p>Hikking</p>
              <span>230 activites</span>
            </div>
          </SwiperSlide>
          <SwiperSlide><img src={slide2} />
            <div className='slideText'>
              <p>Sailing</p>
              <span>230 activites</span>
            </div>
          </SwiperSlide>
          <SwiperSlide><img src={slide3} />
            <div className='slideText'>
              <p>Skiing</p>
              <span>230 activites</span>
            </div>
          </SwiperSlide>
          <SwiperSlide><img src={slide4} />
            <div className='slideText'>
              <p>Kayaking</p>
              <span>230 activites</span>
            </div>
          </SwiperSlide>
          <SwiperSlide><img src={slide5} />
            <div className='slideText'>
              <p>Hikking</p>
              <span>230 activites</span>
            </div>
          </SwiperSlide>
          <SwiperSlide><img src={slide6} />
            <div className='slideText'>
              <p>Hikking</p>
              <span>230 activites</span>
            </div>
          </SwiperSlide>
          <SwiperSlide><img src={slide7} />
            <div className='slideText'>
              <p>Hikking</p>
              <span>230 activites</span>
            </div>
          </SwiperSlide>
          <SwiperSlide><img src={slide8} />
            <div className='slideText'>
              <p>Hikking</p>
              <span>230 activites</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  </div>);
}

export default Activities;
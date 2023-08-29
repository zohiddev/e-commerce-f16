import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import {Autoplay, Navigation, Pagination } from 'swiper/modules';
import SidebarSlide from './SidebarSlide';


// console.log(setHour());

function Mainswiper() {
  
  // const [hour, setHour] = useState(0);
  // const [min, setMin] = useState(0);
  // const [second, setSecond] = useState(0);

  return (
    <div className='main-swiper'>
    <div className="container">
        <div className="swiper-content">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false
        }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="main-mySwiper"
        >

          <SwiperSlide>
            <img src="./src/assets/images/sliderImg1.png" className='swiper-main__img' alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="./src/assets/images/sliderImg2.png" className='swiper-main__img' alt="" />
          </SwiperSlide>
          
          <SwiperSlide>
            <img src="./src/assets/images/sliderImg3.png" className='swiper-main__img' alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="./src/assets/images/sliderImg4.jpg" className='swiper-main__img' alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="./src/assets/images/sliderImg5.png" className='swiper-main__img' alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="./src/assets/images/sliderImg6.png" className='swiper-main__img' alt="" />
          </SwiperSlide>
        </Swiper>
        <div className="swiper__advertising">

            <div className="swiper__items">
              <h1 className='swiper__title'>Kun mahsuloti</h1>
              <p className='swiper__timer'>
                <span className='swiper__hour'>10 : </span>
                <span className='swiper__min'>53 : </span>
                <span className='swiper__second'>34</span>
              </p>
            </div>

        <Swiper
        
      >
       <SidebarSlide/>
      </Swiper>
        
      </div>
      </div>

    </div>
  </div>
  )
}

export default Mainswiper
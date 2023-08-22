import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Navigation, Autoplay, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


// console.log(setHour());

function swiper() {
  
  // const [hour, setHour] = useState(0);
  // const [min, setMin] = useState(0);
  // const [second, setSecond] = useState(0);

  return (
    <div className='swiper'>
    <div className="container">
        <div className="swiper-content">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          >

          <SwiperSlide>
            <img src="./src/assets/images/sliderImg1.png" className='swiper-m' alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="./src/assets/images/sliderImg2.png" className='swiper-m' alt="" />
          </SwiperSlide>
          
          <SwiperSlide>
            <img src="./src/assets/images/sliderImg3.png" className='swiper-m' alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="./src/assets/images/sliderImg4.jpg" className='swiper-m' alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="./src/assets/images/sliderImg5.png" className='swiper-m' alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="./src/assets/images/sliderImg6.png" className='swiper-m' alt="" />
          </SwiperSlide>
        </Swiper>
        <div className="swiper__advertising">

            <div className="swiper__items">
              <h1 className='swiper__title'>Kun mahsuloti</h1>
              <p className='swiper__timer'>
                <span className='swiper__hour'>10 </span>:
                <span className='swiper__min'>53 </span>:
                <span className='swiper__second'>34</span>
              </p>
            </div>

        <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        style={{
          "--swiper-pagination-overflow-y": "unset"
        }}

        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='swiper-card'>
          <div className='swiper-card__info'>
            <div>
              <img src="./src/assets/images/sliderImage1.jpg" className='swiper__img' alt="" />
            </div>
            <div className='card-items'>
              <a href="/">
                <p className='swiper-info'>
                  Videokarta Palit GeForce RTX 2060 Super Dual 8GB (from U.A.E) 
                </p>
              </a>
              <div>

              <p className='swiper-info__summa'>
                3 519 000 so'm
              </p>

              <p className='swiper-info__month'>
                455 000 so'm x 12 oy
              </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-card'>
         <div className="swiper-card__info">
            <img src="./src/assets/images/sliderImage2.jpg" className='swiper__img' alt="" />
           <div className="card-items">
            <a href="/">
                <p className='swiper-info'>
                  Sokovijimalka Alonsa AL-930 
                </p>
              </a>
              <p className='swiper__summa'>
                1 214 000 so'm
              </p>
              <p className='swiper-info__month'>
                157 000 so'm x 12 oy
              </p>
           </div>
          
         </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-card'>
          <div className="swiper-card__info">

            <img src="./src/assets/images/sliderImage3.jpeg" className='swiper__img' alt="" />
            <div className='card-items'>

              <a href="/">
                <p className='swiper-info'>
                  Smartfon Huawei nova 10 SE 
                </p>
              </a>
              <p className='swiper__summa'>
                4 350 000 so'm
              </p>
              <p className='swiper-info__month'>
                725 000 so'm x 6 oy
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
        
      </div>
      </div>

    </div>
  </div>
  )
}

export default swiper
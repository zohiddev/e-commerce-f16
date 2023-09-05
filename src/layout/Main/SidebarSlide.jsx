import React from 'react'
import { SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper } from 'swiper/react';
import { Pagination } from 'swiper/modules';

function SidebarSlide() {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{
      clickable: true,
    }}
        modules={[Pagination]}
        className="mySwiper">
     
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
  )
}

export default SidebarSlide
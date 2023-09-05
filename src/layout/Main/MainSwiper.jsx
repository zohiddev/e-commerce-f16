import React from 'react';
import SidebarSlide from './SidebarSlide';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { mainSwiperData } from '../../data/swiperData';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Mainswiper() {

  return (
    <section className='main-swiper'>
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
            {
              mainSwiperData.map((item) => (
                <SwiperSlide>
                  <img src={item.img} key={item.id} className='swiper-main__img' alt={item.name} />
                </SwiperSlide>
              ))
            }
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
            <SidebarSlide />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Mainswiper
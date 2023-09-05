import React from 'react'
import { SwiperSlide, Swiper } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { sidebarSliderData } from '../../data/swiperData';

function SidebarSlide() {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {
        sidebarSliderData.map((item) => (
          <SwiperSlide className='swiper-card' key={item.id}>
            <div className='swiper-card__info'>
              <div>
                <img src={item.img} className='swiper__img' alt={item.name} />
              </div>
              <div className='card-items'>
                <a href="#">
                  <p className='swiper-info'>
                    {item.content}
                  </p>
                </a>
                <div>
                  <p className='swiper-info__summa'>
                    {item.price}
                  </p>
                  <p className='swiper-info__month'>
                    {item.info}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default SidebarSlide
import React from 'react'
import { SwiperSlide, Swiper } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { sidebarSliderData } from '../../data/swiperData';
import { useSelector } from 'react-redux';

function SidebarSlide() {
  const {productOfTheDay, loading} = useSelector(state => state.products)
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
        loading ? <h1>Loading....</h1> : productOfTheDay.map((item) => (
          <SwiperSlide className='swiper-card' key={item.id}>
            <div className='swiper-card__info'>
              <div>
                <img src={item.main_image} className='swiper__img' alt={item.name_uz} />
              </div>
              <div className='card-items'>
                <a href="#">
                  <p className='swiper-info'>
                    {item.name_uz}
                  </p>
                </a>
                <div>
                  <p className='swiper-info__summa'>
                    {item.total_price}
                  </p>
                  <p className='swiper-info__month'>
                    {item.monthly_repayment}
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
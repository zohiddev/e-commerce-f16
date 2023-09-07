import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, History } from 'swiper/modules';
import { miniSwiperTwoData } from '../../../data/miniSwiperTwoData';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function MineSlider() {
  return (
    <>
      <div className="container">
        <Swiper
          spaceBetween={12}
          slidesPerView={7}
          navigation={true}
          pagination={false}
          history={{
            key: 'slide',
          }}
          modules={[Navigation, Pagination, History]}
          className="mySwiper"
        >
          {
            miniSwiperTwoData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="mini-slider">
                  <div className="mini-slider__img">
                    <img src={item.img} alt="" className="mini-slider__img" />
                  </div>
                  <div className="mini-slider__content slider__content">
                    <p className="slider__contenr-text">{item.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </>
  );
}





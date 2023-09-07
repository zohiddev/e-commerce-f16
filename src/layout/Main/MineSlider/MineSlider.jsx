import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, History } from 'swiper/modules';
import { miniSwiperData } from '../../../data/miniSwiperData';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function MineSlider() {
  return (
    <>
      <div className="container">
        <Swiper
          spaceBetween={12}
          slidesPerView={10.350}
          navigation={true}
          pagination={false}
          history={{
            key: 'slide',
          }}
          modules={[Navigation, Pagination, History]}
          className="mySwiper"
        >
          {
            miniSwiperData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="mine-slider__card">
                  <div className="mine-slider">
                    <img src={item.img} alt="" className="mine-slider__img" />
                  </div>
                  <div className="mine-slider">
                    <p className="mine-slider__text">{item.text}</p>
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





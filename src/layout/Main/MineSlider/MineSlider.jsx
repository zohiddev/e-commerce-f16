
import MineSliderCard from './MineSliderCard';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Navigation, Pagination, History } from 'swiper/modules';

export default function MineSlider() {
  return (
    <>
        <div className="container">
      <Swiper
        spaceBetween={12}
        slidesPerView={1}
        navigation={true}
        pagination={false}
        history={{
          key: 'slide',
        }}
        modules={[Navigation, Pagination, History]}
        className="mySwiper"
      >
        <SwiperSlide data-history="1"><MineSliderCard img='https://olcha.uz/image/128x128/category/CKZsoYyBZe0yjbVeweAfqdN37DUoniYtoaP6axHXjmP8mL1sdfHJViYxE9oC.' text='Televizor, foto-video va audio'/></SwiperSlide>
        <SwiperSlide data-history="Slide 2"><MineSliderCard img='https://olcha.uz/image/128x128/category/ANjR66Mftj98kEBx8CWVVnQLdFQuJ4pSr3QKP4n9msN9OAwp25zPtdDyLxi5.' text='Notbuk, printer kompyuterlar'/></SwiperSlide>
        <SwiperSlide data-history="3"><MineSliderCard img='https://olcha.uz/image/128x128/category/ZUL8nBr5B3s2XNEX8MYx7lQz52QDpTpOOEf31vUDjN5Zxt0nkHEDuxyNNvuJ.' text='Smartfon, telefon, gadjet, aksessuarlar'/></SwiperSlide>
        <SwiperSlide data-history="Slide 4"><MineSliderCard img='https://olcha.uz/image/128x128/category/BCoCpVZoqpqJzQC4aiRpGVE115PG3XEqtSsF4AfxYn9sruh9BLoqUenR5IAi.' text='Maishiy texnika'/></SwiperSlide>
        <SwiperSlide data-history="5"><MineSliderCard img='https://olcha.uz/image/128x128/category/BMBNZQhTuA1GZumMwimF96GL1kiCPWrmAqAqHjYJ9hMB1uuofjrF9GHH0cli.' text='Barchasi oshxona uchun'/></SwiperSlide>
        <SwiperSlide data-history="Slide 6"> <MineSliderCard img='https://olcha.uz/image/128x128/category/9fCLiZeH7QOJDKz24ZZg9h7lNbSMlWNuZKCYZueqB0bGSDpx9AbodQuBhmoa.' text='Sport anjomlarai'/></SwiperSlide>
        <SwiperSlide data-history="7"><MineSliderCard img='https://olcha.uz/image/128x128/category/Yj9TQjVam8Cv1fiH09UBzA38z6ei92xvBC7BCvhyS3CS5b2XZVd3dRwvMUVQ.' text='Go‘zalik va salomatlik'/></SwiperSlide>
        
        <SwiperSlide data-history="Slide 8"> <MineSliderCard img='https://olcha.uz/image/128x128/category/1Yxv7H4MED8VfZPun78QtIrbJz7ZSC2VWMVAc9i5952ZDmdlN4SP9Lkr0bCh.png' text='Chet el tovarlari'/></SwiperSlide>
        <SwiperSlide data-history="9"><MineSliderCard img='https://olcha.uz/image/128x128/category/N3iMWPyvXRIXTqwloVhRb4oe2PEn38unPptNWZVenY7DJS2GYY5py94DRAX6.' text='Avto jihozlari'/></SwiperSlide>
        <SwiperSlide data-history="10"><MineSliderCard img='https://olcha.uz/image/128x128/category/tS7u52PvR1Zaw3xRLQ0h1zBH9sSevOAQt3FdXmyQ4DfUo8cgruPXuvyyAHmO.' text='Barchasi ofis, uy va bog‘ uchun'/></SwiperSlide>
        <SwiperSlide data-history="11"><MineSliderCard img='https://olcha.uz/image/128x128/category/LzTnOeBLuEdD8SZNP60rVzei8wxGzi1UcbaalLAls45FQODwUdmXnzgsBgFR.' text='Bolalar uchun o‘yinchoq va mahsulotlar'/></SwiperSlide>
        <SwiperSlide data-history="12"><MineSliderCard img='https://olcha.uz/image/128x128/category/jTPPyG1D9fziqBW0yJXQd3RpyCUSRd6AbthM5l0CRxLFbJhrlxOmcqI48LMZ.' text='Kiyim va poyabzallar'/></SwiperSlide>
        <SwiperSlide data-history="13"><MineSliderCard img='https://olcha.uz/image/128x128/category/eMGaqVMlhSpffNNjX3KglXrMRvO0LKRyIFiHhujkihjkukwIMRPUgqvkB5rf.' text='Kitoblar'/></SwiperSlide>
        <SwiperSlide data-history="14"><MineSliderCard img='https://olcha.uz/image/128x128/category/QABgOzSh1WTWkoFrE0KbcjWEucVaAwQBJgQjklPAtXaKwjp0v9ZYkF34uVPv.' text='Mebel'/></SwiperSlide>
        <SwiperSlide data-history="15"><MineSliderCard img='https://olcha.uz/image/128x128/category/78jAtnkAgDOlj2JhxYHV8kV3mFfBtYEXkNLPYZCCBsOzr4C4HZpgVxT659DJ.' text='Geymerlar uchun'/></SwiperSlide>
        <SwiperSlide data-history="16"><MineSliderCard img='https://olcha.uz/image/128x128/category/difdCHCdbpndST221TZmKFNSGUiwYIjRB8KPJRl1kVkTt2jyN4f8hnFgk68Q.' text='Barchasi ta’mirlash va qurilish uchun'/></SwiperSlide>
        <SwiperSlide data-history="17"><MineSliderCard img='https://olcha.uz/image/128x128/category/hxPoXdRO3Fn00lAaiVuWbLM54oI81GeLrZF69z3kj3p1BuSdTMlddg27hxYX.' text='Kantselyariya tovarlari'/></SwiperSlide>
        <SwiperSlide data-history="18"><MineSliderCard img='https://olcha.uz/image/128x128/category/KhQzj5jBMlUUQGQg3Pz5471WDpUa2nP1sOs2kdLPeuWE1FbdWKb84GLSMpQg.' text='Elektrotranspor'/></SwiperSlide>
        <SwiperSlide data-history="19"><MineSliderCard img='https://olcha.uz/image/128x128/category/7T2pcLY5hthpqtyllhQ3vpdFx9fqjoX0pvqaXSIbwjdRcumTH45wouMf006x.' text='Sovg’alar va suvinerlar'/></SwiperSlide>
        <SwiperSlide data-history="20"><MineSliderCard img='https://olcha.uz/image/128x128/category/KlAd7LlcRu6bhfH6HNVboeRjIkNWhiAoM5WRDOs4r9TSI6uHaTcXB38MCvTR.' text='Aqilli uy'/></SwiperSlide>
        <SwiperSlide data-history="21"><MineSliderCard img='https://olcha.uz/image/128x128/category/KmzkMXdYxyl1vNOjsdM2Ar4MXmfagR3Xu5pChXJ0h32P0VKbs8yXgNNC0B81.' text='Qulay takliflar'/></SwiperSlide>
        <SwiperSlide data-history="22"><MineSliderCard img='https://olcha.uz/image/128x128/category/CDju5Jv3ZJ7OrZEpO2UZrJrLN6aR19HO7bM1u1eIvQelktJ9bzmSynAwKX37.png' text='Olcha Qo’ldan'/>  </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}





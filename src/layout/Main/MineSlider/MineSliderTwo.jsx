import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MineSliderCardTwo from './MineSliderCardTwo';

function  MineSliderTwo() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <> 
    <div className="mine-slider__wrapper">

   
    <div className="container">
<Carousel responsive={responsive}>

<MineSliderCardTwo img='https://olcha.uz/image/132x132/category/6zDy6H7NAKLmaIszRCYFLxiXDtZDvNapSNOmLkLZJUpuXpRTtEq98OC9gX5J.png' text='Televizor, foto-video va audio'/>
<MineSliderCardTwo img='https://olcha.uz/image/132x132/category/LMk7YuQAzKqsUIBDfr4jRA2IEFsLPsyFkWAWFHYkwlQZ8WRVvWut5Heb8Dju.png' text='Notbuk, printer kompyuterlar'/>
<MineSliderCardTwo img='https://olcha.uz/image/132x132/category/M90cCGAT8ARmlnxJzt5sH4cTD4eBUjWocRW36j69zghIlMA6leRkjL9mvoBr.png' text='Smartfon, telefon, gadjet, aksessuarlar'/>
<MineSliderCardTwo img='https://olcha.uz/image/132x132/category/gTEdspBADkaKoLWlt6Tyc1XrGeJAiyfd8zwwP52GBOFDtAVnVtj4jDOwbCMz.png' text='Maishiy texnika'/>
<MineSliderCardTwo img='https://olcha.uz/image/132x132/category/3OqvliYxYnrZoZKX7ZSuIyAPCC3C4lp11u45G04T8RbYWan6GDrMBB0gwre1.png' text='Barchasi oshxona uchun'/>
<MineSliderCardTwo img='https://olcha.uz/image/132x132/category/opA1z5cMyRtEZW6Oa02AXZnH0l74jiTNDA10QXTKZXS8fsoYNuPAmjID5xUT.png' text='Sport anjomlarai'/>
<MineSliderCardTwo img='https://olcha.uz/image/132x132/category/v35JbK5fmf34Hl86Leu5QundGiGyP4BmhQ8olwbUdtUFZms0JWA5pp46yBSp.png' text='Go‘zalik va salomatlik'/>
<MineSliderCardTwo img='https://olcha.uz/image/132x132/category/KfzkiWRhu4PTV97D7N5FmpHqSm1OC7p2A8II3kwK8cNwigVl4L4Iw4cMwdWq.png' text='Chet el tovarlari'/>
<MineSliderCardTwo img='https://olcha.uz/image/132x132/category/8AHSgv20VYFMvDFCykQOb25FsT2zXTroCgxaNugsZmfaA1fHbFKswZT9tFqq.png' text='Avto jihozlari'/>
<MineSliderCardTwo img='https://olcha.uz/image/132x132/category/oACT4XAZ4raQLa0WSGelk0qgRnRurDnY8jpZaQiu5ftyAGh8LQyctUOCLbRf.' text='Barchasi ofis, uy va bog‘ uchun'/>
<MineSliderCardTwo img='https://olcha.uz/image/132x132/category/QWZGHagQZuLjugmADd9PqHo1UPOuCUUH7ME8Hj2EuO5dVw5n3Y9nXJUl9Ugf.' text='Bolalar uchun o‘yinchoq va mahsulotlar'/>
<MineSliderCardTwo img='https://olcha.uz/image/132x132/category/GtgyWIyER3Ahqeq4xrBhyL501KohK4wJlGUmjqZQj4BGJAnrZENIGqE7eic6.' text='Kiyim va poyabzallar'/>
<MineSliderCardTwo img='https://olcha.uz/image/132x132/category/odtXyERULXCcAjKtJEb0kH7XBV0InZmmqAwRqk24I1zqtITNExpsa7wto6uN.png' text='Kitoblar'/>
<MineSliderCardTwo img='https://olcha.uz/image/132x132/category/FwbLWc8SYnihYCcCTQzGbOCBgowRWJrt8SHh3pWKaVp8YwCfvs48I6Hc9oms.' text='Mebel'/>
<MineSliderCardTwo img='https://olcha.uz/image/132x132/category/uSZ7ukWOhOGAavEsU53jITihn8GZwiqeCmnzaErWodbkagi99gq739isSfC2.png' text='Geymerlar uchun'/>
<MineSliderCardTwo img='https://olcha.uz/image/132x132/category/ppPdVKboDyJeSIwPV2azbrUGGWU1NmeBICAEpufF5ZriTQsHT6MvCQKpDyUC.png' text='Barchasi ta’mirlash va qurilish uchun'/>
<MineSliderCardTwo img='https://olcha.uz/image/132x132/category/XxjQ3sboyyxqoFla8EbjilVOKCcx3p7hKS4KKVXrdyGmO9QVKjTEsDRps8wF.' text='Kantselyariya tovarlari'/>
<MineSliderCardTwo img='https://olcha.uz/image/132x132/category/SWNeU7zJweBz33GXum9nYVtuRmjHkXcHMca3xBORe14ltXARTyK1jZJXnvnp.png' text='Elektrotranspor'/>
<MineSliderCardTwo img='https://olcha.uz/image/132x132/category/JSzETduWX5FokR3KUC4hFWRQX2khVYY0w5E1e61OmB0GrzOENXXbkdcYTbuQ.png' text='Sovg’alar va suvinerlar'/>
<MineSliderCardTwo img='https://olcha.uz/image/132x132/category/f287b9tmtqIgr1NYZa6prXqHudqsybWmZLpSclByfcq0tJKrVqcTjjlktGKL.' text='Aqilli uy'/>
<MineSliderCardTwo img='https://olcha.uz/image/132x132/category/OfTypq6PC4mSDjutzLUuxdC7xb0U7eQ7FcUQkosRb4QWt0rlTiqSbLR8wXIe.' text='Qulay takliflar'/>
<MineSliderCardTwo img='https://olcha.uz/image/132x132/category/uIOH149JOzite80uw4xGHT3sGncLGeQNwMCjjmOktYSEhctmeWQNKRH36uwS.' text='Kreslolar'/>
<MineSliderCardTwo img='https://olcha.uz/image/132x132/category/CAsULb8p3H40vpZoKz909QGBbCrqyZYS3gs42xMQskpsVIugSlGE3aP0m4NT.' text='Uskunalar'/>
<MineSliderCardTwo img='https://olcha.uz/image/132x132/category/PQgh4AmHDsnRSsMGo9qVNuOzVzhW5cCzOH5VED9eVCZzUc87SAt3nOxhGPcB.png' text='Olcha Qo’ldan'/>  



</Carousel>
</div>
</div>
    </>
  )
}

export default MineSliderTwo




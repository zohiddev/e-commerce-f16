import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MineSliderCardThree from './MineSliderCardTwo';

function  MineSliderFive() {
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

<MineSliderCardThree img='https://olcha.uz/image/132x132/category/tAEIVkFM0QNZphZK6adOtkuNZ7c9IYsPgHkako9b2ILemNbhV8VaFuwiDUFm.png' text='Sport va hordik'/>
<MineSliderCardThree img='https://olcha.uz/image/132x132/category/D3OabRt09Me2IBTtMFSO4qRvU8Fi1dibN1EyHORVOZldBFSobpRR91j2vRLY.png' text='Futbol Anjomlari'/>
<MineSliderCardThree img='https://olcha.uz/image/132x132/category/dZrprdufqcljM5beP4sZmTytit33QpdrKTEF0JY50gGyb0IJkBFVxYG67Cx8.png' text='Basketbol anjomlari'/>
<MineSliderCardThree img='https://olcha.uz/image/132x132/category/6xTQwt7ozmNxusZGxQUl0P0WTAUKYKHYA6euGmrcNMNWfTzLxpG6xdHAlgvf.png' text='Tennis anjomlari'/>
<MineSliderCardThree img='https://olcha.uz/image/132x132/category/hxb96fajLgjf3rFiiMsaIFbYW89GaMjGKBwpzBtXuPUGghx8WeVVlPygzPk3.png' text='Jang sanati uchun anjomlar'/>
<MineSliderCardThree img='https://olcha.uz/image/132x132/category/lTOJTvtShAv81QR3SqZTo56xNxGeilm8opjZbsirnUJLHTmds6zXWlZdK5pH.png' text='Suzish anjomlari'/>
<MineSliderCardThree img='https://olcha.uz/image/132x132/category/Xbmlo8Z8MHaS588Aj5chi8f9VofP0F3PpaTWJAUPhYiYO8NoEWWbPewW2NWj.png' text='Universal sport kiyimlari'/>
<MineSliderCardThree img='https://olcha.uz/image/132x132/category/ZA1NeSSnbXkeTlmX25Yyyawr70MvkSJNJ26Hk9BpkRrDSDmK8fU5ODW092z4.png' text='Sport uskunalari'/>
<MineSliderCardThree img='https://olcha.uz/image/132x132/category/TcgYDwRWQzFkeLiwczJXL5AzIsNpYv4frcruHq2vl6BL4JcFUkgy3daOy4Y1.png' text='Sport ozukalari'/>
<MineSliderCardThree img='https://olcha.uz/image/132x132/category/amEAWCJNaaTARQrjN5eZj1rzJ79Hmu5SF9As2TAVPqxkxSCa2yQfubH154tk.png' text='Sport aksesuarlari'/>
<MineSliderCardThree img='https://olcha.uz/image/132x132/category/gv8jpiYV3vES0EtxzKuZS9thzgvZaJ62Jl9ZF38TybNferbdnr7vcknga6UF.png' text='Barchasi valeybol uchun'/>
<MineSliderCardThree img='https://olcha.uz/image/132x132/category/imwYfaMXYDR9BQLXlvmbKKQONserZNVq158z2U3qxsMA6wYrkhzdegDpYFiK.png' text='Stol oyinlari'/>





</Carousel>
</div>
</div>
    </>
  )
}

export default MineSliderFive




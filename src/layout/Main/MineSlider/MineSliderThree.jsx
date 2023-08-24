import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MineSliderCardThree from './MineSliderCardTwo';

function  MineSliderThree() {
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

<MineSliderCardThree img='https://olcha.uz/image/132x132/category/mO9VmUuKmuNeXQUfCW9Zj1XcVsYrt1NcZXrAKEcmZhvyw2RnLKcfnkuTRceb.png' text='Monoblok'/>
<MineSliderCardThree img='https://olcha.uz/image/132x132/category/nFjIo5G5W8ARnYxL309KHtr9U7zkEpVvEKHR9x2MjZEcf1JKFWsvrAaVAeSG.png' text='Proektorlar'/>
<MineSliderCardThree img='https://olcha.uz/image/132x132/category/x5z5aodCzueuVsKRDYENk1zemXt7lkAlzEwfVYxlTyZUZC6tInNO1nMBx4Ii.png' text='Stol usti kompyuteri'/>
<MineSliderCardThree img='https://olcha.uz/image/132x132/category/3zqMqpDfZMvjay59b2iWufHyALLNZTf7ASXUTNWqqka7UN61HvFnsL4PXQZC.png' text='Monitorlar uchun kronshteyn va'/>
<MineSliderCardThree img='https://olcha.uz/image/132x132/category/T1dnBr7hHj7iEMHxxUdoukgTlrckE4ZvP5ZgXn6vyxD1MGStcBcO7AQknXgD.png' text='Videoga olish'/>
<MineSliderCardThree img='https://olcha.uz/image/132x132/category/yDeU2PQMxsV0bmmsQhuheZYuVGBHUcynHQtfCK8BuTdN9iakbgoJcSzWaiFL.png' text='Laminator'/>
<MineSliderCardThree img='https://olcha.uz/image/132x132/category/LaB9mMMoPEGkCdnaNhLMMCmYHfjUN3scZsxLP0tx5rPXTOSLERe4cv67vu4I.png' text='Boshqa aksesuarlar'/>
<MineSliderCardThree img='https://olcha.uz/image/132x132/category/Zzb97hGmwgC8EpGI3uVEwgdtvf4k9Wx404mtejcvF2qvbTSIA6HMben2CDJL.png' text='Notbuklar'/>
<MineSliderCardThree img='https://olcha.uz/image/132x132/category/b9ndmxu7R1o0rNIfa66oTO5C8yGLz0rqSKPVIgsNOXf11pmxhJkp7zTOCZet.png' text='Monitorlar'/>
<MineSliderCardThree img='https://olcha.uz/image/132x132/category/Iq6S7Cpq55aiyWLPqwZlQ2xUfoflhJEdZMA6134N6LNtL6vm1T5Gx0HK7zHD.png' text='Kompyuter qurilmalari'/>
<MineSliderCardThree img='https://olcha.uz/image/132x132/category/rtlaqqb3RCtkWwTGNzGuP7XYTQKXEwlhYcOXjQnb2rv0l1pkM2KaJO6hYDrx.png' text='Ofiz jihoslari'/>
<MineSliderCardThree img='https://olcha.uz/image/132x132/category/tyKzuzHsiwtcG0EOir6M99veVVAqq5e5Pl2XjzbcG6qTHmIHqkBn6QWrJFAs.png' text='Notbuk uchun sumka rugzyaklar'/>
<MineSliderCardThree img='https://olcha.uz/image/132x132/category/ZwXYo5i5foFOx0KeoI1j7gWfkVZQmkcd0rvUYHg1022ZxDgIh2aDSGns2JZo.png' text='Tizm uskunalari'/>



</Carousel>
</div>
</div>
    </>
  )
}

export default MineSliderThree




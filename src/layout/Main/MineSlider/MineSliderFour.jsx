import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MineSliderCardThree from './MineSliderCardTwo';

function  MineSliderFour() {
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

<MineSliderCardThree img='https://olcha.uz/image/132x132/category/5uzeiAiDD0JU1hYypBzP81JojbtuyU0r8M51hno9VIWB6lrEhCyHZjHTbRK3.png' text='Uy, hunarmandchilik, dam olish, sevimli mashg‘ulotlar'/>
<MineSliderCardThree img='https://olcha.uz/image/132x132/category/gRojAdwCDRIFepTv8kFEezuNjg73kvK1VWjePck4lIryeZqskDvcor3Uoezg.png' text='Ilmiy kitoblar'/>
<MineSliderCardThree img='https://olcha.uz/image/132x132/category/OAlUH1igDV9uk88WzdtMamdKFa17SXtQQYyqr262PCipITDakWVvLgVbeKsv.png' text='Yuridik adabiyot'/>
<MineSliderCardThree img='https://olcha.uz/image/132x132/category/4fVSr9EaRy9s8qIagFdaAiD9QXZ6OizESqINkvWdVC65wBtDBg9b0Rzf0HYD.png' text='Tarixiy kitoblar'/>
<MineSliderCardThree img='https://olcha.uz/image/132x132/category/jMC6rP8bJ9rMqCz8MwJrjtRpOIYkUKfdfdfE0RsFeJMZczyCVWPzwhTTCzSw.' text='Politsiya dedektiv'/>
<MineSliderCardThree img='https://olcha.uz/image/132x132/category/uYFIf7HBVMI96x36MEKeFVP0Z8PbYLINkRmEr2ix9mzpNcgTS9id7DmwAel3.' text='Komikslar'/>
<MineSliderCardThree img='https://olcha.uz/image/132x132/category/1iZPWg82XKLt20sovlby8EZ8bT4b7j9Z6l6nJ62nJlbPOIATk3c92PdgnQFg.' text='Badiy bolmagan adabiyot'/>
<MineSliderCardThree img='https://olcha.uz/image/132x132/category/5yK3r8UKLMcuHObiZ4AXxYodnjfS5aop4cG6EPxylFMFr0r7fVgblETTDnpA.png' text='Diniy adabiyot'/>
<MineSliderCardThree img='https://olcha.uz/image/132x132/category/iHKQ7nwLLscZdyMxK3e9YuYfoAbIqy4gDZof2cHdA6HDPizXkeTfMCgu3nPq.png' text='Jahon Adabiyoti'/>
<MineSliderCardThree img='https://olcha.uz/image/132x132/category/sqA2nGEvav8egWM1WunDjt1lSZINJkYb3d9tqcmPckaP8QHU2vx86ne1p4PB.png' text='Bestsellar'/>
<MineSliderCardThree img='https://olcha.uz/image/132x132/category/NPVfjGzisZYuFz8VwYgYYpZhSV3pJSLBG9OPIzQk7NS5VMHrjMUfN0iOXVKb.png' text='Badiy adabiyot'/>
<MineSliderCardThree img='https://olcha.uz/image/132x132/category/18kKRA88CqIzsvhWX2Za8IlFGl3OMS3hoL68T21HrMqYaf5RqC5XCWoZeJuw.png' text='HUjatli kitoblar'/>
<MineSliderCardThree img='https://olcha.uz/image/132x132/category/FYmFKJebov4GTJmo6LRPjXIlKesl0xRXohVCAlrboxIY3D7zbWLzCBhTn2LB.png' text='Lugat va sozlagichlar'/>
<MineSliderCardThree img='https://olcha.uz/image/132x132/category/TQY3ngxAz2fsr50qL0sZNoUKtdrInHNrwiqWOP5Z6sxYYwUaTazj5XFKjzeg.png' text='Xorijiy, rus adabiyoti'/>
<MineSliderCardThree img='https://olcha.uz/image/132x132/category/CLLwudDVmfTwgF3qvoahWC3TxmIxqUqGIKKlXzqq1G7sUjsL2ahrXtOQQqQa.png' text='Abutrendlar uchun adabiyot'/>
<MineSliderCardThree img='https://olcha.uz/image/132x132/category/SHUCORyezFoWXo2E0gbUS7FOI8myFPNphalhmeeTe2PKeq0XHiUcHzBXnK4q.png' text='Sanat va madaniyat'/>
<MineSliderCardThree img='https://olcha.uz/image/132x132/category/XH0d1oXfbUiEevjkrMPDU8ejaYgpShVH5EDE3Y3PHWAzjNOf8prWOpjbcINh.png' text='Fantastika'/>
<MineSliderCardThree img='https://olcha.uz/image/132x132/category/WZd12H3ylb3G4HaoZbvBeDLDvZQwY7z432VCkwnWINHgoYKUyMeppq69tijm.png' text='IT kompyuter va internet'/>
<MineSliderCardThree img='https://olcha.uz/image/132x132/category/mNv0lLprJXvzZGiQiiRVXgYRGxMcZMQBRC0CXzgfsWvNQdPmduPIzHWBOF6h.png' text='Soglik gozalik psixologiyasi'/>
<MineSliderCardThree img='https://olcha.uz/image/132x132/category/h5z3RAe4Fcvb3LwKfn1VQoV4vCpkiRTNsokGdP1VBkpIGywHNiJIkhFRqFpc.png' text='Darslikalr'/>
<MineSliderCardThree img='https://olcha.uz/image/132x132/category/Qs8lAP5AcvBqHdY9b5dnZTEpweoQyJ2desC9K521YzI0JSgWZryIAB4kjw8f.png' text='Sayohat avtomobillar. Sport'/>
<MineSliderCardThree img='https://olcha.uz/image/132x132/category/zoIxlPkiX0jpTGQ4rbTLDc0d8m4GNSP2hOnsTeCz3xS59YywgSKar4MYvQAq.png' text='Bollar va ota-onalar uchun'/>




</Carousel>
</div>
</div>
    </>
  )
}

export default MineSliderFour




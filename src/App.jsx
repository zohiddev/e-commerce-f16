import Footer from "./layout/Footer/Footer"
import Header from "./layout/Header"
import Brands from "./layout/Main/brands"
import Link__images from "./layout/Main/Link__images"
import Swiper from "./layout/Main/swiper"
import MineSliders from "./layout/Main/MineSlider/MineSliders"
import Header from "./layout/Header/Header";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Swiper/>
      <MineSliders />
      <Brands />
      <Link__images/>
      <Footer />


      
    </div>
  );
}

export default App;

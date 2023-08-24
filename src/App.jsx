import Header from "./layout/Header";
import TecnologyProducts from "./layout/Main/TecnologyProducts";
import ClothesProducts from "./layout/Main/ClothesProducts";
import ConditsionerProducts from "./layout/Main/ConditsionerProducts";
import WashingMachinesProducts from "./layout/Main/WashingMachinesProducts";
import CosmeticsProducts from "./layout/Main/CosmeticsProduct";
import ComputerProducts from "./layout/Main/ComputerProducts";
import BootsProducts from "./layout/Main/BootsProducts";
import BooksProducts from "./layout/Main/BooksProducts";
import TelevisionsProducts from "./layout/Main/TelevisionsProducts";
import SportsToolsProducts from "./layout/Main/SportsToolsProducts";
import FridgesProducts from "./layout/Main/FridgesProduct";
import AutomobilProducts from "./layout/Main/AutomobilProducts";
import BuildingMaterialsProducts from "./layout/Main/BuildingMaterialsProducts";
import FakirProducts from "./layout/Main/FakirProducts";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <TecnologyProducts />
      <ClothesProducts/>
      <ConditsionerProducts />
      <WashingMachinesProducts />
      <CosmeticsProducts />
      <ComputerProducts />
      <BootsProducts />
      <BooksProducts />
      <TelevisionsProducts />
      <SportsToolsProducts />
      <FridgesProducts />
      <AutomobilProducts />
      <BuildingMaterialsProducts />
      <FakirProducts />
    </div>
  );
}

export default App;

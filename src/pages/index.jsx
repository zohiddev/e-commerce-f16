import React from 'react'
import Brands from '../layout/Main/brands'
import LinkImages from '../layout/Main/LinkImages'
import NotesCards from '../layout/Main/NotesCards'
import TecnologyProducts from '../layout/Main/TecnologyProducts'
import ClothesProducts from '../layout/Main/ClothesProducts'
import ConditsionerProducts from '../layout/Main/ConditsionerProducts'
import WashingMachinesProducts from '../layout/Main/WashingMachinesProducts'
import CosmeticsProducts from '../layout/Main/CosmeticsProduct'
import ComputerProducts from '../layout/Main/ComputerProducts'
import BootsProducts from '../layout/Main/BootsProducts'
import BooksProducts from '../layout/Main/BooksProducts'
import TelevisionsProducts from '../layout/Main/TelevisionsProducts'
import SportsToolsProducts from '../layout/Main/SportsToolsProducts'
import FridgesProducts from '../layout/Main/FridgesProduct'
import AutomobilProducts from '../layout/Main/AutomobilProducts'
import BuildingMaterialsProducts from '../layout/Main/BuildingMaterialsProducts'
import FakirProducts from '../layout/Main/FakirProducts'
import MineSliders from '../layout/Main/MineSlider/MineSliders'
import MainSwiper from '../layout/Main/MainSwiper'
import AppleCards from '../layout/Main/AppleCards'

const Home = () => {
  return (
    <>
      <MainSwiper />

      <AppleCards />
      <MineSliders />
      <Brands />
      <LinkImages />
      <NotesCards />
      <AppleProducts />
      <TecnologyProducts />
      <ClothesProducts />
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
    </>
  )
}

export default Home
import React from 'react'
import Brands from '../layout/Main/brands'
import LinkImages from '../layout/Main/LinkImages'
import NotesCards from '../layout/Main/NotesCards'
import MineSliders from '../layout/Main/MineSlider/MineSliders'
import MainSwiper from '../layout/Main/MainSwiper'
import AppleCards from '../layout/Main/AppleCards'
import Products from '../layout/Main/Products'

const Home = () => {
  return (
    <main className='main'>
      <MainSwiper />
      <AppleCards />
      <MineSliders />
      <Brands />
      <LinkImages />
      <NotesCards />
      <Products />
    </main>
  )
}

export default Home
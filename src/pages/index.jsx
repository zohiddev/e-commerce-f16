import React from 'react'
import Brands from '../layout/Main/brands'
import LinkImages from '../components/products/linkImagesProduct.jsx/LinkImages'
import NotesCards from '../components/products/notesProduct.jsx/NotesCards'
import MineSliders from '../layout/Main/MineSlider/MineSliders'
import MainSwiper from '../layout/Main/MainSwiper'
import Products from '../layout/Main/Products'

const Home = () => {
  return (
    <main className='main'>
      <MainSwiper />
      {/* <AppleCards /> */}
       <MineSliders />
      {/*<Brands />
      <LinkImages />
      <NotesCards /> */}
      <Products />
    </main>
  )
}

export default Home
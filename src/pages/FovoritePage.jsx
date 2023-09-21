import React from 'react'
import ProductItem from '../layout/Main/ProductItem'
import { useSelector } from 'react-redux'

function FovoritePage() {
  const {favorites} = useSelector(state => state)
  const isEmpty = favorites.items.length === 0
  return (
    <div className='personal-information__content'>
        <div className="container">
             <main>
             <div className="compare__info-head">
                <span>Избранные товары</span>
              </div>
              <div className=""></div>
              <div>
              {
               isEmpty ? <h1>Pustoy</h1> : favorites.items.map(item => (
                  <ProductItem key={item.id} product={item}/>
                ))
              }
              </div>
             </main>
        </div>
    </div>
  )
}

export default FovoritePage
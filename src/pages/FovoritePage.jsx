import React from 'react'
import ComputerProducts from '../layout/Main/ComputerProducts'

function FovoritePage() {
  return (
    <div className='personal-information__content'>
        <div className="container">
             <main>
             <div className="compare__info-head">
                <span>Избранные товары</span>
              </div>
              <div className=""></div>
              <div>
              < ComputerProducts />
              </div>
             </main>
        </div>
    </div>
  )
}

export default FovoritePage
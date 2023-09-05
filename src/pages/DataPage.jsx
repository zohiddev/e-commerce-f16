import React from 'react'
import { datapagemenucontentbottom, datapagemenucontenttop } from '../utils/data'
import { datapagemenucontentsubtitle } from '../utils/data'
function DataPage() {
  return (
    <div className="datapage container">
        <div className="datapage_title"><h1>Smartfon, telefon, gadjet, aksessuarlar</h1></div>
        <div className="datapage_product-information">
            <div className="datapage_product-information_menu-content">
                {datapagemenucontenttop.map(item =>(
                        <h1 key={item.id} className='datapage_product-information_menu-content-title hover-writing'>
                            {item.title}
                        </h1>
                ))}
                {datapagemenucontentsubtitle.map(item =>(
                        <h1 key={item.id} className='datapage_product-information_menu-content-subtitle hover-writing'>
                            {item.subtitle}
                        </h1>
                ))}
                {datapagemenucontentbottom.map(item =>(
                    <h1 key={item.id} className='datapage_product-information_menu-content-title hover-writing'>
                        {item.title}
                    </h1>
                ))}
            </div>
            <div className="datapage_product-information_category-page"></div>
        </div>
        <div className="datapage_popular-products"></div>
    </div>
  )
}

export default DataPage
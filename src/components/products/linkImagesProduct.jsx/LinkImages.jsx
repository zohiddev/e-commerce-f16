import React from 'react'
import { linkImagesData, linkImagesXlData } from '../../../data/linkImagesData'
import LinkCard from './LinkCard'
import LinkCardXl from './LinkCardXl'

function LinkImages() {

  return (
    <section className='all'>
          <div className='container images'>
            {linkImagesData.map((item) => (
              <LinkCard
              key={item.id}
              item={item}
              ></LinkCard>
            ))}
          </div>
      <div className="container images">
      {linkImagesXlData.map((item) => (
              <LinkCardXl
              key={item.id}
              item={item}
              ></LinkCardXl>
            ))}
      </div>
      <div className="container images">
        <a href="/" className="images__link-xl-horizontal">   
            <img src="./src/assets/images/xl-horizontal.png" alt="/" className="images__image-xl-horizontal none" />
            <img src="./src/assets/images/link__image-xl-horizontal1.png" alt="/" className="images__image-xl-horizontal" />
        </a>
      </div>
      <div className="container images">
        <a href="/" className="images__link-l">
            <img src="./src/assets/images/image-l.png" alt="/" className="images__image-l  none" />
            <img src="./src/assets/images/link__image-l1.png" alt="/" className="images__image-l" />
        </a>
      </div>
    </section>
  )
}

export default LinkImages
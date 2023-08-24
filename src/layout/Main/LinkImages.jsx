import React from 'react'

function LinkImages() {

  return (
    <div className='all'>
          <div className='images container'>
        <a href="/" className="images__link">
            <img src="./src/assets/images/link__image1.png" alt="/" className="images__image" />
        </a>
        <a href="/" className="images__link">
            <img src="./src/assets/images/link__image2.png" alt="/" className="images__image" />
        </a>
        <a href="/" className="images__link none">
            <img src="./src/assets/images/link__image3.png" alt="/" className="images__image" />
        </a>
    </div>
      <div className="images container">
        <a href="/" className="images__link-xl">
            <img src="./src/assets/images/link__image-xl1.png" alt="/" className="images__image-xl" />
        </a>
        <a href="/" className="images__link-xl">
            <img src="./src/assets/images/link__image-xl2.png" alt="/" className="images__image-xl" />
        </a>
      </div>
      <div className="images container">
        <a href="/" className="images__link-xl-horizontal">   
            <img src="./src/assets/images/xl-horizontal.png" alt="/" className="images__image-xl-horizontal none" />
            <img src="./src/assets/images/link__image-xl-horizontal1.png" alt="/" className="images__image-xl-horizontal" />
        </a>
      </div>
      <div className="images container">
        <a href="/" className="images__link-l">
            <img src="./src/assets/images/image-l.png" alt="/" className="images__image-l  none" />
            <img src="./src/assets/images/link__image-l1.png" alt="/" className="images__image-l" />
        </a>
      </div>
    </div>
  )
}

export default LinkImages
import React from 'react'

function LinkCardXl({item}) {
  return (
    <a href="/" className="images__link-xl">
    <img src={item.img} alt="/" className="images__image-xl scale" />
    </a>
  )
}

export default LinkCardXl
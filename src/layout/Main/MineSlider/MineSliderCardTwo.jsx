import React from 'react'

function MineSliderCardTwo(i) {
  return (
    <div className="mine2-slider__card">
  <div className="mine2-slider mine2-slider__bacground">
    <img src={i.img} alt="" className="mine2-slider__img" />
  </div>
  <div className="mine2-slider mine2-slider__text-container">
    <p className="mine2-slider__text">{i.text}</p>
  </div>
</div>
  )
}

export default MineSliderCardTwo
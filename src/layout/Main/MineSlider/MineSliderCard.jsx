import React from 'react'

function MineSliderCard(i) {
  return (
    <div className="mine-slider__card">
  <div className="mine-slider">
    <img src={i.img} alt="" className="mine-slider__img" />
  </div>
  <div className="mine-slider">
    <p className="mine-slider__text">{i.text}</p>
  </div>
</div>
  )
}

export default MineSliderCard
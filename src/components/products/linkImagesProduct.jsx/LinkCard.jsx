import React from 'react'

function LinkCard({item}) {
  return (
    <a href="/" className={item.divClass}>
    <img src={item.img} alt="/" className={item.class} />
    </a>
  )
}

export default LinkCard
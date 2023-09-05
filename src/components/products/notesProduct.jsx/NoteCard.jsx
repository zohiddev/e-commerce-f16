import React from 'react'
import { Link } from 'react-router-dom'

function NoteCard({item}) {
  return (
    <div className={`notes__note notes__${item.class}`}> 
    <Link to='/note' className="notes__container">
      <div className="notes__panel">
      <button className="notes__panel__button">l</button>
      <button className="notes__panel__button bottom">f</button>
      </div>
        <img src={item.img} alt="" className="notes__img" /> 
        <div className="notes__cont"> 
            <div className="notes__desc">{item.title}</div> 
            <a href="/" className="notes__link">{item.credit}</a> 
        </div> 
      </Link>
    </div>
  )
}

export default NoteCard
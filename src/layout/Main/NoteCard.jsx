import React from 'react'
import { Link } from 'react-router-dom'

function NoteCard(props) {
  return (
    <div className={`notes__note notes__${props.id}`}> 
    <Link to='/note' className="notes__container">
      <div className="notes__panel">
      <button className="notes__panel__button">B</button>
      </div>
        <img src={props.img} alt="" className="notes__img" /> 
        <div className="notes__cont"> 
            <div className="notes__desc">{props.title}</div> 
            <a href="/" className="notes__link">{props.credit}</a> 
        </div> 
      </Link>
    </div>
  )
}

export default NoteCard
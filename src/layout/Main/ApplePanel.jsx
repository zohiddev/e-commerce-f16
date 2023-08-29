import React from 'react'
import LikeIconGray from '../../assets/icons/LikeIconGray'
import ProfileIconGray from '../../assets/icons/ProfileIconGray'
import AppleBacket from '../../assets/icons/AppleBacket'

function ApplePanel(props) {
  return (
    <div className='apple'>
        <div className="apple__card">
            <div className="apple__content">
                <img className='apple__products-img' src={props.img} alt="" />
                <div className='apple__items'>
                    <a href="/" className='apple__title-link'>{props.title}</a>
                    <p className='apple__subtitle'>{props.subtitle}</p>
                    <p className='apple__kredit'>{props.kredit}</p>
                </div>
                <div className="apple__card-buttons">
                    <button className='apple__basket-icon'>
                        <AppleBacket/>
                    </button>

                    <button className='apple__text-button'>
                        muddatli to'lov
                    </button>
                </div>
            </div>
                <div className="apple__icons">
                    <button className='apple__like'>
                        <LikeIconGray/>
                    </button>
                    <br />
                    <br />
                    <br />
                    <button className='apple__profile'>
                        <ProfileIconGray/>
                    </button>
                </div>
        </div>
    </div>
  )
}

export default ApplePanel
import React from 'react'
import ApplePanel from './ApplePanel';
import RightArrowIcon from '../../assets/icons/RightArrowIcon';
import Bascet from '../../assets/icons/BascetIcon';
import LikeIconGray from '../../assets/icons/LikeIconGray';
import ProfileIconGray from '../../assets/icons/ProfileIconGray';
import { appleList } from '../../utils/data';

function AppleCards() {
    return (
        <div className='apple__all'>

            <div className="apple__text-content">
                <div className="apple__info">
                    <h1 className='apple__info-text'>Apple Texnikasi</h1>
                    <div className="apple__arrow-link">
                        <a href="/" className='apple__link'>BARCHASINI KO'RISH</a>
                        <RightArrowIcon />
                    </div>
                </div>
            </div>

            <div className="apple__all-items">

                <div className="apple__mouse">
                    <div className="apple__mouse-card">
                        <div>

                            <img src="./src/assets/images/appleImg1.jpg" alt="" />
                            <div className="apple__mouse-items">
                                <a href="" className='apple__mouse-link'>Apple Magic mouse 3</a>
                                <p className='apple__title'>1 455 00 so'm</p>
                                <p className='apple__kredit'>189 000 so'm x 12 oy</p>
                            </div>
                            <div className="apple__card-buttons">
                                <button className='apple__basket-icon'>
                                    <Bascet />
                                </button>

                                <button className='apple__button-text apple__button-text'>
                                    muddatli to'lov
                                </button>
                            </div>
                        </div>

                        <div className="apple__icons">
                            <button className='apple__like'>
                                <LikeIconGray />
                            </button>
                            <br />
                            <br />
                            <br />
                            <button className='apple__profile'>
                                <ProfileIconGray />
                            </button>
                        </div>
                    </div>

                    <div className="apple__watch">
                        <div className="apple__watch-content">
                            <img className='apple__watch-image' src="./src/assets/images/appleImg6.jpeg" alt="" />
                            <div className='apple__watch-items'>
                                <a href="/" className='apple__watch-link'>Aqlli soat Aplle Watch Ultra</a>
                                <p className='apple__watch-price'>12 183 000 so'm</p>
                                <p className='apple__kredit'>1 443 000 so'm x 12 oy</p>
                            </div>
                        </div>
                    </div>


                </div>

                <div className='apple__cards-row'>
                    <div className='apple__b'>
                        <div className="apple__youtube">
                            <iframe width="460" height="300" className='apple__video' src="https://www.youtube.com/embed/FT3ODSg1GFE?si=lI8JuXkhkL8I_8dk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>

                        <div className="apple__watch">
                            <div className="apple__ipad-content">
                                <img className='apple__ipad-image' src="./src/assets/images/appleImg7.jpg" alt="" />
                                <div className="apple__title">
                                    <div className='apple__flex'>

                                        <div className='apple__watch-items'>
                                            <a href="/" className='apple__ipad-link'>Magic Keybooard Russian 12.9-inc 2021 Oq</a>
                                            <p className='apple__watch-price'>6 273 000 so'm</p>
                                            <p className='apple__kredit'>811 000 so'm x 12 oy</p>
                                        </div>

                                        <div className="apple__icons">
                                            <button className='apple__like'>
                                                <LikeIconGray />
                                            </button>
                                            <br />
                                            <br />
                                            <br />
                                            <button className='apple__profile'>
                                                <ProfileIconGray />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="apple__ipad-buttons">
                                        <button className='apple__basket-icon'>
                                            <Bascet />
                                        </button>

                                        <button className='apple__button-text apple__button-text'>
                                            muddatli to'lov
                                        </button>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>


                    <div className='apple__card-row'>
                        {
                            appleList.map((item, key) => (
                                <ApplePanel
                                    key={key}
                                    img={item.img}
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    kredit={item.kredit}
                                />
                            ))
                        }

                    </div>
                </div>

            </div>

        </div>

    )
}

export default AppleCards
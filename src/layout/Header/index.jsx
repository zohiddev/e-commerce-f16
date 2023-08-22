import React, { useState } from 'react'
import React from 'react'
import MainLogo from '../../assets/icons/MainLogo'
import BurgerIcon from '../../assets/icons/BurgerIcon'
import SearchIcon from '../../assets/icons/SearchIcon'
import CompareIcon from '../../assets/icons/CompareIcon'
import LikeIcon from '../../assets/icons/LikeIcon'
import BascetIcon from '../../assets/icons/BascetIcon'
import ProfileIcon from '../../assets/icons/ProfileIcon'
import Xicon from '../../assets/icons/Xicon'
import DownArrow from '../../assets/icons/DownArrow'
import { categoryData } from '../../data/category'


const Header = () => {
    const [activeCategory, setActiveCategory] = useState(1)
    const [isOpen, setIsOpen] = useState(false);


    const handleSidebarToggle = () => {
        setIsOpen(!isOpen);
    }

    const handleActiveCategory = (id) => {
        setActiveCategory(id)
    }

    const closeSidebar = () => {
        setIsOpen(false);
    };


    const Header = () => {
        return (
            <header className='header'>
                <div className="container">
                    <div className="header__wrapper">
                        <a href="/" className="header__logo">
                            <MainLogo />
                        </a>
                        <div className="header__catalog header-catalog">
                            <button className='header-catalog__button' onClick={handleSidebarToggle}></button>
                            {isOpen ? <Xicon /> : <BurgerIcon />}
                            <button className='header-catalog__button'>
                                <BurgerIcon />
                                <span className='header-catalog__title'>Katalog</span>
                            </button>
                        </div>
                        <div className="header__search header-search">
                            <input type="text" className="header-search__input" placeholder="Katalog bo'yicha qidirish" />
                            <button className="header-search__button">
                                <SearchIcon />
                            </button>
                        </div>
                        <div className="header__buttons header-buttons">
                            <button className="header-buttons__item">
                                <span className="header-buttons__icon">
                                    <CompareIcon />
                                </span>
                                <span>Taqqoslash</span>
                            </button>
                            <button className="header-buttons__item">
                                <span className="header-buttons__icon">
                                    <LikeIcon />
                                </span>
                                <span>Sevimlilar</span>
                            </button>
                            <button className="header-buttons__item">
                                <span className="header-buttons__icon">
                                    <BascetIcon />
                                </span>
                                <span>Savatcha</span>
                            </button>
                            <button className="header-buttons__item">
                                <span className="header-buttons__icon">
                                    <ProfileIcon />
                                </span>
                                <span>Kirish</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={isOpen ? 'header__dropdown open' : 'header__dropdown close'} >
                    <div className="container">
                        <div className="header__dropdown__content">
                            <div className="header__dropdown__nav">
                                <div className="header__dropdown__nav__title">
                                    <div className="header__dropdown__nav_text">Kategoriyalar</div>
                                    <button className="header__dropdown__nav_icon" onClick={closeSidebar}><Xicon /></button>
                                </div>
                                {
                                    categoryData.map(item => (
                                        <a
                                            // href={item.path} 
                                            className="header__dropdown__link"
                                            onMouseEnter={() => handleActiveCategory(item.id)}
                                        >
                                            {item.name_uz}
                                            <span className='header__dropdown__link__icon'><DownArrow /></span>
                                        </a>
                                    ))
                                }
                            </div>
                            <div className="header__dropdown__info">
                                {
                                    categoryData.find(item => item.id === activeCategory).children.map(subItem => (
                                        <div className="tv__panel__item">
                                            <p className="tv__panel__item__title">{subItem.name_uz}</p>
                                            {
                                                subItem.children.map(el => (
                                                    <a className="tv__panel__item__link">{el.name_uz}</a>
                                                ))
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header
import React from 'react'
import { useState } from 'react'
import MainLogo from '../../assets/icons/MainLogo'
import BurgerIcon from '../../assets/icons/BurgerIcon'
import SearchIcon from '../../assets/icons/SearchIcon'
import CompareIcon from '../../assets/icons/CompareIcon'
import LikeIcon from '../../assets/icons/LikeIcon'
import BascetIcon from '../../assets/icons/BascetIcon'
import ProfileIcon from '../../assets/icons/ProfileIcon'
// import Xicon from '../../assets/icons/Xicon'
// import DownArrow from '../../assets/icons/DownArrow'
// import { categoryData } from '../../data/category'
import HomeIcon from '../../assets/icons/HomeIcon'
import CategorySearch from '../../assets/icons/CategorySearch'
import PhoneIcon from '../../assets/icons/PhoneIcon'
import { categoryData } from '../../data/category'
import BottomArrow from '../../assets/icons/BottomArrow'
import CloseIcon from '../../assets/icons/CloseIcon'


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
    }


    
    const [open, setOpen] = useState(false)

    function openModal(){
        setOpen(true)
    }

    function closeModal(){
        setOpen(false)
    }

    return (
        <header className='header'>
            <div className="container">
                <div className="header__wrapper">
                    <a href="/" className="header__logo">
                        <span className='header__logo__icon'><PhoneIcon/></span>
                        <MainLogo />
                        <span className='header__logo__nothing'></span>
                    </a>
                    <div className="header__info">
                       <div className="header__catalog header-catalog">
                        <button className='header-catalog__button' onClick={handleSidebarToggle}>
                        {isOpen ? <Xicon/> : <BurgerIcon/>} 
                            <span className='header-catalog__title'>Katalog</span>
                        </button>
                       </div>
                       <div className="header__search header-search">
                        <input onClick={closeSidebar} type="text" className="header-search__input" placeholder="Katalog bo'yicha qidirish" />
                        <button className="header-search__button">
                            <SearchIcon />
                        </button>
                       </div>
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
                        <button onClick={() => openModal()} className="header-buttons__item">
                            <span className="header-buttons__icon">
                                <ProfileIcon />
                            </span>
                            <span>Kirish</span>
                            
                        </button>


                    </div>
                </div>
                            {/* <div className='header-black'></div> */}
                      
            </div>
                <div  className="modal-wrapper">
                    <div className={open ? 'modal show': 'modal hide'}>
                        {/* <div className="modal-black__layer"></div> */}
                        <div className="modal-content">
                                <h1 className='modal-title'>Tizimga kirish yoki profil yaratish</h1>
                                <p className='modal-number'>Telefon raqami</p>
                            <div className="modal-region">
                                <p className='modal-region__value'>+998 <BottomArrow/> </p>
                                <input className='modal-phone' min={2} maxLength={5} type="number" max={2} />
                            </div>
                                <button className='modal-confirmation'>Tasdiqlash</button>
                    </div>
                            <div className='modal-close'>
                                <button onClick={() => closeModal()} className='modal-close__icon'>
                                    <CloseIcon/>

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
                            <button className="header__dropdown__nav_icon" onClick={closeSidebar}>x</button>
                        </div>
                        {
                            categoryData.map(item => (
                                <a 
                                    // href={item.path} 
                                    className="header__dropdown__link"
                                    onMouseEnter={() => handleActiveCategory(item.id)}
                                >
                                    {item.name_uz} 
                                    <span className='header__dropdown__link__icon' onClick={() => handleActiveCategory(item.id)}></span>
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
                                            <a  className="tv__panel__item__link">{el.name_uz}</a>
                                        ))
                                    }
                                </div>
                            ))
                        }
                       </div> 
                    </div>
                </div>
            </div>
            <div className="header__navigation">
                <div className="container">
                    <div className="header__navigation__buttons">
                        <button className="header__navigation__button">
                            <HomeIcon/>
                            <span className='header__navigation__button__text'>Asosiy</span>
                        </button>
                        <button className="header__navigation__button">
                            <CategorySearch/>
                            <span className='header__navigation__button__text'>Katalog</span>
                        </button>
                        <button className="header__navigation__button">
                            <LikeIcon/>
                            <span className='header__navigation__button__text'>Sevimlilar</span>
                        </button>
                        <button className="header__navigation__button">
                            <BascetIcon/>
                            <span className='header__navigation__button__text'>Savatcha</span>
                        </button>
                        <button className="header__navigation__button">
                            <ProfileIcon/>
                            <span className='header__navigation__button__text'>Kirish</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
import React, { useState } from 'react'
import MainLogo from '../../assets/icons/MainLogo'
import BurgerIcon from '../../assets/icons/BurgerIcon'
import SearchIcon from '../../assets/icons/SearchIcon'
import CompareIcon from '../../assets/icons/CompareIcon'
import LikeIcon from '../../assets/icons/LikeIcon'
import BascetIcon from '../../assets/icons/BascetIcon'
import ProfileIcon from '../../assets/icons/ProfileIcon'
import HomeIcon from '../../assets/icons/HomeIcon'
import CategorySearch from '../../assets/icons/CategorySearch'
import PhoneIcon from '../../assets/icons/PhoneIcon'
import BottomArrow from '../../assets/icons/BottomArrow'
import CloseIcon from '../../assets/icons/CloseIcon'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoriesList } from '../../redux/services/CategoriesService'

const Header = () => {
    const [activeCategory, setActiveCategory] = useState(413)
    const [isOpen, setIsOpen] = useState(false);
    const {items, loading} = useSelector(state => state.categories)
    const dispatch = useDispatch()

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

    function openModal() {
        setOpen(true)
    }

    function closeModal() {
        setOpen(false)
    }

    useEffect(() => {
        dispatch(getCategoriesList())
    }, [])


    return (
        <header className='header'>
            <div className="container">
                <div className="header__wrapper">
                    <Link to="/" className="header__logo">
                        <span className='header__logo__icon'><PhoneIcon /></span>
                            <MainLogo />
                        <span className='header__logo__nothing'></span>
                    </Link>
                    <div className="header__info">
                        <div className="header__catalog header-catalog">
                            <button className='header-catalog__button' onClick={handleSidebarToggle}>
                                {isOpen ? 'X' : <BurgerIcon />}
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
                        <Link className="header-buttons__item" to="/compare">
                            <span className="header-buttons__icon">
                                <CompareIcon />
                            </span>
                            <span>Taqqoslash</span>
                        </Link>
                        <Link className="header-buttons__item" to="/fovorite">
                            <span className="header-buttons__icon">
                                <LikeIcon />
                            </span>
                            <span>Sevimlilar</span>
                        </Link>
                        <Link to="/basket" className="header-buttons__item">

                            <span className="header-buttons__icon">
                                <BascetIcon />
                            </span>
                            <span>Savatcha</span>
                        </Link>
                        <button onClick={() => openModal()} className="header-buttons__item">

                            <span className="header-buttons__icon">
                                <ProfileIcon />
                            </span>
                            <span>Kirish</span> 
                        </button>
                    </div>
                </div>

            </div>
            <div  className={open ? 'modal-wrapper show' : 'modal-wrapper hide'}>
                <div className='modal'>
                    <div className="modal-content">
                    <div className='modal-close'>
                        <button onClick={() => closeModal()} className='modal-close__icon'>
                            <CloseIcon />
                        </button>
                    </div>
                        <h1 className='modal-title'>Tizimga kirish yoki profil yaratish</h1>
                        <p className='modal-number'>Telefon raqami</p>
                        <div className="modal-region">
                            <p className='modal-region__value'>+998 <BottomArrow /> </p>
                            <input className='modal-phone'  maxLength={9} type="number"/>
                        </div>
                        <button className='modal-confirmation'>Tasdiqlash</button>
                    </div>
                </div>

            </div>
            <div className={isOpen ? 'header__dropdown open' : 'header__dropdown close'} >
                <div className="container">
                    <div className="header__dropdown__content">
                        <div className="header__dropdown__nav">
                            <div className="header__dropdown__nav__title">
                                <div className="header__dropdown__nav_text">Kategoriyalar</div>
                                <button className="header__dropdown__nav_icon" onClick={closeSidebar}>X</button>
                            </div>
                            {
                                loading ? <h1>Loading....</h1> : items.map((item, key) => (
                                    <a
                                    key={key}
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
                                loading ? <h1>Loading...</h1> : items.find(item => item.id === activeCategory)?.children?.map((subItem, key) => (
                                    <div className="tv__panel__item" key={key}>
                                        <p className="tv__panel__item__title">{subItem.name_uz}</p>
                                        {
                                            subItem.children.map((el, i) => (
                                                <a className="tv__panel__item__link" key={i}>{el.name_uz}</a>
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
                            <HomeIcon />
                            <span className='header__navigation__button__text'>Asosiy</span>
                        </button>
                        <button className="header__navigation__button">
                            <CategorySearch />
                            <span className='header__navigation__button__text'>Katalog</span>
                        </button>
                        <button className="header__navigation__button">
                            <LikeIcon />
                            <span className='header__navigation__button__text'>Sevimlilar</span>
                        </button>
                        <button className="header__navigation__button">
                            <BascetIcon />
                            <span className='header__navigation__button__text'>Savatcha</span>
                        </button>
                        <button className="header__navigation__button">
                            <ProfileIcon />
                            <span className='header__navigation__button__text'>Kirish</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
import React from 'react'
import MainLogo from '../../assets/icons/MainLogo'
import BurgerIcon from '../../assets/icons/BurgerIcon'
import SearchIcon from '../../assets/icons/SearchIcon'
import CompareIcon from '../../assets/icons/CompareIcon'
import LikeIcon from '../../assets/icons/LikeIcon'
import BascetIcon from '../../assets/icons/BascetIcon'
import ProfileIcon from '../../assets/icons/ProfileIcon'

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__wrapper">
                    <a href="/" className="header__logo">
                        <MainLogo />
                    </a>
                    <div className="header__catalog header-catalog">
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
                        <div className="login_popup">
                            <div className="login_popup-title">Tizimga kirish yoki profil yaratish</div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
import React from "react";
import MainLogo from "../../assets/icons/MainLogo";
import FooterAppleIcon from "../../assets/icons/FooterAppleIcon";
import FooterPmarketIcon from "../../assets/icons/FooterPmarketIcon";
import FooterOlcaUzIcon from "../../assets/icons/FooterOlcaUzIcon";
import FooterLocetIcon from "../../assets/icons/FooterLocetIcon";
import FooterMailIcon from "../../assets/icons/FooterMailIcon";
import FooterApelsinIcon from "../../assets/icons/FooterApelsinIcon";
import FooterUzcardIcon from "../../assets/icons/FooterUzcardIcon";
import FooterClickIcon from "../../assets/icons/FooterClickIcon";
import FooterPaymeIcon from "../../assets/icons/FooterPaymeIcon";
import FooterHunoIcon from "../../assets/icons/FooterHunoIcon";
import FooterPaynetIcon from "../../assets/icons/FooterPaynetIcon";
import FooterBottonFacebookIcon from "../../assets/icons/FooterBottonFacebookIcon";
import FooterBottonInstaIcon from "../../assets/icons/FooterBottonInstaIcon";
import FooterBottonTgIcon from "../../assets/icons/FooterBottonTgIcon";

function Footer() {
  return (
    <>
    <footer className="footer">
      {/* <div className="footer__to-top">
        <div className="to-top__container _container">
          <button className="to-top__btn">
            <MainLogo />
          </button>
        </div>
      </div> */}
      <div className="footer__top top-footer">
        <div className="top-footer__container ">  
        <div className="top-footer__stores">
          <div className="top-footer__stores-head">
          Наше мобильное приложение доступно в AppGallery, App store и Google play
          </div>
          <div className="top-footer__btns">
            <a href=""><FooterAppleIcon/></a>
            <a href=""><FooterPmarketIcon/></a>
            <a href=""><FooterOlcaUzIcon/></a>
          </div>
        </div>
        <div className="top-footer__image">
          <picture>
            <img src="/src/assets/images/top-footer__img.png" alt="footer img"/>
          </picture>
        </div>
        </div>
       </div>
      <div className="footer__mid mid-footer">
        <div className="container">
        <div className="mid-footer__container _container">
          <div className="mid-footer__col">
            <a href=""> <MainLogo /></a>
            <div className="mid-footer__phone">
              <span>Телефон поддержки</span>
              <a href="tel:998712022021" >+998 (71) 202 202 1</a>
            </div>
            <div className="mid-footer__geo">
              <span className="mid-footer__geo-icon">
                <FooterLocetIcon />
                Козитарнов, Ташкент
              </span>
            </div>
            <div className="mid-footer__mail">
              <FooterMailIcon />
              <a href="mailto:info@olcha.uz">info@olcha.uz</a>
            </div>
          </div>
          <div className="mid-footer__col">
            <div className="mid-footer__head">
             Информация
            </div>
            <div className="mid-footer__content">
              <ul>
                <li><a href="https://olcha.uz/ru/page/about-company">О компании </a></li>
                <li><a href="https://olcha.uz/ru/page/vacancy">Вакансии</a></li>
                <li><a href="https://olcha.uz/ru/page/return-and-exchange">Возврат и обмен товаров</a></li>
                <li><a href="https://olcha.uz/ru/page/usloviya-rassrochki">Условия рассрочки</a></li>
                <li><a href="https://olcha.uz/ru/help">Помощь</a></li>
                <li><a href="https://olcha.uz/ru/page/payment-and-delivery">Доставка</a></li>
              </ul>
              <ul>
                <li><a href="https://olcha.uz/ru/page/eco-friendly"> Eco-friendly </a></li>
                <li><a href="https://olcha.uz/ru/page/bonus-program">Бонусы и акции</a></li>
                <li><a href="https://olcha.uz/ru/page/payment-and-delivery">Оплата и доставка</a></li>
                <li><a href="https://olcha.uz/ru/sell-on-olcha" className="red-text__footer">Продавайте на olcha</a></li>
                <li><a href="https://olcha.uz/ru/service-centers">Сервисные центры</a></li>
              </ul>
            </div>
          </div>
          <div className="mid-footer__col">
            {/* ================== */}
             <div className="mid-footer__payments">
              <a href=""><FooterApelsinIcon /> </a> 
              <a href=""><FooterUzcardIcon /></a> 
              <a href=""><FooterClickIcon /></a>
              <a href=""><FooterPaymeIcon /></a>
              <a href=""><FooterHunoIcon /></a>
              <a href=""><FooterPaynetIcon /></a>
             </div>
            {/* ================== */}
          </div>
        </div>
        </div>
        <div className="footer__bottom bottom-footer">
          <div className="bottom-footer__container _container">
          <div className="mid-footer__col">
            <div className="bottom-footer__copy"> © 2017-2023. ООО "Olcha store" </div>
          </div>
          <div className="mid-footer__col">
            <div className="bottom-footer__public">
              <a href="https://olcha.uz/ru/page/public-offer">Публичная оферта</a>
              <a href="https://olcha.uz/ru/page/policy">Политика конфиденциальности</a>
            </div>
          </div>
          <div className="mid-footer__col">
            <div className="bottom-footer__socials">
              <a href="https://m.facebook.com/olchauz/?wtsid=rdr_07xPi7kjQ5jz1SwI5"><FooterBottonFacebookIcon /></a>
              <a href="https://www.instagram.com/olcha_uz/"><FooterBottonInstaIcon /></a>
              <a href="https://t.me/olchauz"><FooterBottonTgIcon /></a>
            </div>
          </div>
          </div>
        </div> 
      </div>
    </footer>
    </>
  );
}

export default Footer;
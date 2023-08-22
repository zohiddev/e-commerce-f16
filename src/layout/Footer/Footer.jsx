import React from "react";
import FooterAppleIconn from "../../assets/icons/FooterAppleIcon";
import FooterPmarketIcon from "../../assets/icons/FooterPmarketIcon";
import FooterOlcaUzIcon from "../../assets/icons/FooterOlcaUzIcon";
import MainLogo from "../../assets/icons/MainLogo";
import FooterMailIcon from "../../assets/icons/FooterMailIcon";
import FooterLocetIcon from "../../assets/icons/FooterLocetIcon";
import footerApelsinIcon from "../../assets/icons/footerApelsinIcon";
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
      <div className="footer__top">
        <div className="top-footer__container">
          <div className="top-footer__stores">
            <div className="top-footer__stores-head">
              <h2 className="text__footer-top">
                Бизнинг мобил иловамиз AppGallery, App store ва Google play-да
              </h2>
            </div>
            <div className="top-footer__btns">
              <a href="#" className="btns-top__footer">
                {FooterAppleIconn}
              </a>
              <a href="#" className="btns-top__footer">
                {FooterPmarketIcon}
              </a>
              <a href="#" className="btns-top__footer">
                {FooterOlcaUzIcon}
              </a>
            </div>
          </div>
          <div className="top-footer__image">
            <img
              src="./src/assets/images/Picture → footer-img.745872f8.webp (1).png"
              alt="footer img"
            />
          </div>
        </div>
      </div>
      <div className="footer__top">
        <div className="mid-footer__container">
          <div className="mid-footer__col">
            <div className="mid-footer__first">
              <a href="/" className="footer-olcha__logo">
                <MainLogo />
              </a>
              <div className="mid-footer__phone">
                <span className="footer-text__qolab">
                  Qo'llab-quvvatlash raqami
                </span>
                <div>
                  <a href="/" className="mid-footer__phonenam">
                    +998 (71) 202 2021
                  </a>
                </div>
              </div>
              <div>
                <div className="mid-footer__mail">
                  {FooterMailIcon}
                  <a href="/">info@olcha.uz</a>
                </div>
                <div className="mid-footer__geo">
                  {FooterLocetIcon}
                  <span>Qozitarnov, Toshkent</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mid-footer__col">
            <div className="mid-footer__head">
              <span>Информация</span>
            </div>
            <div className="mid-footer__content">
              <div className="mid-footer__lists">
                <div className="list__footer">
                  <p>
                    <a href="/">Biz haqimizda</a>
                  </p>
                  <p>
                    <a href="/">Bo'sh ish o'rinlari</a>
                  </p>
                  <p>
                    {" "}
                    <a href="/">
                      To‘lovni qaytarish va tovarlarni almashtirish
                    </a>
                  </p>
                  <p>
                    <a href="/">Muddatli to’lov shartlari</a>
                  </p>
                  <p>
                    <a href="/">Yordam</a>
                  </p>
                  <p>
                    <a href="/">Yetkazib berish</a>

                  </p>
                </div>
              </div>
              <div className="list__footer">
                <p>
                  {" "}
                  <a href="/">Eco-friendly</a>
                </p>
                <p>
                  {" "}
                  <a href="/">Bonus va aksiyalar</a>
                </p>
                <p>
                  <a href="/">To’lov va yetkazib berish</a>
                </p>
                <p>
                  <a href="/">
                    <span className="red-footer">olcha da soting</span>
                  </a>
                </p>
                <p>
                  {" "}
                  <a href="/">Servis markazlari</a>
                </p>
              </div>
            </div>
          </div>
          {/* <div className="mid-footer__col"> */}
          <div className="mid-footer__payments">
            <a href="/">{footerApelsinIcon}</a>
            <a href="/">{FooterUzcardIcon}</a>
            <a href="/">{FooterClickIcon}</a>
            <a href="/">{FooterPaymeIcon}</a>
            <a href="/">{FooterHunoIcon}</a>
            <a href="/">{FooterPaynetIcon}</a>
          </div>
        </div>
      </div>
      {/* </div> */}
      <div className="footer__bottom">
        {/* <div className="bottom-footer__container"> */}
            <div className="botton-footer__copy">
              © 2017-2023. ООО "Olcha store"
            </div>
              <div className="bottom-footer__public">
                <a href="#">Публичная оферта</a>
                <a href="#">Политика конфиденциальности</a>
              </div>
            <div className="bottom-footer__socials">
              <a href="#">{FooterBottonFacebookIcon}</a>
              <a href="#">{FooterBottonInstaIcon}</a>
              <a href="#">{FooterBottonTgIcon}</a>
            </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default Footer;
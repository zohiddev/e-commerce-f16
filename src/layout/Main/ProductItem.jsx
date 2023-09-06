import React from "react"; 
import HeartIcon from "../../assets/icons/HeartIcon"; 
import CompareIconProduct from "../../assets/icons/CompareIconProduct"; 
import MagazineIcon from "../../assets/icons/MagazineIcon"; 
import { useState } from "react"; 
import ProductsMinusIcon from "../../assets/icons/ProductsMinusIcon"; 
import ProductsPlusIcon from "../../assets/icons/ProductsPlusIcon"; 
import CheckIcon from "../../assets/icons/CheckIcon"; 
import CircleXIcon from "../../assets/icons/CircleXIcon"; 
 
const ProductItem = ({ product }) => { 
  const [value, setValue] = useState(false); 
  const [open, setOpen] = useState(true) 
  const [scale, setScale] = useState(false) 
  const [isRed, setIsRed] = useState(false) 
  const [isRedCompare, setIsRedCompare] = useState(false) 
  const [transform, setTransform] = useState(false) 
 
 
 
 
  const handleCountButtonOpen = () =>{ 
    setValue(true) 
    setOpen(false) 
  } 
 
  const handleCountButtonClose = () =>{ 
    setValue(false) 
    setOpen(true) 
  } 
 
  const handleLikeButton = () =>{ 
    setIsRed(!isRed) 
  } 
 
  const handleCompareButton = () =>{ 
    setIsRedCompare(!isRedCompare) 
    setTransform(true) 
    setTimeout(() => { 
      setTransform(false); 
    }, 3500); 
  } 
 
 
   
  const handlePopupCloseButton = () =>{ 
    setTransform(false) 
  } 
 
 
 
 
 
 
 
 
 
  return ( 
    <> 
    <div className="noutbuk_first "> 
      <div className="noutbuk_first_image"> 
        <div className="noutbuk_first_image_discount"> 
          <h1 className="noutbuk_first_image_discount_title"> 
            {" "} 
            {product.discount}{" "} 
          </h1> 
        </div> 
        <div className="noutbuk_first_image_image"> 
          <img 
            className="noutbuk_first_image_image_image" 
            src={product.img} 
            alt="noutbuk_first" 
          /> 
        </div> 
        <div className="noutbuk_first_image_icons"> 
          <p className={isRed ? "noutbuk_first_image_heart active": "noutbuk_first_image_heart"} onClick={handleLikeButton}><HeartIcon/></p> 
          <p className={isRedCompare ? "noutbuk_first_image_compare active": "noutbuk_first_image_compare"} onClick={handleCompareButton}><CompareIconProduct /></p> 
        </div> 
      </div> 
      <div className="noutbuk_first_texts"> 
        <div className="noutbuk_first_texts_title"> 
          <a href="#">{product.title}</a> 
        </div> 
        <div className="noutbuk_first_texts_lastpayment"> 
          <a href="#">{product.lastpayment}</a> 
        </div> 
        <div className="noutbuk_first_texts_payment"> 
          <a href="#">{product.paymment}</a> 
        </div> 
        <div className="noutbuk_first_texts_credit"> 
          <a className="noutbuk_first_texts_credit_title" href="#"> 
            {product.credit} 
          </a> 
        </div> 
      </div> 
      <div className="noutbuk_first_buttons"> 
        <button className="noutbuk_first_buttons_magazine" onClick={handleCountButtonOpen}> 
          <MagazineIcon /> 
        </button> 
        <button className={open ? 'noutbuk_first_buttons_book' : 'noutbuk_first_buttons_book close'}>In installments</button> 
        <div className={value ? 'noutbuk_first_buttons_count open' : 'noutbuk_first_buttons_count'}> 
          <button className="noutbuk_first_buttons_minus" onClick={handleCountButtonClose}><ProductsMinusIcon /></button> 
          <span className="noutbuk_first_buttons_count_value">1</span> 
          <button className="noutbuk_first_buttons_plus"><ProductsPlusIcon /></button> 
        </div> 
      </div> 
    </div> 
    <div className={transform ? 'popup open' : 'popup'}> 
      <div className="popup_row"> 
        <div className="popup_icon"><CheckIcon/></div> 
        <div className="popup_content"> 
          <p className="popup_text">Mahsulot taqqoslash uchun qo'shildi</p> 
          <button className="popup_button">O'tish</button> 
        </div> 
      <div className="popup_close" onClick={handlePopupCloseButton}><CircleXIcon/></div> 
      </div> 
    </div> 
    </> 
  ); 
};

export default ProductItem;

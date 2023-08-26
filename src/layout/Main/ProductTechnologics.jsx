import React from "react";
import HeartIcon from "../../assets/icons/HeartIcon";
import CompareIconProduct from "../../assets/icons/CompareIconProduct";
import MagazineIcon from "../../assets/icons/MagazineIcon";
import { Link } from "react-router-dom";

const ProductTechnologics = (props) => {
  console.log(props.id);
  return (
    <Link to={`product/${props.id}`} className="noutbuk_first ">
      <div className="noutbuk_first_image">
        <div className="noutbuk_first_image_discount">
          <h1 className="noutbuk_first_image_discount_title">
            {" "}
            {props.discount}{" "}
          </h1>
        </div>
        <div className="noutbuk_first_image_image">
          <img
            className="noutbuk_first_image_image_image"
            src={props.img}
            alt="noutbuk_first"
          />
        </div>
        <div className="noutbuk_first_image_icons">
          <HeartIcon className="noutbuk_first_image_icons_heart" />
          <CompareIconProduct />
        </div>
      </div>
      <div className="noutbuk_first_texts">
        <div className="noutbuk_first_texts_title">
          <a href="#">{props.title}</a>
        </div>
        <div className="noutbuk_first_texts_lastpayment">
          <a href="#">{props.lastpayment}</a>
        </div>
        <div className="noutbuk_first_texts_payment">
          <a href="#">{props.paymment}</a>
        </div>
        <div className="noutbuk_first_texts_credit">
          <a className="noutbuk_first_texts_credit_title" href="#">
            {props.credit}
          </a>
        </div>
      </div>
      <div className="noutbuk_first_buttons">
        <button className="noutbuk_first_buttons_magazine">
          <MagazineIcon />
        </button>
        <button className="noutbuk_first_buttons_book">In installments</button>
      </div>
    </Link>
  );
};

export default ProductTechnologics;

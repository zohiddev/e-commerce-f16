import React from "react";
import HeartIcon from "../../assets/icons/HeartIcon";
import CompareIconProduct from "../../assets/icons/CompareIconProduct";
import MagazineIcon from "../../assets/icons/MagazineIcon";
import TrashIcon from "../../assets/icons/TrasIcon";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slices/CartSlice";
import { addFavorite, removeFavorite } from "../../redux/slices/FavoritesSlice";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const {favorites} = useSelector(state => state)
  const dispatch = useDispatch()

  const checkFavorite = () => { 
    return favorites.items.some(item => item.id === product.id)
  }

  const handleFavorite = () => {
    if(checkFavorite()){
      dispatch(removeFavorite(product.id))
    }else{
      dispatch(addFavorite(product))
    }
  }

  return (
    <Link to={`/product/${product.slug}`}>
    
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
            src={product.image}
            alt="noutbuk_first"
          />
        </div>
        <div className="noutbuk_first_image_icons">
          <button onClick={handleFavorite}>
            {
              checkFavorite() ? <TrashIcon className="noutbuk_first_image_icons_heart" /> : <HeartIcon className="noutbuk_first_image_icons_heart" />
            }
            
          </button>
          <CompareIconProduct />
        </div>
      </div>
      <div className="noutbuk_first_texts">
        <div className="noutbuk_first_texts_title">
          <a href="#">{product.name_uz}</a>
        </div>
        <div className="noutbuk_first_texts_lastpayment">
          <a href="#">{product.previous_price}</a>
        </div>
        <div className="noutbuk_first_texts_payment">
          <a href="#">{product.price}</a>
        </div>
        {/* <div className="noutbuk_first_texts_credit">
          <a className="noutbuk_first_texts_credit_title" href="#">
            {product.credit}
          </a>
        </div> */}
      </div>
      <div className="noutbuk_first_buttons">
        <button className="noutbuk_first_buttons_magazine" 
        onClick={() => dispatch(addToCart(product))}>
          <MagazineIcon />
        </button>
        <button className="noutbuk_first_buttons_book">In installments</button>
      </div>
    </div>

    </Link>
  );
};

export default ProductItem;

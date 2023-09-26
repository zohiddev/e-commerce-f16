import React from "react";
import HeartIcon from "../../assets/icons/HeartIcon";
import CompareIconProduct from "../../assets/icons/CompareIconProduct";
import MagazineIcon from "../../assets/icons/MagazineIcon";
import TrashIcon from "../../assets/icons/TrasIcon";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slices/CartSlice";
import { addFavorite, removeFavorite } from "../../redux/slices/FavoritesSlice";
import { Link } from "react-router-dom";
import { addComparedProducts, removeComparedProducts } from "../../redux/slices/CompareSlice";

const ProductItem = ({ product }) => {
  const {favorites} = useSelector(state => state)
  const {comparedProducts} = useSelector(state => state.compare)
  const dispatch = useDispatch()
  const isSale = product.discount_type === '-'

  const checkFavorite = () => { 
    return favorites.items.some(item => item.id === product.id)
  }

  const checkCompare = () => {
    return comparedProducts.some(item => item.id === product.id)
  }

  const handleFavorite = () => {
    if(checkFavorite()){
      dispatch(removeFavorite(product.id))
    }else{
      dispatch(addFavorite(product))
    }
  }

  const handleCompare = () => {
    if(checkCompare()){
      dispatch(removeComparedProducts(product.id))
    }else{
      dispatch(addComparedProducts(product))
    }
  }

  const calculatePercent = () => {
    return Math.ceil((Number(product.discount_value) * 100) / product.max_price)
  }

  return (
   
    
    <div className="noutbuk_first ">
      <div className="noutbuk_first_image">
        {
         isSale ? null : <div className="noutbuk_first_image_discount">
          <h1 className="noutbuk_first_image_discount_title">
            {" "}
            {product.discount_type === 'value' ? calculatePercent() : Number(product.discount_value)}%
          </h1>
        </div>
        }
       <Link to={`/product/${product.alias}`}><div className="noutbuk_first_image_image">
          <img
            className="noutbuk_first_image_image_image"
            src={product.main_image}
            alt="noutbuk_first"
          />
        </div>
        </Link> 
        <div className="noutbuk_first_image_icons">
          <button onClick={handleFavorite}>
            {
              checkFavorite() ? <TrashIcon className="noutbuk_first_image_icons_heart" /> : <HeartIcon className="noutbuk_first_image_icons_heart" />
            }
            
          </button>
          <button onClick={handleCompare}>
            {checkCompare() ? <TrashIcon className="noutbuk_first_image_icons_heart" /> : <CompareIconProduct /> } 
          </button>
        </div>
      </div>
      <div className="noutbuk_first_texts">
        <div className="noutbuk_first_texts_title">
        <Link to={`/product/${product.alias}`}>{product.name_uz}</Link>
        </div>
        {product.max_price ?  <div className="noutbuk_first_texts_lastpayment">
          <a href="#">{product.max_price.toLocaleString()}</a>
        </div> : null }
        <div className="noutbuk_first_texts_payment">
          <a href="#">{Number(product.total_price).toLocaleString()}</a>
        </div>
        <div className="noutbuk_first_texts_credit">
          <a className="noutbuk_first_texts_credit_title" href="#">
            {product.monthly_repayment.toLocaleString()} сум x {product.plan.max_period} мес
          </a>
        </div>
      </div>
      <div className="noutbuk_first_buttons">
        <button className="noutbuk_first_buttons_magazine" 
        onClick={() => dispatch(addToCart(product))}>
          <MagazineIcon />
        </button>
        <button className="noutbuk_first_buttons_book">In installments</button>
      </div>
    </div>

  );
};

export default ProductItem;

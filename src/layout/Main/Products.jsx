import React from "react";
import ProductItem from "./ProductItem";
import { productData } from "../../data/productsData";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductsS } from "../../redux/services/ProductsService";

function Products() {
  const {items} = useSelector(state => state.products)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductsS())
  }, [])

  return (
    <div>
      <div className="noutbuk_f">
        <div className="container">
          <div className="noutbook__content">
            <div className="noutbuk_first_row">
              {items.map((item, key) => (
                <ProductItem
                  key={key}
                  product={item}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;

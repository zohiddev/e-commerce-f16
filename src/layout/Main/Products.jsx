import React from "react";
import ProductItem from "./ProductItem";
import { productData } from "../../data/productsData";

function Products() {
  return (
    <div>
      <div className="noutbuk_f">
        <div className="container">
          <div className="noutbook__content">
            <div className="noutbuk_first_row">
              {productData.map((item, key) => (
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
